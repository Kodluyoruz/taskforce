# Interceptors ve Middleware

NestJS pipeline'ında bir isteğin handler'a ulaşmadan önce ve handler yanıt verdikten sonra çeşitli işlemler yapman gerekebilir: isteğin kaç milisaniye sürdüğünü loglamak, tüm yanıtları standart bir formata sarmak, token'ı yenilemek ya da belirli route'lara erişimi loglamak gibi. Bu ihtiyaçları karşılayan iki farklı yapı vardır: interceptor ve middleware. İkisi de benzer görünse de çalıştıkları yer ve neye erişebildikleri açısından önemli farklar taşır.

---

## Interceptor Nedir?

Interceptor, `NestInterceptor` interface'ini implement eden bir sınıftır. `intercept` metodunu implement etmen gerekir:

```typescript
export interface NestInterceptor<T = any, R = any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<R> | Promise<Observable<R>>;
}
```

`next.handle()` çağrısı, route handler'ı tetikler ve handler'ın döndürdüğü değeri bir `Observable` olarak sarmalar. Bu noktadan itibaren RxJS operatörlerini kullanarak hem handler çalışmadan önce hem de sonra işlem yapabilirsin.

```
İstek → Middleware → Guard → Interceptor (öncesi) → Pipe → Handler → Interceptor (sonrası) → Yanıt
```

Bu ikili çalışma özelliği interceptor'ları güçlü kılar. Exception filter'lar yalnızca hata durumlarında çalışırken, interceptor'lar her iki senaryoda da çalışır: başarılı yanıtlarda ve exception'larda. `catchError` operatörü ile exception'ları da yakalayabilirsin.

Interceptor'lar `@Injectable()` ile işaretlenir ve NestJS'in DI sistemine tam entegre çalışır. Servisler, logger'lar ve diğer provider'lar constructor injection ile kullanılabilir.

---

## Logging Interceptor

En yaygın interceptor kullanım senaryolarından biri, her isteğin ne kadar sürdüğünü loglamaktır:

```typescript
// logging.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    const baslangic = Date.now();

    return next.handle().pipe(
      tap(() => {
        const sure = Date.now() - baslangic;
        this.logger.log(`${method} ${url} — ${sure}ms`);
      }),
    );
  }
}
```

`tap` operatörü, Observable'ın değerini değiştirmeden yan etki gerçekleştirmek için kullanılır. Burada handler yanıt verdikten sonra geçen süreyi hesaplar ve loglar. `NestJS Logger` sınıfı, log mesajlarına otomatik olarak sınıf adını prefix olarak ekler; bu da logları takip etmeyi kolaylaştırır.

`next.handle()` çağrısından önceki kod, handler çalışmadan önce çalışır. Sonrasına eklenen `.pipe()` ise handler tamamlandıktan sonraki işlemleri tanımlar. Bu simetrik yapı güçlü ve okunabilir bir akış sağlar.

---

## Response Dönüşüm Interceptor'ı

Bir API'de tüm başarılı yanıtların tutarlı bir formata sahip olması istemci tarafında işleri kolaylaştırır. `map` operatörü ile her yanıtı standart bir zarfa sarabilirsin:

```typescript
// transform.interceptor.ts — tüm başarılı yanıtları standart formata sarar
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiYanit<T> {
  basarili: boolean;
  veri: T;
  zaman: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiYanit<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiYanit<T>> {
    return next.handle().pipe(
      map((veri) => ({
        basarili: true,
        veri,
        zaman: new Date().toISOString(),
      })),
    );
  }
}
```

Bu interceptor, handler'ın döndürdüğü her değeri `{ basarili: true, veri: ..., zaman: ... }` formatına dönüştürür. İstemci her zaman bu yapıyla karşılaşır ve `veri` alanına güvenerek işlem yapabilir.

**Önemli bir uyarı:** Bu yaklaşım yalnızca standart NestJS response stratejisiyle çalışır. Eğer controller metodunda `@Res()` decorator'ını kullanarak Express response nesnesine doğrudan erişiyorsan, `res.json()` ile döndürdüğün değer interceptor'dan geçmez. Doğrudan Express response kullanımından kaçınmak bu nedenle önerilir; response dönüşümünü NestJS'in pipeline'ına bırakmak daha temiz bir yaklaşımdır.

Dönüştürülmüş yanıt örneği:

```json
{
  "basarili": true,
  "veri": {
    "id": 1,
    "email": "kullanici@ornek.com"
  },
  "zaman": "2024-01-15T10:30:00.000Z"
}
```

---

## Interceptor Bağlama Kapsamları

Interceptor'ları üç farklı kapsamda bağlayabilirsin:

**Metod seviyesi:** Yalnızca o endpoint için geçerlidir.

```typescript
@UseInterceptors(LoggingInterceptor)
@Get('profil')
profil() { ... }
```

**Controller seviyesi:** Controller'daki tüm endpoint'ler için geçerlidir.

```typescript
@UseInterceptors(LoggingInterceptor)
@Controller('kullanicilar')
export class UsersController { ... }
```

