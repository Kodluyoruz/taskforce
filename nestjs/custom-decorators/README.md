# Custom Decorators

NestJS'in built-in decorator'ları çoğu durumda yeterlidir. Ama gerçek dünya uygulamalarında zamanla fark edersin ki aynı işlemi tekrar tekrar yapıyorsun: `@Request()` alıp `req.user`'ı çekiyorsun, ya da birden fazla decorator'ı her controller metoduna tek tek ekliyorsun. Custom decorator'lar tam bu noktada devreye girer ve tekrarlayan kodu anlamlı, domain'e özgü bir abstraction haline getirir.

Bu yazıda NestJS'te custom decorator yazmanın iki yolunu — `createParamDecorator` ve `SetMetadata` — derinlemesine inceleyeceğiz. Ardından `Reflector` ile metadata'yı guard içinde nasıl okuyacağını ve `applyDecorators` ile birden fazla decorator'ı tek bir bileşik decorator altında nasıl birleştireceğini göreceğiz.

---

## Dekoratörler NestJS'te Nasıl Çalışır?

TypeScript decorator'ları, bir sınıfa, metoda, parametreye veya property'ye eklenebilen ve çalışma zamanında o öğeye dair bilgilere erişim sağlayan fonksiyonlardır. NestJS bu mekanizmayı, route tanımlarından dependency injection'a kadar hemen her şeyi organize etmek için kullanır.

Alt katmanda yatan şey JavaScript'in **Reflect Metadata API**'sidir. `Reflect.defineMetadata(key, value, target)` ile bir öğeye metadata ekler, `Reflect.getMetadata(key, target)` ile okursun. NestJS kendi framework metadata'sını bu API üzerine inşa etmiştir; `tsconfig.json` içindeki `emitDecoratorMetadata: true` ayarı bunu mümkün kılar.

```typescript
// Reflect Metadata API — temel mantık
Reflect.defineMetadata('roller', ['admin', 'moderator'], MyController.prototype, 'kullanicilariGetir');

const roller = Reflect.getMetadata('roller', MyController.prototype, 'kullanicilariGetir');
// → ['admin', 'moderator']
```

NestJS'te custom decorator yazarken iki farklı senaryoyla karşılaşırsın:

**Parametre decorator'ları (`createParamDecorator`):** Controller metodlarının parametre listesinde kullanılır. Amaç, request nesnesinden belirli bir değeri çıkarıp doğrudan parametre olarak teslim etmektir. `@Body()`, `@Param()`, `@Query()` bunların built-in örnekleridir.

**Metadata decorator'ları (`SetMetadata`):** Bir metoda ya da controller'a bilgi etiketi yapıştırır. Bu etiket daha sonra guard veya interceptor içinde `Reflector` aracılığıyla okunur. `@Public()` decorator'ı bunun en bilinen örneğidir.

Kendi decorator'ını ne zaman yazmalısın? Eğer aynı `@Request()` + `req.user` kombinasyonunu birden fazla yerde kullanıyorsan, eğer `@UseGuards() + @SetMetadata()` ikilisini sürekli bir arada yazıyorsan ya da request'ten çıkardığın bir değere semantik bir isim vermek istiyorsan — custom decorator yazan biri artık sen olmalısın.

---

## Parametre Dekoratörü — createParamDecorator

`createParamDecorator`, NestJS'in sana verdiği en güçlü araçlardan biridir. İmzası şöyle:

```typescript
createParamDecorator((data: unknown, ctx: ExecutionContext) => any)
```

Burada iki kritik parametre var:

- **`data`:** Decorator çağrılırken parantez içinde geçilen argümandır. `@CurrentUser('email')` yazıldığında `data` değeri `'email'` olur. `@CurrentUser()` yazıldığında ise `undefined`'dır.
- **`ctx` (ExecutionContext):** O anki isteğin context'idir. HTTP, WebSocket, gRPC gibi farklı transport layer'lara göre farklı yöntemler sunar. HTTP için `ctx.switchToHttp().getRequest()` ile Express request nesnesine ulaşırsın.

