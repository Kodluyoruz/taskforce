# Guards ve Korumalı Route'lar

NestJS uygulamalarında bazı endpoint'lere yalnızca kimliği doğrulanmış kullanıcıların erişmesini istersin. Bunu sağlamanın en doğru yolu guard kullanmaktır. Guard'lar, bir isteğin route handler'a ulaşıp ulaşmayacağını belirleyen sınıflardır. Bu yazıda custom bir JWT guard yazacak, tek tek route'ları koruyacak, ardından global guard + `@Public()` decorator kombinasyonuna geçeceksin.

---

## Guard Nedir?

Guard, `CanActivate` interface'ini implement eden bir sınıftır. Tek bir metod barındırır: `canActivate`. Bu metod `true` döndürürse istek handler'a geçer; `false` döndürür ya da bir exception fırlatırsa istek reddedilir.

```typescript
export interface CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
```

Guard'ın NestJS pipeline'ındaki yeri şöyledir:

```
İstek → Middleware → Guard → Interceptor (before) → Pipe → Handler → Interceptor (after) → Yanıt
```

Yani guard'lar middleware'den sonra, interceptor ve pipe'lardan önce çalışır. Bu sıralama önemlidir: middleware'de henüz kimlik doğrulaması yapılmamış olabilir; ama guard çalışana kadar request parse edilmiş ve middleware zinciri tamamlanmıştır.

`ExecutionContext`, `canActivate` metoduna iletilir ve mevcut isteğe dair her şeye erişim sağlar. HTTP istekleri için `context.switchToHttp().getRequest()` ile Express `Request` nesnesine ulaşırsın. Aynı context WebSocket veya gRPC gibi farklı transport'larda da çalışır; bu sayede tek bir guard birden fazla protokolü destekleyebilir.

Guard'lar `@Injectable()` ile işaretlenir ve NestJS'in dependency injection sistemine tam olarak entegre olur. Bu sayede servisler, config değerleri ve diğer provider'lar doğrudan constructor'a inject edilebilir.

---

## JWT Auth Guard

Passport.js kullanmadan, doğrudan `JwtService` ile JWT doğrulaması yapan bir guard yazalım. Bu yaklaşım daha fazla kontrol sağlar ve gereksiz soyutlama katmanlarından kaçınır.

```typescript
// auth/guards/auth.guard.ts — Passport kullanmadan JWT doğrulama
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.tokenCikar(request);

    if (!token) {
      throw new UnauthorizedException('Token bulunamadı');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.config.get<string>('JWT_SECRET'),
      });
      // Payload'u request'e ekle — controller'dan @Request() ile erişilebilir
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Geçersiz veya süresi dolmuş token');
    }

    return true;
  }

  private tokenCikar(request: Request): string | undefined {
    const [tip, token] = request.headers.authorization?.split(' ') ?? [];
    return tip === 'Bearer' ? token : undefined;
  }
}
```

Bu guard'ın yaptığı işlemleri adım adım inceleyelim:

**1. Token çıkarma:** `Authorization` header'ı `Bearer <token>` formatındadır. `tokenCikar` metodu bu header'ı boşluktan böler; ilk parça `Bearer` ise ikinci parçayı döndürür, değilse `undefined` döner.

**2. Token yoksa hata fırlat:** Token bulunamazsa `UnauthorizedException` fırlatılır. NestJS bunu otomatik olarak 401 HTTP yanıtına dönüştürür.

**3. Token doğrulama:** `jwtService.verifyAsync` token'ı doğrular ve payload'u decode eder. Secret `ConfigService` üzerinden `.env` dosyasından okunur; bu sayede ortam değişkeni doğrudan kod içine gömülmez.

**4. Payload'u request'e ekle:** Decode edilen payload `request['user']` olarak atanır. Controller'lar bu değere `@Request()` decorator'ı aracılığıyla erişebilir.

**5. Exception catch:** `jwtService.verifyAsync` token geçersizse veya süresi dolduysa hata fırlatır. `catch` bloğu bunu yakalar ve `UnauthorizedException` ile sarmalar.