**Global seviye:** Uygulamadaki tüm handler'lar için geçerlidir. İki yöntem vardır:

```typescript
// main.ts — DI desteği YOK
const app = await NestFactory.create(AppModule);
app.useGlobalInterceptors(new LoggingInterceptor());
```

```typescript
// app.module.ts — DI destekli (tercih edilen yol)
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
```

Guard'larda olduğu gibi, global kayıt için `APP_INTERCEPTOR` token'ını kullanmak DI desteği açısından tercih edilir. `useGlobalInterceptors()` ise module context dışında kayıt yaptırdığı için constructor injection çalışmaz.

Hem loglama hem dönüşüm interceptor'larını birlikte kullanmak istersen:

```typescript
@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}
```

---

## Middleware Nedir?

Middleware, `NestMiddleware` interface'ini implement eden ya da Express/Fastify uyumlu bir fonksiyon olan yapıdır. Guard ve interceptor'lardan önce çalışır; request/response döngüsünün en erken noktasında devreye girer.

```typescript
// istek-log.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IstekLogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Middleware] ${req.method} ${req.url}`);
    next(); // bir sonraki middleware'e veya route handler'a geç
  }
}
```

`next()` çağrısı zorunludur. Eğer `next()` çağrılmazsa istek askıda kalır ve yanıt hiçbir zaman döndürülmez. Middlewarë'in kendisi bir yanıt göndermiyorsa mutlaka `next()` çağırmalısın.

Middleware'i module'e bağlamak için `NestModule` interface'ini implement eder ve `configure` metodunu kullanırsın:

```typescript
// app.module.ts — middleware bağlama
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { IstekLogMiddleware } from './istek-log.middleware';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IstekLogMiddleware)
      .forRoutes('*'); // tüm route'lara uygula
      // veya belirli route: .forRoutes({ path: 'kullanicilar', method: RequestMethod.GET })
  }
}
```

`MiddlewareConsumer`, hangi middleware'in hangi route'lara uygulanacağını belirler. `.forRoutes('*')` tümüne uygular; `.forRoutes('kullanicilar')` yalnızca `/kullanicilar` path'ine. Belirli HTTP metodlarını hedeflemek için `{ path: '...', method: RequestMethod.GET }` formatını kullanırsın.

Birden fazla middleware'i sırayla uygulamak için `.apply()` içine virgülle ekleyebilirsin:

```typescript
consumer
  .apply(KorsMiddleware, IstekLogMiddleware)
  .forRoutes('*');
```

Sıra önemlidir; soldaki middleware önce çalışır.

---

## Middleware vs Interceptor — Ne Zaman Hangisi?

| Özellik | Middleware | Interceptor |
|---|---|---|
| Çalıştığı yer | Guard'dan önce | Guard'dan sonra, handler etrafında |
| Route metadata erişimi | Yok | Var (`Reflector` ile) |
| Handler'a erişim | Yok | Var (`next.handle()`) |
| Yanıt gövdesine erişim | Hayır | Evet (`map` ile) |
| Exception yakalama | Hayır | Evet (`catchError` ile) |
| DI desteği | Evet (class-based) | Evet |
| Tipik kullanım | CORS, body parsing, rate limiting, istek loglama | Yanıt dönüşümü, timing, caching, token yenileme |

**Middleware kullan:** İstek uygulamamıza girmeden önce yapılması gereken işlemler için. CORS başlıklarını eklemek, rate limiting uygulamak, body'yi parse etmek, ham istek loglaması yapmak. Bu işlemler handler'ın ne döndüreceğiyle ilgili değildir; isteğin kendisiyle ilgilidir.

**Interceptor kullan:** Handler'ın yanıtını işlemek veya dönüştürmek istediğinde. Tüm yanıtları standart bir formata sarmak, her endpoint'in kaç milisaniye sürdüğünü ölçmek, belirli yanıtları cache'lemek, response header'larını manipüle etmek. Bu işlemler handler'ın çıktısına bağımlıdır.

Pratikte ikisi birlikte kullanılır. Örneğin ham istek loglaması için middleware, response dönüşümü için interceptor tercih edilir. CORS middleware olarak yapılandırılır çünkü handler mantığından bağımsızdır ve her istekte aynı şekilde çalışması gerekir. Öte yandan bir caching interceptor, handler'ın döndürdüğü değeri okuyup saklayabilir ya da cache hit durumunda handler'ı hiç çalıştırmayabilir.

Bir başka kritik fark: interceptor'lar `ExecutionContext` üzerinden route metadata'sına erişebilir. Bu sayede `@CacheControl(300)` gibi custom decorator'larla belirli endpoint'lere davranış tanımlayabilirsin. Middleware'ın böyle bir mekanizması yoktur; tüm route'lara kör biçimde uygulanır.

Uygulamanda her iki yapıyı da doğru yerde kullandığında pipeline okunabilir ve ayrı endişelere bölünmüş olur. Middleware katmanı ağ düzeyindeki işleri halleder; interceptor katmanı ise uygulama mantığıyla ilgili dönüşümleri ve loglama gibi cross-cutting concern'leri yönetir.