Decorator'ın dönüş değeri, controller metodunun o parametresine atanan değer olur. Yani ne döndürürsen, parametre o değeri alır.

Basit bir örnek:

```typescript
// İsteğin yapıldığı IP adresini döndüren decorator
export const ClientIp = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.ip;
  },
);
```

Bu kadar. Artık herhangi bir controller metodunda `@ClientIp() ip: string` yazarak doğrudan IP adresine erişebilirsin.

---

## @CurrentUser() Dekoratörü

Guard'lar bölümünde `AuthGuard`'ın `request['user']` alanını JWT payload'u ile doldurduğunu gördük. Controller'da bu değere ulaşmak için `@Request() req` alıp `req.user` yazmak hem verbose hem de tip güvenliği açısından sorunludur. `@CurrentUser()` decorator'ı bunu çözer.

```typescript
// decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface AktifKullanici {
  sub: number;
  email: string;
}

export const CurrentUser = createParamDecorator(
  (data: keyof AktifKullanici | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const kullanici = request.user as AktifKullanici;

    // createParamDecorator'a argüman geçilmişse sadece o alanı döndür
    return data ? kullanici?.[data] : kullanici;
  },
);
```

`AktifKullanici` interface'i JWT payload'unun şeklini tanımlar. `data` parametresinin tipi `keyof AktifKullanici | undefined` olarak verilmiştir; bu sayede `@CurrentUser('gecersizAlan')` yazmak TypeScript derleme hatasına yol açar — runtime'a kadar beklemenize gerek yok.

`kullanici?.[data]` ifadesindeki `?.` opsiyonel chaining, `request.user` henüz set edilmemişse (guard çalışmadıysa) `undefined` döndürür ve null reference hatası almassın.

Decorator'ın iki farklı kullanım biçimi:

```typescript
// Kullanım — tam obje veya tek alan
@Get('profil')
profil(@CurrentUser() kullanici: AktifKullanici) {
  return kullanici; // { sub: 1, email: 'ali@ornek.com' }
}

@Get('email')
emailGetir(@CurrentUser('email') email: string) {
  return email; // 'ali@ornek.com'
}
```

`@CurrentUser()` ile tüm kullanıcı objesini alırsın; `@CurrentUser('email')` ile yalnızca email alanını. İkinci form özellikle yalnızca tek bir alanla çalışan metodlarda kodu çok daha okunabilir kılar.

Bu decorator'ı kullanmak için `AuthGuard`'ın çalışmış ve `request.user`'ı doldurmuş olması gerekir. Yani `@CurrentUser()` yazan bir endpoint'i mutlaka bir auth guard ile korumalısın — aksi halde `kullanici` `undefined` olur.

---

## Metadata Dekoratörü — SetMetadata

`SetMetadata`, bir route veya controller'a anahtar-değer çifti olarak metadata yapıştırmanın en temiz yoludur. Bu metadata herhangi bir business logic içermez; yalnızca "bu endpoint hakkında şunu bil" der. Onu okuyan yapılar (genellikle guard'lar veya interceptor'lar) bu bilgiye göre karar verir.

Rol tabanlı erişim kontrolü bunun en yaygın kullanım alanıdır:

```typescript
// decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

export enum Rol {
  Admin = 'admin',
  Kullanici = 'kullanici',
  Moderator = 'moderator',
}

export const ROLLER_KEY = 'roller';
export const Roller = (...roller: Rol[]) => SetMetadata(ROLLER_KEY, roller);
```

`ROLLER_KEY` sabitini dışa aktarmak önemlidir — hem decorator hem de onu okuyan guard aynı string anahtarını kullanmalıdır. Bunu sabit olarak tanımlamak typo'dan kaynaklanan hataları önler.

`Roller` factory fonksiyonu rest parameter alır, bu sayede birden fazla rol desteklenir:

