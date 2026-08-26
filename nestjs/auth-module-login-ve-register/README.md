# Auth Module, Login ve Register

Önceki derste JWT'nin ne olduğunu ve nasıl çalıştığını öğrendin. Şimdi bu bilgiyi gerçek koda dönüştürme vakti. Bu derste tam bir `AuthModule` inşa edeceksin: kullanıcı kaydı, giriş ve JWT token üretimi. Passport kullanmıyoruz — sadece `@nestjs/jwt` ve standart NestJS araçları.

## Auth Module Yapısı

İyi organize edilmiş bir auth modülü üç ana parçadan oluşur: `AuthModule`, `AuthService` ve `AuthController`.

**AuthModule** — Diğer modülleri bir araya getiren çerçevedir. `JwtModule`'ü konfigüre eder, `AuthService` ve `AuthController`'ı tanımlar. `JwtModule`'ü export etmesi önemlidir — böylece başka modüllerdeki guard'lar `JwtService`'e erişebilir.

**AuthService** — Tüm business logic burada yaşar. Kullanıcı kaydı, giriş doğrulaması ve token üretimi bu servis üzerinden yürür. Veri tabanı işlemleri için `PrismaService`'e, token işlemleri için `JwtService`'e bağımlıdır.

**AuthController** — HTTP endpoint'lerini tanımlar. `POST /auth/kayit` ve `POST /auth/giris` route'larını expose eder. İş mantığını kendisi yapmaz — her şeyi `AuthService`'e delege eder. Controller ince tutulur, servis şişman olur.

## ConfigModule Kurulumu

`ConfigModule`, `.env` dosyasındaki environment değişkenlerine tip-güvenli şekilde erişmeni sağlar. `@nestjs/config` paketini yükle:

```bash
npm install @nestjs/config
```

`AppModule`'de `ConfigModule.forRoot({ isGlobal: true })` olarak import et. `isGlobal: true` sayesinde her modülde tekrar import etmen gerekmez:

```typescript
// app.module.ts — ConfigModule global
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule {}
```

`ConfigService`'i inject ederek `config.get<string>('JWT_SECRET')` şeklinde değerlere erişirsin. `.env` dosyanda şu değişkenler tanımlı olmalı:

```
JWT_SECRET="en-az-32-karakter-uzun-rastgele-bir-deger"
JWT_EXPIRES_IN="24h"
```

Tip parametresi `<string>` opsiyoneldir ama kodun ne beklediğini açıkça belirtmek için önerilir.

## JwtModule Kurulumu

`JwtModule.registerAsync()` kullan — `register()` değil. `registerAsync`, `ConfigService`'i inject etmene ve secret gibi değerleri `.env`'den okumanı sağlar. Değerleri doğrudan koda gömmekten kaçın:

```typescript
// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRES_IN', '24h') },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [JwtModule], // Guard'ların JwtService kullanabilmesi için
})
export class AuthModule {}
```

`exports: [JwtModule]` satırına dikkat et. `AuthGuard` gibi yapılar başka modüllerde `JwtService`'i kullanmak isteyebilir. `JwtModule`'ü export etmezsen, `AuthModule`'ü import eden modüller `JwtService`'e erişemez ve dependency injection hatası alırsın.

`signOptions` içindeki `expiresIn` ikinci parametre olarak `'24h'` default değeri alıyor. `.env`'de bu değişken tanımlı değilse `24h` kullanılır.

## Kullanıcı Kaydı — register

Kayıt işlemi birkaç kritik adımdan oluşur. Önce e-posta çakışmasını kontrol et, sonra şifreyi hash'le, ardından kullanıcıyı kaydet:

```typescript
// auth/auth.service.ts
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async kayitOl(email: string, ad: string, sifre: string) {
    const mevcut = await this.prisma.kullanici.findUnique({ where: { email } });
    if (mevcut) throw new ConflictException('Bu e-posta zaten kayıtlı');

    const hashliSifre = await bcrypt.hash(sifre, 10);
    const kullanici = await this.prisma.kullanici.create({
      data: { email, ad, sifre: hashliSifre },
    });

    return this.tokenUret(kullanici.id, kullanici.email);
  }

  async girisYap(email: string, sifre: string) {
    const kullanici = await this.prisma.kullanici.findUnique({ where: { email } });

    // Güvenlik: her iki hata için aynı mesajı kullan
    // (farklı mesajlar "bu email kayıtlı mı?" sorusuna cevap verir)
    if (!kullanici || !(await bcrypt.compare(sifre, kullanici.sifre))) {
      throw new UnauthorizedException('Geçersiz kimlik bilgileri');
    }

    return this.tokenUret(kullanici.id, kullanici.email);
  }

  private async tokenUret(kullaniciId: number, email: string) {
    const payload = { sub: kullaniciId, email };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
```

`bcrypt.hash(sifre, 10)` — ikinci parametre salt round sayısıdır. 10, endüstri standardı olarak kabul edilmiş değerdir. Değeri artırmak güvenliği artırır ama CPU maliyetini de artırır. 10-12 arası makul bir aralıktır. Şifreyi hiçbir zaman plain text olarak kaydetme; `bcrypt` otomatik olarak her şifreye benzersiz bir salt ekler, böylece iki kullanıcı aynı şifreye sahip olsa bile hash'ler farklı çıkar.

Kayıt başarılıysa `tokenUret` private metodunu çağır ve `{ accessToken: "..." }` formatında döndür. Kullanıcıyı kayıt olduktan hemen sonra token döndürerek ekstra bir login adımını ortadan kaldırırsın — bu UX açısından yaygın bir tercih.

## Giriş — login

