# Exception Filters

Bir API geliştirirken hatalar kaçınılmazdır. Veritabanında kayıt bulunamaması, yetkisiz erişim girişimleri, geçersiz veri — bunların hepsi hata üretir. Önemli olan bu hataları nasıl yönettiğin.

NestJS, hata yönetimi için güçlü bir katmanlı yapı sunar: built-in exception sınıfları, `ExceptionFilter` interface'i ve bunları farklı kapsamlarda bağlamana izin veren decorator'lar. Bu yazıda bu yapıyı baştan sona ele alacağız.

## NestJS'te Hata Yönetimi

NestJS'in temel davranışı belirgindir: uygulama kodunda fırlatılan ve yakalanmayan tüm hatalar, otomatik olarak `500 Internal Server Error` olarak istemciye döner. Bunu değiştirmek için NestJS'in hata hiyerarşisini kullanman gerekir.

Bu hiyerarşinin tepesinde `HttpException` vardır. NestJS, uygulama katmanındaki tüm HTTP hatalarını bu sınıf üzerinden yönetir. Eğer fırlattığın hata `HttpException`'dan türemiyorsa, NestJS bunu bilinmeyen bir hata olarak değerlendirir ve 500 döner.

Hata fırlatmanın iki yolu var:

**1. Doğrudan `HttpException` kullanmak:**
```typescript
throw new HttpException('Kaynak bulunamadı', HttpStatus.NOT_FOUND);
```

**2. Built-in kısayol sınıflarını kullanmak:**
```typescript
throw new NotFoundException('Kaynak bulunamadı');
```

İkinci yöntem daha okunabilir ve tercih edilen yaklaşımdır. Ama kısayol sınıflarının neler sunduğunu anlamak için önce `HttpException`'ı iyi tanıman gerekir.

## HttpException Sınıfı

`HttpException`, NestJS'teki tüm HTTP hata sınıflarının temelidir. Constructor imzası şöyle:

```typescript
constructor(response: string | Record<string, any>, status: number, options?: HttpExceptionOptions)
```

- `response`: İstemciye dönecek yanıt gövdesi. String ya da nesne olabilir.
- `status`: HTTP durum kodu. `HttpStatus` enum'undan alman önerilir — `404` gibi magic number kullanmak yerine `HttpStatus.NOT_FOUND` yazmak kodu açık hale getirir.
- `options.cause`: Asıl hatayı saklaman için kullanılan opsiyonel alan. Bu değer istemciye **gönderilmez**, ama loglarda orijinal stack trace'e erişmeni sağlar.

```typescript
// Temel HttpException kullanımı
import { HttpException, HttpStatus } from '@nestjs/common';

// Uzun form
throw new HttpException('Kaynak bulunamadı', HttpStatus.NOT_FOUND);

// Nesne olarak özel response body
throw new HttpException(
  { mesaj: 'Kaynak bulunamadı', kod: 'NOT_FOUND' },
  HttpStatus.NOT_FOUND,
);

// cause ile orijinal hatayı sakla (loglar için)
try {
  await this.prisma.kullanici.findUniqueOrThrow({ where: { id } });
} catch (hata) {
  throw new HttpException('Kullanıcı bulunamadı', HttpStatus.NOT_FOUND, {
    cause: hata,
  });
}
```

`cause` alanı özellikle Prisma, TypeORM veya harici servis hataları gibi üçüncü taraf kütüphane hatalarını sarmaladığında işe yarar. İstemciye iç detayları sızdırmadan, logların tam bilgiye sahip olmasını sağlar.

## Built-in HTTP Exception Sınıfları

NestJS, en yaygın HTTP hata senaryoları için hazır exception sınıfları sunar. Bunlar `HttpException`'ı extend eder ve doğru durum kodunu otomatik olarak ayarlar.

| Sınıf | Durum Kodu | Kullanım Senaryosu |
|---|---|---|
| `NotFoundException` | 404 | Kayıt veya kaynak bulunamadı |
| `BadRequestException` | 400 | Geçersiz girdi, format hatası |
| `UnauthorizedException` | 401 | Kimlik doğrulama yapılmamış |
| `ForbiddenException` | 403 | Kimlik doğrulandı ama yetki yok |
| `ConflictException` | 409 | Çakışma — örneğin var olan e-posta |
| `UnprocessableEntityException` | 422 | Semantik hata, validation başarısız |
| `InternalServerErrorException` | 500 | Kontrolsüz sunucu hatası |
| `ServiceUnavailableException` | 503 | Servis geçici olarak kullanılamıyor |

```typescript
// Built-in kısayollar — tercih edilen yöntem
import {
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';

throw new NotFoundException('Kullanıcı bulunamadı');
throw new BadRequestException('Geçersiz e-posta formatı');
throw new UnauthorizedException('Lütfen giriş yapın');
throw new ConflictException('Bu e-posta adresi zaten kayıtlı');
```

`UnauthorizedException` ile `ForbiddenException` arasındaki ayrımı doğru kullanmak önemlidir: `401` kullanıcının kim olduğunu bilmediğin anlamına gelir; `403` ise kullanıcının kim olduğunu bilirsin ama istenen işlemi yapmasına izin vermiyorsun.

## Custom Exception Filter

Built-in sınıflar çoğu senaryoyu karşılar, ama tüm API genelinde tutarlı bir hata yanıt formatı istiyorsan — örneğin her hataya `{ basarili: false, durum: 404, mesaj: '...', yol: '...', zaman: '...' }` formatında yanıt dönmek — custom bir `ExceptionFilter` yazman gerekir.