```typescript
@Roller(Rol.Admin, Rol.Moderator)
@Get('raporlar')
raporlariGetir() { ... }
```

Guards bölümünde gördüğün `@Public()` decorator'ı da aynı `SetMetadata` mekanizmasını kullanır. Tek fark, değerin boolean olmasıdır: `SetMetadata('isPublic', true)`.

---

## Reflector ile Metadata Okuma

`SetMetadata` ile eklenen metadata'yı guard veya interceptor içinde okumak için NestJS'in `Reflector` servisini kullanırsın.

```typescript
// guards/roller.guard.ts — Reflector ile metadata okuma
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Rol, ROLLER_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RollerGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const gerekliRoller = this.reflector.getAllAndOverride<Rol[]>(ROLLER_KEY, [
      context.getHandler(),  // metot seviyesi önce kontrol edilir
      context.getClass(),    // controller seviyesi sonra
    ]);

    if (!gerekliRoller || gerekliRoller.length === 0) return true;

    const { user } = context.switchToHttp().getRequest();
    if (!gerekliRoller.includes(user.rol)) {
      throw new ForbiddenException('Bu işlem için yetkiniz yok');
    }
    return true;
  }
}
```

`Reflector`'ın iki farklı metodu var; hangisini kullanacağın senaryona göre değişir:

**`getAllAndOverride(key, [handler, class])`:** Önce metot seviyesindeki metadata'ya bakar. Bulursa biter, class seviyesine bakılmaz. Bulamazsa class seviyesine geçer. Yani daha spesifik olan (metot) daha genel olanı (controller) override eder. Roller ve `@Public()` gibi "en yakın tanım geçerlidir" semantiği istediğinde bunu kullan.

**`getAllAndMerge(key, [handler, class])`:** Her iki seviyedeki değerleri birleştirir. Eğer controller `[Rol.Kullanici]` ve metot `[Rol.Admin]` diyorsa, guard her ikisini de alır: `[Rol.Kullanici, Rol.Admin]`. İzin listesini genişletmek istediğinde — "controller genelinde şu roller erişebilir, ama bu metod için şunu da ekle" — `getAllAndMerge` daha uygun olur.

Pratikte `getAllAndOverride` çok daha sık kullanılır. Roller genellikle "metot ne diyorsa o geçer" semantiğiyle çalışır; controller seviyesindeki rol tanımı bir metotta ezilebilmelidir.

`RollerGuard` içinde metot başında `gerekliRoller` yoksa `true` döndürmek önemlidir: rol metadata'sı olmayan endpoint'ler rol korumasından muaf tutulur. Kimlik doğrulaması (JWT kontrolü) `AuthGuard`'ın işidir; `RollerGuard` yalnızca yetkilendirme (rol) katmanından sorumludur.

---

## applyDecorators ile Composing

Şimdiye kadar gördüğün decorator'ları birlikte düşün: bir admin endpoint'i için `@UseGuards(AuthGuard, RollerGuard)` ve `@Roller(Rol.Admin)` eklemen gerekiyor. Bu ikilik her seferinde yazılmak zorunda; biri unutulduğunda guard çalışmaz ya da metadata okunmaz.

`applyDecorators`, birden fazla decorator'ı tek bir fonksiyon altında birleştirmeni sağlar:

```typescript
// decorators/auth.decorator.ts — applyDecorators ile compose
import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RollerGuard } from '../auth/guards/roller.guard';
import { Roller, Rol } from './roles.decorator';

// Tek dekoratörle hem JWT auth hem rol kontrolü
export function Auth(...roller: Rol[]) {
  return applyDecorators(
    Roller(...roller),
    UseGuards(AuthGuard, RollerGuard),
  );
}
```

`Auth` fonksiyonu, içindeki tüm decorator'ları sırayla hedef öğeye uygular. Sıra önemlidir: `Roller` önce çalışır ve metadata'yı yazar; `UseGuards` guard'ları bağlar. Guard'lar çalışırken metadata zaten hazırdır.

