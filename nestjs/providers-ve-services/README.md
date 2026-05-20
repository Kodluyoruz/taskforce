# Providers ve Services

NestJS mimarisinde controller'ların işi bellidir: isteği al, uygun yapıya ilet, cevabı döndür. Peki iş mantığı nerede yazılır? Veritabanı sorguları, hesaplamalar, dış API çağrıları nereye gider? İşte burası provider'ların devreye girdiği yerdir. Provider sistemi, NestJS'in dependency injection altyapısının temelini oluşturur ve kodunu test edilebilir, modüler ve yönetilebilir tutar.

## Provider Nedir?

Provider, NestJS'in dependency injection container'ı tarafından yönetilebilen herhangi bir sınıftır. Bir sınıfı provider yapan tek şey `@Injectable()` decorator'ıdır — bu decorator ile işaretlenmiş her sınıf DI sistemine kaydedilebilir ve başka sınıflara enjekte edilebilir.

Provider kavramı yalnızca service sınıflarıyla sınırlı değildir. NestJS ekosisteminde birçok farklı yapı provider olarak kullanılabilir:

- **Service** — İş mantığı barındıran sınıflar (en yaygın kullanım)
- **Repository** — Veritabanı erişimini soyutlayan sınıflar
- **Factory** — Başka nesneleri üretmekten sorumlu sınıflar
- **Helper / Utility** — Yardımcı fonksiyon grupları

Bu çeşitliliğin önemi şuradan gelir: DI container, bu sınıfların ne zaman ve nasıl oluşturulacağını senin yerine yönetir. Sen sadece "bu sınıfın şuna ihtiyacı var" diyorsun, geri kalanını framework hallediyor.

**Singleton davranışı:** Provider'lar varsayılan olarak singleton'dır. Bir module scope'u içinde her provider'dan yalnızca bir instance oluşturulur. Aynı service'i on farklı controller'a enjekte etsen bile, hepsi aynı instance'ı kullanır. Bu davranış bellek kullanımını optimize eder ve state yönetimini öngörülebilir kılar — tabii stateful bir service yazmadığın sürece.

## @Injectable() Dekoratörü

`@Injectable()` decorator'ı iki şey yapar. Birincisi, sınıfı NestJS DI container'ına "ben inject edilebilirim" diye işaretler. İkincisi, TypeScript metadata emission'ı tetikler — constructor parametrelerinin type bilgisi çalışma zamanında okunabilir hale gelir.

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class KedilerService {
  // ...
}
```

`@Injectable()` olmadan NestJS bu sınıfı DI sistemine kaydedemez. Module'ün `providers` dizisine ekledin, controller'ın constructor'ına yazdın — ama decorator yoksa runtime'da hata alırsın. Bu yüzden inject edilecek her sınıfın bu decorator'ı taşıması zorunludur.

Teknik detay: `tsconfig.json` dosyanda `emitDecoratorMetadata: true` ayarı aktif olmalıdır. `nest new` ile oluşturduğun projede bu zaten açık gelir. Bu ayar sayesinde TypeScript, her constructor parametresinin type'ını metadata olarak derlenmiş JavaScript koduna gömer ve NestJS bunu çalışma zamanında okuyarak ne inject edeceğini anlar.

## Service Sınıfı Oluşturma

Controller ve service arasındaki sorumluluk ayrımı NestJS'in temel tasarım ilkelerinden biridir. Controller HTTP katmanını yönetir: route tanımları, request parsing, response döndürme. Service ise iş mantığını barındırır: veri işleme, validasyon kuralları, dış servis çağrıları.

Bu ayrımı neden önemsemelisin? Test edilebilirlik. Bir controller'ı test etmek istediğinde service'i mock'layabilirsin — gerçek veritabanına, dış API'ye bağlanmadan controller'ın davranışını izole biçimde test edersin. Aynı şekilde service'i test ederken HTTP katmanıyla hiç ilgilenmezsin.

Kedi yönetimi örneği üzerinden gidelim:

```typescript
// kediler.service.ts
import { Injectable } from '@nestjs/common';

interface Kedi {
  id: number;
  ad: string;
  yas: number;
}

@Injectable()
export class KedilerService {
  private kediler: Kedi[] = [];
  private sayac = 0;

  tumunuGetir(): Kedi[] {
    return this.kediler;
  }

  biriniGetir(id: number): Kedi | undefined {
    return this.kediler.find((k) => k.id === id);
  }

  olustur(kedi: Omit<Kedi, 'id'>): Kedi {
    const yeni = { id: ++this.sayac, ...kedi };
    this.kediler.push(yeni);
    return yeni;
  }

  sil(id: number): boolean {
    const index = this.kediler.findIndex((k) => k.id === id);
    if (index === -1) return false;
    this.kediler.splice(index, 1);
    return true;
  }
}
```

Bu service'in HTTP'den haberi yok. `Request` nesnesi yok, `Response` nesnesi yok, status code bilgisi yok. Sadece veriyle çalışıyor. Bu izolasyon, service'i herhangi bir bağlamda (HTTP controller, WebSocket gateway, CLI command) yeniden kullanılabilir kılıyor.

## Constructor Injection

NestJS'te dependency injection'ın standart yöntemi constructor injection'dır. Bir sınıf başka bir provider'a ihtiyaç duyuyorsa, bunu constructor parametresi olarak bildirir.

```typescript
// kediler.controller.ts — service constructor injection
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { KedilerService } from './kediler.service';

