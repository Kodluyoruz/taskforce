# Controllers ve Routing

Bir HTTP isteği uygulamanına ulaştığında ilk karşılaştığı yapı controller'dır. NestJS mimarisinde controller'ın tek görevi bellidir: isteği al, gerekli servise ilet, gelen cevabı geri döndür. İş mantığı buraya yazılmaz — o servislerin sorumluluğundadır.

## Controller Nedir?

Controller, belirli bir URL grubuna gelen HTTP isteklerini karşılayan sınıftır. `@Controller()` decorator'ı bir sınıfı controller olarak işaretler ve parametre olarak verilen string bu controller'a ait tüm route'ların önüne eklenen prefix'i belirler.

```typescript
@Controller('kullanicilar')
export class KullanicilarController {
  // Bu controller altındaki tüm route'lar /kullanicilar ile başlar
}
```

`@Controller('kullanicilar')` yazarsan `GET /kullanicilar`, `POST /kullanicilar` gibi endpoint'ler bu sınıfa yönlendirilir. Prefix'i boş bırakırsan (`@Controller()`) root URL'den başlar.

Controller sınıfı, genellikle constructor injection yoluyla bir servis alır:

```typescript
@Controller('kullanicilar')
export class KullanicilarController {
  constructor(private readonly kullanicilarService: KullanicilarService) {}

  @Get()
  tumunuGetir() {
    return this.kullanicilarService.hepsiniGetir();
  }
}
```

Dikkat et: `tumunuGetir()` metodu hiçbir veritabanı sorgusu yazmıyor, hiçbir iş kuralı içermiyor. Sadece servise delege ediyor. Bu ayrımı korumak, uygulamanın test edilebilirliğini ve sürdürülebilirliğini doğrudan etkiler.

## HTTP Metodları

NestJS, standart HTTP metodlarının her biri için decorator sağlar: `@Get()`, `@Post()`, `@Put()`, `@Patch()`, `@Delete()`, `@Options()`, `@Head()`. Ayrıca tüm metodları tek seferde yakalamak için `@All()` decorator'ı da vardır. Bu decorator'ları metot tanımlarının üstüne yazarsın.

```typescript
@Get()        // GET isteği
@Post()       // POST isteği
@Put()        // PUT isteği
@Patch()      // PATCH isteği
@Delete()     // DELETE isteği
@Options()    // OPTIONS isteği
@Head()       // HEAD isteği
@All()        // Tüm HTTP metodları
```

Her decorator'a bir path string'i geçebilirsin: `@Get('aktif')` → `GET /kullanicilar/aktif`.

**Varsayılan status code'lar:** GET, PUT, PATCH ve DELETE metodları `200 OK` döner. POST ise `201 Created` döner — bu NestJS'in yerleşik davranışıdır, ayrıca bir şey yapman gerekmez.

Varsayılanı değiştirmek istersen `@HttpCode()` decorator'ını kullanırsın:

```typescript
@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT) // 204
sil(@Param('id') id: string) {
  // 204 döner, response body beklenmez
}
```

`HttpStatus` enum'u tüm HTTP status code'larını anlamlı isimlerle sunar: `HttpStatus.OK` (200), `HttpStatus.CREATED` (201), `HttpStatus.NO_CONTENT` (204), `HttpStatus.NOT_FOUND` (404) gibi.

## Route Parametreleri

URL'nin parçası olan dinamik değerleri yakalamak için `@Param()` decorator'ını kullanırsın. Route path'inde `:paramIsmi` sözdizimi ile belirttiğin segment, controller metodunda `@Param('paramIsmi')` ile erişilebilir hale gelir.