Roller geçilmezse `Roller()` boş array ile çalışır; `RollerGuard` içinde boş array kontrolü yapıldığı için bu durum otomatik olarak handle edilir — yani `@Auth()` yazmak "kimlik doğrulaması gerekli ama herhangi bir rol yeterli" anlamına gelir.

Sonuç olarak controller'ların ne kadar temizleştiğine bak:

```typescript
// Temiz controller — applyDecorators sayesinde
@Controller('yonetim')
export class YonetimController {
  @Auth(Rol.Admin)
  @Delete('kullanicilar/:id')
  kullaniciyiSil(@Param('id', ParseIntPipe) id: number) {
    return this.kullanicilarService.sil(id);
  }

  @Auth(Rol.Admin, Rol.Moderator)
  @Get('kullanicilar')
  tumKullanicilar() {
    return this.kullanicilarService.tumunuGetir();
  }
}
```

`@Auth(Rol.Admin)` tek satırla hem JWT doğrulamasını hem de admin rol kontrolünü devreye sokar. Decorator çoğalması yok, tekrar yok, unutulan guard yok. Yeni bir geliştirici bu controller'ı okuduğunda ne yapıldığını hemen anlar.

`applyDecorators` sınıf decorator'larını da destekler; sadece metot değil, controller seviyesinde de kullanabilirsin. Ayrıca `@ApiTags()`, `@ApiBearerAuth()` gibi Swagger decorator'larını da `applyDecorators` içine alarak tek bir `@Auth()` ile hem güvenlik hem dokümantasyon ekleyebilirsin.

---

## Pipes ile Birlikte Kullanım

Custom param decorator'ların gözden kaçan bir özelliği: pipe alabilirler. `@Body(ValidationPipe)` nasıl çalışıyorsa, kendi decorator'ın da aynı şekilde pipe alabilir.

```typescript
// Custom decorator + pipe kombinasyonu
// Pipe'lar data argümanından sonra geçirilir
@Get('kullanici')
kullaniciyiGetir(@CurrentUser('sub', ParseIntPipe) id: number) {
  // request.user.sub string olsa bile ParseIntPipe onu number'a dönüştürür
}
```

Daha pratik bir örnek: JWT payload'unda `sub` alanı string olarak saklanıyorsa ama `number` bekliyorsan, `@CurrentUser('sub', ParseIntPipe)` yazarak dönüşümü otomatik yapabilirsin.

Ancak burada önemli bir detay var: global `ValidationPipe` varsayılan olarak custom decorator parametrelerini doğrulamaz. Bunu açmak için `validateCustomDecorators: true` seçeneğini eklemelisin:

```typescript
// main.ts — custom decorator'larda validation'ı aktif et
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    validateCustomDecorators: true, // Bu olmadan custom decorator'larda class-validator çalışmaz
  }),
);
```

`validateCustomDecorators: true` olmadan `@CurrentUser()` ile aldığın objeye `class-validator` dekoratörleri uygulanmaz; yani DTO sınıfını dekoratörle işaretlesen bile validation skip edilir. Bu davranış çoğunlukla beklenmedik hataya yol açar.

Pipe'lar, custom param decorator'lara `data` argümanından sonra geçirilir. `createParamDecorator` API'si bu ek argümanları pipe olarak tanır ve sırayla uygular.

---

Custom decorator'lar, NestJS'teki en büyük kod kalitesi fırsatlarından biridir. Tek başlarına küçük görünseler de sistematik olarak uygulandıklarında controller'larını dramatik biçimde temizler, tekrarlayan kodu ortadan kaldırır ve domain diline daha yakın bir API yüzeyi oluşturur. `@CurrentUser()`, `@Auth()`, `@Roller()` üçlüsünü bir kez yazıp tüm projende kullandığında, bu yazıya harcadığın zamanın karşılığını fazlasıyla almış olursun.