Filter yazmak için `ExceptionFilter` interface'ini implement eden ve `@Catch()` decorator'ını kullanan bir sınıf oluşturursun:

```typescript
// Custom exception filter — standart hata formatı
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpHataFiltresi implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const durum = exception.getStatus();
    const yanit = exception.getResponse();

    response.status(durum).json({
      basarili: false,
      durum,
      mesaj: typeof yanit === 'string' ? yanit : (yanit as any).message,
      yol: request.url,
      zaman: new Date().toISOString(),
    });
  }
}
```

Birkaç önemli nokta:

**`ArgumentsHost` ve HTTP context:** `catch()` metoduna gelen `host` parametresi platform-agnostik bir sarmalayıcıdır — HTTP, WebSocket veya gRPC bağlamında çalışabilir. HTTP yanıtına erişmek için `host.switchToHttp()` çağrısını yapman gerekir. Bu, filter'ın yanlışlıkla HTTP dışı bağlamlarda Express/Fastify nesnelerine erişmeye çalışmasını engeller.

**`@Catch()` decorator'ına class referansı ver, instance değil:** `@UseFilters()` decorator'ını kullanırken instance yerine class referansı geçmen önerilir:

```typescript
// Önerilen — DI çalışır, memory daha verimli
@UseFilters(HttpHataFiltresi)

// Önerilmeyen — her istek için yeni instance oluşturur
@UseFilters(new HttpHataFiltresi())
```

Class referansı geçtiğinde NestJS filter'ı kendi DI container'ı üzerinden yönetir, mümkünse instance'ı yeniden kullanır ve filter içinde başka servisleri inject etmeni sağlar.

**`HttpAdapterHost` kullanımı:** Uygulamanın hem Express hem de Fastify ile çalışmasını istiyorsan, doğrudan `Response` nesnesi yerine `HttpAdapterHost` kullanman gerekir. Bu sayede platform-agnostik kod yazarsın:

```typescript
import { Catch, ArgumentsHost, HttpException, ExceptionFilter } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class TumHatalarFiltresi implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const durum =
      exception instanceof HttpException
        ? exception.getStatus()
        : 500;

    httpAdapter.reply(ctx.getResponse(), { mesaj: 'Bir hata oluştu' }, durum);
  }
}
```

## Filter Bağlama Kapsamları

NestJS'te filter'ları üç farklı kapsamda bağlayabilirsin:

**Method kapsamı — yalnızca tek bir endpoint:**
```typescript
@Get(':id')
@UseFilters(HttpHataFiltresi)
async bul(@Param('id') id: string) { ... }
```

**Controller kapsamı — tüm controller endpoint'leri:**
```typescript
@Controller('kullanicilar')
@UseFilters(HttpHataFiltresi)
export class KullanicilarController { ... }
```

**Global kapsam — tüm uygulama:**
```typescript
// main.ts — global filter
app.useGlobalFilters(new HttpHataFiltresi());

// VEYA — DI desteği için APP_FILTER token kullan
// app.module.ts içinde:
import { APP_FILTER } from '@nestjs/core';
providers: [{ provide: APP_FILTER, useClass: HttpHataFiltresi }]
```

`app.useGlobalFilters()` ile `APP_FILTER` token arasındaki kritik fark: `useGlobalFilters()` ile kayıt edilen filter'lar NestJS'in DI container'ının dışında çalışır. Yani filter içinde başka bir servis inject edemezsin. Eğer filter'ın bir `LogService` veya başka bir dependency'e ihtiyacı varsa, `APP_FILTER` token yaklaşımını kullanman gerekir.

`@Catch()` decorator'ına hiçbir argüman vermezsen, filter her türlü exception'ı yakalar — hem `HttpException`'lar hem de beklenmedik JavaScript hataları:

```typescript
@Catch()  // Hiçbir şey yakalanmadan geçemez
export class TumHatalarFiltresi implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) { ... }
}
```

## Özel Error Response Formatı

Gerçek dünya projelerinde, frontend geliştiricileriyle ya da API consumer'larıyla anlaşılmış tutarlı bir hata formatı büyük kolaylık sağlar. Her endpoint farklı bir hata şeması dönerse, client tarafındaki hata yönetimi karmaşıklaşır.

Custom filter ile tüm API genelinde standart bir format uygulayabilirsin. Yaygın kullanılan bir örnek:

```typescript
{
  "basarili": false,
  "durum": 404,
  "mesaj": "Kullanıcı bulunamadı",
  "yol": "/api/kullanicilar/99",
  "zaman": "2025-01-15T10:30:00.000Z"
}
```

Bu formatı global filter üzerinden zorunlu hale getirdiğinde, tüm API tutarlı davranır. Validation hatalarını da buraya dahil edebilirsin — `BadRequestException`'ın `message` alanı genellikle bir dizi içerir (class-validator'dan gelen hata mesajları), bunu filter içinde düzgünce parse edip aynı formata sokabilirsin.

Sonuç olarak: basit uygulamalarda built-in exception sınıfları yeterlidir. Ama üretim düzeyinde bir API geliştiriyorsan, global bir custom filter yazarak hata yanıt formatını standartlaştırmak hem bakımı kolaylaştırır hem de frontend ile olan anlaşmazlıkları azaltır.