```typescript
// GET /kullanicilar/42
@Get(':id')
biriniGetir(@Param('id') id: string) {
  return `Kullanıcı #${id}`;
}
```

Birden fazla parametre gerektiğinde her birini ayrı ayrı tanımlarsın:

```typescript
// GET /kullanicilar/5/siparisler/3
@Get(':kullaniciId/siparisler/:sipariId')
siparisGetir(
  @Param('kullaniciId') kullaniciId: string,
  @Param('sipariId') sipariId: string,
) {
  return { kullaniciId, sipariId };
}
```

`@Param()` decorator'ına argüman vermeden kullanırsan tüm parametreler bir nesne olarak gelir:

```typescript
@Get(':kullaniciId/siparisler/:sipariId')
siparisGetir(@Param() params: { kullaniciId: string; sipariId: string }) {
  return params;
}
```

## Query String

URL'nin `?` işaretinden sonra gelen anahtar-değer çiftlerini okumak için `@Query()` decorator'ını kullanırsın.

Tek bir query parametresi almak için:

```typescript
// GET /kullanicilar?sayfa=2&limit=10
@Get()
listele(@Query('sayfa') sayfa: string, @Query('limit') limit: string) {
  return { sayfa, limit };
}
```

Tüm query parametrelerini bir nesne olarak almak istersen argümansız bırakırsın:

```typescript
@Get()
listele(@Query() queryParams: Record<string, string>) {
  return queryParams;
}
```

Query parametreleri doğası gereği opsiyoneldir — URL'de bulunmayabilirler. TypeScript tarafında bunu `string | undefined` ile ya da `?` operatörüyle ifade etmelisin:

```typescript
@Get('ara')
ara(
  @Query('kelime') kelime?: string,
  @Query('sayfa') sayfa = '1',
) {
  return { kelime, sayfa };
}
```

`sayfa = '1'` yazmak, parametre gelmediğinde varsayılan değer atar.

## Request Body

POST, PUT, PATCH gibi metodlarda gönderilen payload'ı okumak için `@Body()` decorator'ını kullanırsın.

```typescript
@Post()
olustur(@Body() body: any) {
  return body;
}
```

Pratikte `any` kullanmak yerine bir DTO (Data Transfer Object) sınıfı tanımlarsın. DTO'lar gelen verinin şeklini TypeScript düzeyinde açıklar ve ValidationPipe ile birlikte otomatik doğrulama yapmanı sağlar. DTO'lar bir sonraki konuda detaylı ele alınacak — şimdilik tip güvenliği sağlamanın bu yolla geldiğini bilmen yeterli.

Yalnızca body'nin belirli bir alanına ihtiyaç duyuyorsan doğrudan o alanı çekebilirsin:

```typescript
@Post()
olustur(@Body('ad') ad: string) {
  return `Yeni kullanıcı: ${ad}`;
}
```

## Response Şekillendirme

NestJS'te bir controller metodu bir değer döndürdüğünde framework bu değeri otomatik olarak JSON'a serileştirir ve response olarak gönderir. Primitive bir değer (string, number) döndürürsen direkt gönderilir, nesne veya dizi döndürürsen `JSON.stringify` uygulanır. Sen sadece return et, gerisini NestJS halleder.

**Custom header eklemek** için `@Header()` decorator'ını kullanırsın:

```typescript
@Get(':id')
@Header('Cache-Control', 'no-store')
biriniGetir(@Param('id') id: string) {
  return { id };
}
```

**Yönlendirme** için `@Redirect()` decorator'ı vardır:

```typescript
@Get('eski-yol')
@Redirect('/kullanicilar', HttpStatus.MOVED_PERMANENTLY)
eskiYol() {}
```

**Önemli bir tuzak: `@Res()` injection.**

NestJS sana altta yatan Express/Fastify response nesnesine doğrudan erişim imkanı verir:

```typescript
// BU YAKLAŞIMDAN KAÇIN
@Get()
getir(@Res() res: Response) {
  res.status(200).json({ data: 'bir şey' });
}
```

Bu pattern'i kullandığında NestJS'in interceptor'ları, exception filter'ları ve response serialization'ı devre dışı kalır. Güçlü özelliklerin büyük çoğunluğunu kaybedersin. Gerçekten ham response nesnesine ihtiyaç duyuyorsan `passthrough: true` seçeneğiyle hem native nesneye eriş hem de NestJS mekanizmalarını koruyabilirsin:

```typescript
@Get()
getir(@Res({ passthrough: true }) res: Response) {
  res.setHeader('X-Custom', 'deger');
  return { data: 'bir şey' }; // NestJS serializasyonu çalışır
}
```

## Route Önceliği

NestJS, route'ları kayıt sırasına göre değerlendirir. Bu yüzden statik route'ları her zaman parametreli route'lardan önce tanımlamalısın.

```typescript
// YANLIŞ SIRALAMA
@Get(':id')        // Bu her şeyi yakalar — 'aktif' dahil
biriniGetir(@Param('id') id: string) { ... }