```typescript
async girisYap(email: string, sifre: string) {
  const kullanici = await this.prisma.kullanici.findUnique({ where: { email } });

  if (!kullanici || !(await bcrypt.compare(sifre, kullanici.sifre))) {
    throw new UnauthorizedException('Geçersiz kimlik bilgileri');
  }

  return this.tokenUret(kullanici.id, kullanici.email);
}
```

Burada kritik bir güvenlik detayı var: kullanıcı bulunamadığında da, şifre yanlış olduğunda da **aynı hata mesajı** kullanılıyor — "Geçersiz kimlik bilgileri". Neden?

Eğer "Bu e-posta kayıtlı değil" ve "Şifre hatalı" gibi farklı mesajlar döndürürsen, saldırgan sistematik olarak e-posta adreslerinin sistemde kayıtlı olup olmadığını test edebilir (bu tür saldırıya "user enumeration" denir). Aynı mesajı her iki durumda kullanarak bu bilgi sızıntısını önlersin.

`bcrypt.compare(sifre, kullanici.sifre)` — bu karşılaştırma timing-safe'dir. Normal string karşılaştırması (`===`) timing saldırılarına (timing attack) açık olabilir çünkü eşleşmeyen karaktere ulaştığında erken döner. `bcrypt.compare` sabit sürede çalışır.

## Token Üretimi ve Doğrulama

Token üretimi `jwtService.signAsync(payload)` ile yapılır:

```typescript
private async tokenUret(kullaniciId: number, email: string) {
  const payload = { sub: kullaniciId, email };
  return {
    accessToken: await this.jwtService.signAsync(payload),
  };
}
```

Payload'da `sub` (subject) alanı JWT standardında kullanıcı ID'si için kullanılır. `email` de eklenir — bu sayede token doğrulandıktan sonra kullanıcı ID'si ve e-postasına tek seferde erişirsin, veritabanına gitmen gerekmez.

Token doğrulaması için bir guard yazarsın. Guard, `CanActivate` interface'ini implement eder ve `JwtService.verifyAsync(token, { secret })` çağrısı yapar:

```typescript
// auth/jwt.guard.ts (önizleme)
const payload = await this.jwtService.verifyAsync(token, {
  secret: this.configService.get<string>('JWT_SECRET'),
});
```

`verifyAsync` hem imzayı doğrular hem de `exp` claim'ini kontrol eder — token süresi dolmuşsa otomatik olarak hata fırlatır. Başarılı olursa decode edilmiş payload'u döndürür; bu payload'u `request` nesnesine ekleyerek controller'da `@Req()` ile erişebilirsin.

## AuthController

Controller, DTO sınıflarıyla birlikte gelir. DTO'lar hem validation hem de type safety sağlar:

```typescript
// auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { AuthService } from './auth.service';

export class KayitDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  ad: string;

  @IsString()
  @MinLength(8)
  sifre: string;
}

export class GirisDto {
  @IsEmail()
  email: string;

  @IsString()
  sifre: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('kayit')
  kayitOl(@Body() dto: KayitDto) {
    return this.authService.kayitOl(dto.email, dto.ad, dto.sifre);
  }

  @Post('giris')
  girisYap(@Body() dto: GirisDto) {
    return this.authService.girisYap(dto.email, dto.sifre);
  }
}
```

`KayitDto`'da `sifre` için `@MinLength(8)` kullanılıyor. Bu, zayıf şifrelerin veritabanına ulaşmadan reddedilmesini sağlar. Validation'ın çalışması için `main.ts`'de `ValidationPipe` global olarak tanımlı olmalı:

```typescript
// main.ts
app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
```

`whitelist: true` seçeneği DTO'da tanımlı olmayan alanları request body'den otomatik olarak çıkarır. Bu, istemeden fazla veri gönderilmesini önler.

`GirisDto`'da `sifre` için minimum uzunluk kontrolü yok — kullanıcı giriş yaparken mevcut şifresini giriyor, formatta bir kısıtlama uygulamak gereksiz. Validation sıkılığı bağlama göre ayarlanır.

## Uçtan Uca Akış

Şimdiye kadar yazılan kod bir bütün olarak nasıl çalışır? Bir HTTP isteğinin yolculuğunu takip edelim.

**Kayıt isteği:**

```
POST /auth/kayit
{ "email": "ali@ornek.com", "ad": "Ali", "sifre": "gizli1234" }
```

1. `ValidationPipe` gelen body'yi `KayitDto`'ya karşı doğrular
2. `AuthController.kayitOl()` çağrılır
3. `AuthService.kayitOl()` e-posta çakışmasını kontrol eder
4. `bcrypt.hash("gizli1234", 10)` çalışır → hash üretilir
5. Kullanıcı veritabanına kaydedilir
6. `jwtService.signAsync({ sub: 1, email: "ali@ornek.com" })` çalışır
7. `{ accessToken: "eyJ..." }` döner

**Giriş isteği:**

```
POST /auth/giris
{ "email": "ali@ornek.com", "sifre": "gizli1234" }
```

1. E-posta ile kullanıcı bulunur
2. `bcrypt.compare("gizli1234", hash)` → `true`
3. Yeni token üretilir ve döner

Token alındıktan sonra korumalı endpoint'lere `Authorization: Bearer <token>` header'ıyla istek yapılır. Custom `AuthGuard` token'ı doğrular ve işlem devam eder.

Bu yapı scale edilebilir. Refresh token eklemek istersen `AuthService`'e yeni bir metot eklersin. Role-based authorization için payload'a `role` claim'i ekleyip guard'da kontrol edersin. Temel iskelet değişmez.
