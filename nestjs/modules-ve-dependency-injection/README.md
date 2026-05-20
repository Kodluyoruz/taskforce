# Modules ve Dependency Injection

NestJS uygulamaları büyüdükçe her şeyi tek bir yerde tutmak hızla sürdürülemez hale gelir. Module sistemi bu problemi çözer: ilgili controller'ları, provider'ları ve diğer yapıları birlikte gruplar, aralarındaki bağımlılıkları açık biçimde ifade etmeni sağlar ve uygulamanın hangi parçasının neye erişebildiğini net olarak tanımlar. Dependency injection ise bu yapının çalışmasını sağlayan mekanizmadır — sınıf bağımlılıklarını elle yönetmek yerine framework'e devretmeni mümkün kılar.

## Module Nedir?

Module, birbiriyle ilgili controller'ları ve provider'ları bir araya getiren organizasyonel birimdir. Her NestJS uygulamasının en az bir module'ü vardır: root module. `nest new` komutuyla oluşturduğun projede bu `AppModule`'dür.

Root module, uygulamanın başlangıç noktasıdır. NestJS, `main.ts`'teki `NestFactory.create(AppModule)` çağrısıyla bu module'den başlayarak tüm uygulama grafiğini derler. Diğer tüm module'ler ya doğrudan ya da dolaylı olarak root module'e bağlanır.

Module'ler aynı zamanda dependency injection scope'unun sınırını çizer. Bir provider belirli bir module'e aittir; o module dışında varsayılan olarak görünmez. Bu kural, farklı parçaların birbirinin iç yapısına istemeden bağımlı hale gelmesini önler ve kodun hangi bölümünün neye erişebildiğini öngörülebilir tutar.

`@Module()` decorator'ı bir sınıfı module olarak işaretler ve bu module'ün yapılandırmasını tanımlayan metadata nesnesini alır.

## @Module() Dekoratörünün Özellikleri

`@Module()` decorator'ı dört alan içeren bir nesne alır. Her alanın ne anlama geldiğini netleştirmek, module sistemiyle çalışırken hata yapma olasılığını önemli ölçüde düşürür.

**`imports`**

Bu module'ün kullanmak istediği provider'ları dışa aktaran diğer module'lerin listesi. Başka bir module'den bir service kullanmak istiyorsan, o service'in module'ünü burada `imports` dizisine eklersin. Sadece module eklediğine dikkat et — provider'ı doğrudan değil, onu export eden module'ü import edersin.

**`controllers`**

Bu module'e ait controller sınıflarının listesi. NestJS, bu controller'ları route registration sürecine dahil eder. Controller'ları birden fazla module'e eklememek gerekir; her controller yalnızca bir module'e aittir.

**`providers`**

Bu module içinde DI container'a kaydedilecek provider'ların listesi. Buradaki provider'lar yalnızca bu module içinden ve bu module'ün dışa aktardığı diğer module'lerden erişilebilir. `exports` ile açıkça paylaşılmadığı sürece kapsüllenmiş kalır.

**`exports`**

Bu module'ün başka module'lere açmak istediği provider'ların listesi. Bir provider'ı `providers`'a eklemek onu module dışında erişilebilir kılmaz; bunun için ayrıca `exports`'a da eklenmesi gerekir. Bu iki adımlı yapı kasıtlıdır: varsayılan davranış kapsülleme, paylaşım açık bir karar.

## Feature Module Oluşturma

Gerçek uygulamalarda her domain alanı kendi module'üne kavuşur. Kullanıcı yönetimi, ürün kataloğu, sipariş işleme — bunların her biri ayrı bir feature module olarak organize edilir. Bu ayrım izolasyonu, test edilebilirliği ve ekipler arası paralel geliştirmeyi kolaylaştırır.

Kedi yönetimi örneğine devam edelim:

```typescript
// kediler.module.ts
import { Module } from '@nestjs/common';
import { KedilerController } from './kediler.controller';
import { KedilerService } from './kediler.service';

@Module({
  controllers: [KedilerController],
  providers: [KedilerService],
  exports: [KedilerService], // Diğer modüllerin kullanabilmesi için dışa aktarılır
})
export class KedilerModule {}
```

Bu module, kedi yönetimiyle ilgili her şeyi bir araya toplar. `KedilerController` gelen HTTP isteklerini karşılar, `KedilerService` iş mantığını yürütür. Dışarıdan bakıldığında bu module bir kara kutu gibi davranır — içindeki implementasyon detaylarına dışarıdan doğrudan erişilemez.

Feature module'ü root module'e bağlamak için `AppModule`'ün `imports` dizisine eklersin:

```typescript
// app.module.ts — KedilerModule'ü root module'e ekle
import { Module } from '@nestjs/common';
import { KedilerModule } from './kediler/kediler.module';

@Module({
  imports: [KedilerModule],
})
export class AppModule {}
```

`AppModule` artık `KedilerController` ve `KedilerService`'i doğrudan bilmek zorunda değil. Bu ayrıntılar `KedilerModule`'ün içinde gizli. Uygulamaya yeni bir domain alanı eklediğinde `AppModule`'e sadece ilgili feature module'ü import edersin — her şeyi `AppModule`'e yığmak yerine.

## Module'ler Arası Paylaşım