@Controller('kediler')
export class KedilerController {
  // DI container KedilerService'i otomatik olarak oluşturur ve enjekte eder
  constructor(private readonly kedilerService: KedilerService) {}

  @Get()
  tumunuGetir() {
    return this.kedilerService.tumunuGetir();
  }

  @Post()
  olustur(@Body() kedi: { ad: string; yas: number }) {
    return this.kedilerService.olustur(kedi);
  }

  @Delete(':id')
  sil(@Param('id') id: string) {
    return this.kedilerService.sil(Number(id));
  }
}
```

`private readonly kedilerService: KedilerService` satırına dikkat et. Burada üç şey oluyor:

1. **`private`** — Bu dependency sadece bu sınıfın içinden erişilebilir, dışarıya sızamaz.
2. **`readonly`** — Constructor sonrasında bu referans değiştirilemez. Yanlışlıkla `this.kedilerService = başkaŞey` yazamazsın.
3. **TypeScript type annotation** — NestJS çalışma zamanında bu type bilgisini okur ve hangi provider'ı inject edeceğine karar verir.

DI container'ın çalışma akışı şöyledir: uygulama başladığında NestJS tüm module'leri derler, her provider'ın constructor'ını analiz eder, bağımlılık grafiğini çıkarır ve doğru sırayla instance'ları oluşturur. `KedilerController` oluşturulmadan önce `KedilerService` hazır olur ve constructor'a geçirilir. Sen hiçbir `new KedilerService()` yazmıyorsun — bu tamamen framework'ün işi.

## Özel Provider Türleri

Standart `@Injectable()` sınıflarının ötesinde, NestJS daha fazla kontrol gerektiren senaryolar için alternatif provider tanım biçimleri sunar. Bunlar `module.ts` dosyasının `providers` dizisinde nesne sözdizimi ile tanımlanır.

**`useValue`** — Sabit bir değeri veya hazır bir nesneyi provider olarak kaydetmek için kullanılır. Özellikle test ortamında gerçek service yerine mock nesne inject etmek istediğinde işe yarar: `{ provide: KedilerService, useValue: mockKedilerService }`.

**`useClass`** — Hangi sınıfın kullanılacağını çalışma zamanında belirlemeni sağlar. Örneğin development ortamında `DevLoggerService`, production'da `ProdLoggerService` kullanmak istiyorsan, bir environment değişkenine göre sınıf seçimi yapabilirsin.

**`useFactory`** — Asenkron işlemler gerektiren provider'lar için tercih edilir. Factory fonksiyonu, başka provider'lara bağımlı olabilir ve bir Promise döndürebilir. Veritabanı bağlantısı kurulması, dış servisten konfigürasyon çekilmesi gibi senaryolarda kullanılır.

Bu üç yöntem ileri seviye konulardır; şu aşamada varlığından haberdar olmak yeterli. Standart `@Injectable()` pattern'ı gerçek projelerin büyük çoğunluğunu karşılar.

## Provider Kapsamları

NestJS'te her provider'ın bir scope'u vardır ve bu scope, provider instance'larının ne zaman oluşturulup ne zaman yok edileceğini belirler.

**DEFAULT (Singleton)**

Hiçbir şey belirtmezsen provider singleton olur. Uygulama başladığında bir kez oluşturulur, uygulama kapanana kadar yaşar. Aynı instance, bu provider'ı kullanan tüm sınıflar arasında paylaşılır.

```typescript
@Injectable() // Varsayılan: singleton
export class KedilerService {}
```

Çoğu provider için bu idealdir. Stateless service'lerde — yani instance üzerinde kullanıcıya özgü state tutmayan yapılarda — singleton performans ve öngörülebilirlik açısından en iyi tercihtir.

**REQUEST**

Her gelen HTTP isteği için yeni bir instance oluşturulur, istek tamamlanınca yok edilir. Kullanıcı kimliğini, trace ID'yi veya isteğe özgü başka bir bilgiyi service boyunca taşımak istediğinde bu scope'a ihtiyaç duyarsın.

```typescript
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class IslemGecmisiService {}
```

Dikkat: REQUEST scope bir provider kullandığında, onu kullanan tüm üst yapılar da (controller dahil) otomatik olarak REQUEST scope'a çekilir. Bu performans maliyeti yaratabilir; gerçekten ihtiyaç olmadan kullanma.

**TRANSIENT**

Bu provider'ı inject eden her sınıf kendi özel instance'ını alır. Yani bir logger service'i TRANSIENT yaparsanız, onu kullanan her controller ve service ayrı bir instance'a sahip olur. Farklı sınıflarda birbirinden bağımsız state tutması gereken helper'lar için uygundur.

```typescript
@Injectable({ scope: Scope.TRANSIENT })
export class AyristanLoggerService {}
```

**Hangi scope'u seçmelisin?**

Çoğu durumda DEFAULT yeterlidir ve önerilir. REQUEST scope, gerçekten istek bazlı state ihtiyacı varsa tercih edilmeli — performans etkisini göz önünde bulundurarak. TRANSIENT ise nadir senaryolar içindir; her injection'da farklı state gereken durumlar. Kural olarak: varsayılandan farklı bir scope düşünüyorsan, önce bu ihtiyacı karşılamanın başka bir yolu var mı diye sorgula.

Provider ve service sistemi, NestJS'in bütün mimarisinin üstüne kurulduğu temeli oluşturur. Bu temeli iyi kavradıktan sonra module sistemi, dependency injection container'ının nasıl çalıştığı ve module'ler arası paylaşım konuları çok daha anlamlı hale gelecek.