---

## Tek Route'u Korumak

Guard'ı belirli bir endpoint'e uygulamak için `@UseGuards()` decorator'ını kullanırsın:

```typescript
// users/users.controller.ts
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('kullanicilar')
export class UsersController {
  @UseGuards(AuthGuard)
  @Get('profil')
  profil(@Request() req: { user: { sub: number; email: string } }) {
    return req.user;
  }

  @Get('herkese-acik')
  herkesAcik() {
    return { mesaj: 'Bu endpoint herkese açık' };
  }
}
```

`@UseGuards()` hem metod hem de controller seviyesinde kullanılabilir. Controller seviyesinde kullanırsan tüm endpoint'ler otomatik olarak korunur:

```typescript
@UseGuards(AuthGuard)
@Controller('kullanicilar')
export class UsersController {
  // Bu controller'daki tüm endpoint'ler korumalıdır
}
```

`req.user` üzerinden eriştiğin değer, JWT oluştururken payload içine koyduğun her şeydir. Genellikle `sub` (kullanıcı ID'si) ve `email` alanları bulunur.

---

## Global Guard ve @Public() Dekoratörü

Her endpoint'e tek tek `@UseGuards()` eklemek yorucu ve hata yapmaya açık bir yaklaşımdır. Bunun yerine guard'ı global olarak kayıt edip, yalnızca açık bırakmak istediğin endpoint'leri işaretlemek daha temiz bir yoldur.

Global guard kaydı için `APP_GUARD` token'ını kullanmalısın. `app.useGlobalGuards()` yerine bu yöntemi tercih etmek gerekir çünkü `APP_GUARD` NestJS'in dependency injection sistemine tam entegrasyon sağlar; `useGlobalGuards()` ise module dışında kayıt yaptığı için DI çalışmaz ve constructor inject edilemez.

Önce `@Public()` decorator'ını oluştur:

```typescript
// @Public() dekoratörü
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
```

`SetMetadata` ile bir route veya controller'a metadata ekleyebilirsin. Guard içinde bu metadata'ya `Reflector` aracılığıyla erişirsin.

Şimdi guard'ı global kullanıma hazır hale getirelim:

```typescript
// auth/guards/auth.guard.ts — Global guard + @Public() desteği
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true; // @Public() işaretliyse geç

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.tokenCikar(request);

    if (!token) throw new UnauthorizedException('Token bulunamadı');

    try {
      request['user'] = await this.jwtService.verifyAsync(token, {
        secret: this.config.get<string>('JWT_SECRET'),
      });
    } catch {
      throw new UnauthorizedException('Geçersiz veya süresi dolmuş token');
    }

    return true;
  }

  private tokenCikar(request: Request): string | undefined {
    const [tip, token] = request.headers.authorization?.split(' ') ?? [];
    return tip === 'Bearer' ? token : undefined;
  }
}
```

`reflector.getAllAndOverride` metodu önce metod seviyesinde, ardından class seviyesinde metadata'ya bakar. Bu sayede hem `@Public()` decorator'ı bir metoda hem de tüm controller'a uygulanabilir.

Guard'ı `AppModule`'e kaydet:

```typescript
// app.module.ts — Global guard kaydı (APP_GUARD ile DI destekli)
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/guards/auth.guard';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
```

Artık tüm route'lar varsayılan olarak korunmaktadır. `@Public()` ile işaretlenen endpoint'ler guard'ı atlar:

```typescript
// auth/auth.controller.ts — @Public() ile login/register korumasız
import { Public } from '../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  @Public()  // Global guard bu endpoint'i atlar
  @Post('giris')
  girisYap(@Body() dto: GirisDto) {
    return this.authService.girisYap(dto.email, dto.sifre);
  }

  @Public()
  @Post('kayit')
  kayitOl(@Body() dto: KayitDto) {
    return this.authService.kayitOl(dto.email, dto.ad, dto.sifre);
  }
}
```

Login ve register endpoint'leri `@Public()` ile işaretlenmezse kullanıcı sisteme giriş yapabilmek için zaten geçerli bir token'a sahip olmak zorunda kalır; bu da döngüsel bir problem yaratır.

---

## Request'ten Kullanıcıyı Okumak

Guard `request['user']` değerini ayarladıktan sonra, controller'da bu değere `@Request()` veya kısaltması olan `@Req()` decorator'ı ile erişirsin:

```typescript
// Korunan endpoint'te kullanıcıya erişim
@Get('profil')
profil(@Request() req: { user: { sub: number; email: string } }) {
  return req.user;
}
```

TypeScript'te `req` nesnesinin tipini açıkça belirtmek iyi bir pratiktir. JWT payload'unda ne varsa burada göründüğünü unutma: eğer token oluştururken `{ sub: kullanici.id, email: kullanici.email, rol: kullanici.rol }` kullandıysan, `req.user.rol` da erişilebilir olur.

Bazı projelerde tüm request nesnesini almak yerine yalnızca kullanıcı bilgisini direkt almak daha temizdir. Bunu `@CurrentUser()` adlı custom bir param decorator ile yapabilirsin:

```typescript
// Şu an için önizleme — bir sonraki yazıda detaylı ele alınacak
@Get('profil')
profil(@CurrentUser() kullanici: { sub: number; email: string }) {
  return kullanici;
}
```

`@CurrentUser()` decorator'ı `@Request()` ile `request.user`'ı çeken bir sarmalayıcıdır. Bir sonraki konuda custom param decorator'larını nasıl yazacağını göreceğiz.

---

## Guard Execution Order

NestJS pipeline'ında çalışma sırası belirlidir:

```
Middleware → Guard → Interceptor (önce) → Pipe → Handler → Interceptor (sonra) → Exception Filter
```

Birden fazla guard kullandığında, hepsi sırayla çalışır ve hepsinin `true` döndürmesi gerekir. Herhangi biri `false` dönerse veya exception fırlatırsa istek reddedilir, sonraki guard'lar çalışmaz.

```typescript
@UseGuards(AuthGuard, RolesGuard)  // Önce AuthGuard, sonra RolesGuard
@Get('admin')
adminPaneli() { ... }
```

Bu örnekte `AuthGuard` önce token'ı doğrular ve `request['user']`'ı set eder. `RolesGuard` ise ardından kullanıcının gerekli role sahip olup olmadığını kontrol eder. Sıra önemlidir: kimlik doğrulanmadan yetki kontrolü yapılamaz.

Guard'ları middleware ile karıştırmamak gerekir. Middleware her zaman guard'lardan önce çalışır ve tipik olarak CORS, body parsing, request logging gibi işlevler için kullanılır. Kimlik doğrulama ve yetkilendirme ise guard'ların sorumluluk alanıdır çünkü guard'lar `ExecutionContext` aracılığıyla route metadata'sına erişebilir; middleware erişemez.

Bir `RolesGuard` örneği nasıl görünürdü? Roller gibi farklı metadata bilgileri için aynı `Reflector` + `SetMetadata` kalıbı kullanılır:

```typescript
// Rol bazlı erişim için ek guard örneği (konsept gösterimi)
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const gerekliRoller = this.reflector.getAllAndOverride<string[]>('roller', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!gerekliRoller) return true;

    const { user } = context.switchToHttp().getRequest();
    return gerekliRoller.some((rol) => user.roller?.includes(rol));
  }
}
```

Bu guard, `request['user']` üzerindeki `roller` dizisini kontrol eder. `AuthGuard`'ın önceden çalışarak `request['user']`'ı set etmiş olması şarttır; bu yüzden sıra kritiktir.

Guard'lar NestJS'in en güçlü yapı taşlarından biridir. Kimlik doğrulama, yetkilendirme ve politika tabanlı erişim kontrolü gibi cross-cutting concern'leri merkezi bir noktada yönetmeni sağlar. Global guard + `@Public()` kombinasyonu, "önce koru, sonra açık bırak" yaklaşımını mümkün kılar; bu da güvenlik açısından çok daha sağlam bir varsayılan davranış oluşturur.