Bir feature module'deki service'i başka bir module'de kullanmak istediğinde iki adım gerekir: provider'ı export eden tarafta `exports`'a ekle, kullanan tarafta `imports`'a module'ü ekle.

Diyelim ki `EvlerModule`, bir evde hangi kedilerin olduğunu sorgulamak istiyor. Bunun için `KedilerService`'e ihtiyaç duyuyor:

```typescript
// evler.module.ts — KedilerService'i başka bir modülde kullanmak
import { Module } from '@nestjs/common';
import { KedilerModule } from '../kediler/kediler.module';
import { EvlerService } from './evler.service';

@Module({
  imports: [KedilerModule], // KedilerModule export ettiği için KedilerService kullanılabilir
  providers: [EvlerService],
})
export class EvlerModule {}
```

```typescript
// evler.service.ts — KedilerService inject edilir
import { Injectable } from '@nestjs/common';
import { KedilerService } from '../kediler/kediler.service';

@Injectable()
export class EvlerService {
  constructor(private readonly kedilerService: KedilerService) {}

  evdekiKediler() {
    return this.kedilerService.tumunuGetir();
  }
}
```

`EvlerModule`, `KedilerService`'i doğrudan `providers` dizisine eklemedi. Bunun yerine `KedilerModule`'ü import etti. `KedilerModule` kendi `exports` dizisinde `KedilerService`'i listelediği için, onu import eden her module bu service'e erişebilir.

Önemli nokta: yalnızca `exports` listesindeki provider'lar görünür hale gelir. `KedilerModule`'ün içinde kullandığı ama export etmediği başka bir service varsa, `EvlerModule` ona ulaşamaz. Bu davranış bir kısıtlama değil, tasarım aracıdır — module'ün neyi dışarıya açtığı hakkında bilinçli karar vermeyi zorunlu kılar.

## Global Module

Bazı provider'lar uygulamanın her yerinde kullanılır: veritabanı bağlantısı, konfigürasyon servisi, logger. Her module'ün bunları ayrı ayrı import etmesi tekrara yol açar. `@Global()` decorator'ı bu durumu çözer.

```typescript
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

`@Global()` ile işaretlenmiş bir module `AppModule`'e bir kez import edildikten sonra, export ettiği provider'lar tüm uygulama genelinde kullanılabilir hale gelir. Diğer module'lerin `PrismaModule`'ü tekrar tekrar import etmesine gerek kalmaz.

Ancak NestJS resmi dokümantasyonu bu yaklaşımı genel bir tasarım pratiği olarak önermez. Nedeni açıktır: global module, bağımlılıkları görünmez kılar. Bir service `PrismaService` kullandığında bu bağımlılık module tanımında görünmez; sadece constructor'a bakarak anlaşılır. Kodun büyümesiyle hangi module'ün neye bağımlı olduğunu takip etmek zorlaşır.

`@Global()` decorator'ını şu senaryolarda düşünebilirsin: her module'ün kesinlikle ihtiyaç duyacağı altyapı provider'ları için. `ConfigModule`, `PrismaModule`, `LoggerModule` bunların tipik örnekleridir. Domain servisleri için değil — o tür paylaşımı standart `imports`/`exports` mekanizmasıyla yapman daha iyi bir tercihdir.

## DI Container Nasıl Çalışır?

Uygulamayı başlattığında NestJS birkaç adımdan geçerek DI grafiğini kurar.

**Module derleme aşaması:** NestJS önce root module'den başlayarak tüm module'leri yükler. Her module'ün `imports`, `providers`, `controllers` ve `exports` listesini analiz eder. Bu işlem tüm modülleri kapsayan tam bir bağımlılık haritası çıkarır.

**Singleton çözümleme:** Her provider için bağımlılıkları belirlenir ve doğru oluşturma sırası hesaplanır. `KedilerController`, `KedilerService`'e bağımlıysa önce `KedilerService` instance'ı oluşturulur. Varsayılan scope'ta (singleton) her provider bir kez oluşturulur ve aynı instance yeniden kullanılır.

**Döngüsel bağımlılık sorunu:** A sınıfı B'ye, B sınıfı A'ya bağımlıysa NestJS bu grafiği çözümleyemez ve hata verir. Bu durumu mimarinin yeniden gözden geçirilmesiyle çözmek en sağlıklı yoldur — gerçekten iki sınıf birbirine bu kadar sıkı bağlıysa, ortak bir üçüncü sınıfa taşınabilecek bir sorumluluk var demektir.

Döngüsel bağımlılığı kırmak için NestJS `forwardRef()` helper'ını sunar:

```typescript
constructor(
  @Inject(forwardRef(() => KedilerService))
  private readonly kedilerService: KedilerService,
) {}
```

Bu bir geçici çözümdür, tercih edilen yaklaşım değil. `forwardRef()` kullanmak zorunda kaldığında mimariyi sorgulamak gerekir.

Module sistemi ve DI container, NestJS'in parçaları bir arada tutma biçimini belirler. Module'leri iyi tanımlanmış sorumluluk sınırlarıyla oluşturduktan sonra, uygulamanın her parçası diğerinden bağımsız biçimde geliştirilebilir, test edilebilir ve anlaşılabilir hale gelir.