@Get('aktif')      // Buraya hiç ulaşılmaz!
aktifler() { ... }
```

```typescript
// DOĞRU SIRALAMA
@Get('aktif')      // Önce statik route
aktifler() { ... }

@Get(':id')        // Sonra parametreli route
biriniGetir(@Param('id') id: string) { ... }
```

`GET /kullanicilar/aktif` isteği geldiğinde NestJS yukarıdan aşağı tarar. Eğer `:id` route'u önce tanımlıysa, `aktif` stringi parametre olarak yakalanır ve asıl metoda hiç ulaşılmaz.

**NestJS v11 notu:** Express v5 ile gelen v11'de wildcard route'lar için sözdizimi değişti. Express v5 `'eski/*splat'` gibi isimlendirilmiş wildcard formunu gerektirir — burada `splat` isim olarak istediğin şeyi seçebilirsin. NestJS geriye dönük uyumluluk için `*`'ı da desteklemeye devam eder; ancak yeni kod yazarken isimlendirilmiş formu tercih etmek önerilir.

---

## Tam Controller Örneği

Yukarıda ele alınan tüm kavramları bir arada gösteren tam bir controller:

```typescript
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  Header,
  Redirect,
} from '@nestjs/common';

@Controller('kullanicilar')
export class KullanicilarController {
  // GET /kullanicilar
  @Get()
  tumunuGetir(): string {
    return 'Tüm kullanıcılar';
  }

  // GET /kullanicilar/aktif  ← statik route, :id'den ÖNCE gelmeli
  @Get('aktif')
  aktifKullanicilar() {
    return 'Aktif kullanıcılar';
  }

  // GET /kullanicilar/ara?kelime=ali&sayfa=2  ← statik route, :id'den ÖNCE gelmeli
  @Get('ara')
  ara(
    @Query('kelime') kelime: string,
    @Query('sayfa') sayfa: string,
  ) {
    return { kelime, sayfa };
  }

  // GET /kullanicilar/5
  @Get(':id')
  biriniGetir(@Param('id') id: string) {
    return `Kullanıcı #${id}`;
  }

  // GET /kullanicilar/5/siparisler/3
  @Get(':kullaniciId/siparisler/:sipariId')
  siparisGetir(
    @Param('kullaniciId') kullaniciId: string,
    @Param('sipariId') sipariId: string,
  ) {
    return { kullaniciId, sipariId };
  }

  // POST /kullanicilar
  @Post()
  @HttpCode(HttpStatus.CREATED)
  olustur(@Body() body: any) {
    return body;
  }

  // PUT /kullanicilar/5
  @Put(':id')
  guncelle(@Param('id') id: string, @Body() body: any) {
    return { id, ...body };
  }

  // DELETE /kullanicilar/5
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  sil(@Param('id') id: string) {
    // 204 döner, body yok
  }

  // Yönlendirme örneği
  @Get('eski-yol')
  @Redirect('/kullanicilar', HttpStatus.MOVED_PERMANENTLY)
  eskiYol() {}
}
```

Bu controller'da dikkat etmen gereken noktalar:

- `aktif` ve `ara` route'ları `:id`'den önce tanımlanmış — sıra önemli.
- `sil()` metodu `@HttpCode(HttpStatus.NO_CONTENT)` ile 204 dönüyor ve body içermiyor.
- `olustur()` üzerindeki `@HttpCode(HttpStatus.CREATED)` aslında gereksiz — POST zaten 201 döner. Ama niyeti açıkça belirtmek için eklenmiş olabilir.

Controller'ı modüle kaydetmeyi unutma. `KullanicilarModule` içinde `controllers` dizisine eklenmesi gerekiyor; aksi halde NestJS bu controller'ı tanımaz:

```typescript
@Module({
  controllers: [KullanicilarController],
  providers: [KullanicilarService],
})
export class KullanicilarModule {}
```

Routing ve controller mekanizmasını kavradıktan sonra sıradaki adım gelen veriyi doğru şekilde modellemektir. Bir sonraki konuda DTO'ları ve ValidationPipe kullanımını ele alacağız.
