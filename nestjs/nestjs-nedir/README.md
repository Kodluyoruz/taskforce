# NestJS Nedir?

NestJS, Node.js üzerinde çalışan, ölçeklenebilir server-side uygulamalar geliştirmek için tasarlanmış bir framework'tür. 2017 yılında Kamil Myśliwiec tarafından yayımlandı ve özellikle büyük ekiplerin karmaşık backend projelerinde düzeni koruyabilmesi için geliştirildi. Bugün GitHub'da 70 binin üzerinde yıldıza sahip ve aktif olarak geliştirilmeye devam ediyor.

NestJS'i diğer Node.js framework'lerinden ayıran en temel özellik, Angular'dan ilham alarak getirdiği yapısal yaklaşımdır. Module, controller ve provider üçlüsüne dayanan bu mimari, uygulamanın büyüdükçe nasıl organize edileceğini baştan belirler. Kodu nasıl yapılandıracağını sen düşünmek zorunda kalmazsın — framework bunu zaten dikte eder.

## NestJS ve Express Karşılaştırması

Express, Node.js ekosisteminin en köklü HTTP framework'üdür. Minimal tasarımı sayesinde inanılmaz esnektir: middleware eklersin, route tanımlarsın, işin biter. Ama bu esneklik aynı zamanda bir boşluk bırakır — uygulamanı nasıl organize edeceğine tamamen kendin karar verirsin. 5 kişilik ekipte herkes farklı bir yapı benimseyebilir, altı ay sonra kod tabanı okunaksız hale gelebilir.

NestJS ise "opinionated" bir framework'tür. Sana belirli bir yol gösterir ve o yolda yürümeni bekler. Bunun karşılığında ekip içinde tutarlılık, test edilebilirlik ve ölçeklenebilirlik elde edersin.

Önemli bir ayrıntı: NestJS, Express'in rakibi değil, onun üstüne kurulu bir katmandır. Varsayılan olarak Express'i HTTP adaptörü olarak kullanır. Performansa ihtiyaç duyarsan Fastify adaptörüne geçebilirsin — uygulama kodunu değiştirmene gerek kalmaz. Bu "HTTP adaptörü" soyutlaması, NestJS'in ne kadar iyi düşünülmüş bir mimariyle tasarlandığını gösterir.

| Özellik | Express | NestJS |
|---|---|---|
| Yapı | Senin belirlediğin | Framework tarafından dikte edilen |
| TypeScript desteği | Ekstra kurulum gerekir | Birinci sınıf, varsayılan |
| Öğrenme eğrisi | Düşük | Orta |
| Büyük proje yönetimi | Zorlaşır | Tasarım gereği desteklenir |
| Dekoratör kullanımı | Yok | Merkezi rol oynar |
| Test kolaylığı | Manuel kurulum | Yerleşik DI ile kolay |
| Microservice desteği | Üçüncü parti kütüphaneler | Yerleşik |
| HTTP adaptörü | Express | Express veya Fastify (seçilebilir) |

Aşağıda aynı endpoint'in iki framework'te nasıl yazıldığını görebilirsin:

```typescript
// Express yaklaşımı
import express from 'express';
const app = express();

app.get('/kullanicilar', (req, res) => {
  res.json([{ id: 1, ad: 'Ali' }]);
});

app.listen(3000);
```

```typescript
// NestJS yaklaşımı
import { Controller, Get } from '@nestjs/common';

@Controller('kullanicilar')
export class KullanicilarController {
  @Get()
  tumKullanicilariGetir() {
    return [{ id: 1, ad: 'Ali' }];
  }
}
```

Express örneğinde her şey açık ve düz: bir fonksiyon, bir route, bir cevap. NestJS örneğinde ise bir class var, üzerinde dekoratörler var ve bu class'ın bir module içinde kayıtlı olması gerekiyor. İlk bakışta fazla karmaşık gibi görünebilir — ama proje büyüdükçe bu yapı seni kurtarır.

## Temel Yapı Taşları

NestJS uygulaması üç temel kavram üzerine kurulur: **Module**, **Controller** ve **Provider**.

**Module**, uygulamanın organizasyon birimidir. İlgili controller'ları, provider'ları ve diğer bağımlılıkları bir araya toplar. Her NestJS uygulamasında en az bir tane `AppModule` bulunur; büyük projelerde onlarca module yan yana çalışır. Module'ler birbirini import edebilir, böylece özellikler izole biçimde geliştirilip gerektiğinde birleştirilebilir.

**Controller**, HTTP isteklerini karşılayan katmandır. Hangi URL'e gelen hangi HTTP metodunun (GET, POST, PUT, DELETE) nasıl işleneceğini tanımlar. Ama iş mantığını controller içine yazmazsın — sadece isteği alır, ilgili service'e iletir, yanıtı dönersin.

**Provider**, iş mantığının yaşadığı yerdir. Service'ler, repository'ler, factory'ler ve helper'lar provider olabilir. NestJS'in dependency injection (DI) sistemi sayesinde provider'lar birbirine ve controller'lara kolayca enjekte edilir. Bu yapı hem test yazmayı hem de kodu yeniden kullanmayı önemli ölçüde kolaylaştırır.

Her üç kavramı da ilerleyen topic'lerde kod örnekleriyle ayrıntılı inceleyeceğiz.

## NestJS Ne Zaman Tercih Edilir?

NestJS her projeye uygun değildir. Onu gerçekten kazandıran durumlar şunlardır:

**Büyük ekipler ve uzun soluklu projeler.** Beş veya daha fazla geliştiricinin aynı kod tabanında çalıştığı projelerde, herkesin farklı bir yapı benimsemesi kaosa yol açar. NestJS'in dayattığı mimari, yeni geliştiricilerin projeye hızla adapte olmasını sağlar. Kodu neyin nerede olduğunu tahmin edebilirsin çünkü her şey belirli kurallara göre yerleştirilmiştir.

**Microservice mimarisi.** NestJS, microservice'leri birinci sınıf vatandaş olarak destekler. TCP, Redis, MQTT, Kafka gibi transport katmanlarına built-in desteği vardır. Monolitik bir uygulama başlayıp zamanla microservice'lere geçmek istiyorsan, NestJS bu geçişi önemli ölçüde kolaylaştırır.

**Test edilebilirlik ön plandaysa.** NestJS'in DI sistemi, birim testleri yazmayı son derece pratik hale getirir. Bir service'i test ederken bağımlılıklarını mock'layabilir, controller'ları izole biçimde test edebilirsin. Bu, özellikle CI/CD pipeline'ı sıkı tutulan kurumsal projelerde kritik bir avantajdır.

**Ne zaman tercih edilmez?** Kısa vadeli bir script yazıyorsan, tek endpoint'lik basit bir webhook servisi kuruyorsan ya da hızlıca bir prototip çıkarman gerekiyorsa NestJS aşırı mühendislik olur. Bu tür senaryolarda Express veya Fastify'ı doğrudan kullanmak çok daha mantıklıdır. Framework'ün getirdiği yapıyı öğrenmek ve uygulamak zaman alır; bu zamanı küçük projelerde harcamak verimsiz bir yatırımdır.

## TypeScript ve Dekoratörler

NestJS sıfırdan TypeScript ile yazılmıştır ve TypeScript kullanımı framework'ün merkezindedir. Tipler sayesinde IDE desteği güçlenir, hatalar derleme aşamasında yakalanır ve büyük kod tabanlarında refactoring çok daha güvenli yapılır. JavaScript ile de kullanabilirsin ama ekosistem TypeScript üzerine kurulu olduğundan tam verimliliği yalnızca TypeScript ile elde edersin.

Dekoratörler ise NestJS'in dilini oluşturur. Bir class'ın controller olduğunu `@Controller()` dekoratörüyle, bir metodun GET isteğini karşıladığını `@Get()` dekoratörüyle ifade edersin. Bu dekoratörler görünürde basit etiketler gibi dursa da aslında metadata ekler — TypeScript'in Reflect API'sini kullanarak class ve metodlar hakkında bilgi depolarlar. NestJS bu metadata'yı runtime'da okuyarak uygulamayı nasıl yapılandıracağına karar verir.

Dekoratör konsepti ilk başta alışılmadık gelebilir ama mantığını kavradığında kod okumak çok daha kolay hale gelir. `@Injectable()` gördüğünde bu class'ın DI sistemine kayıtlı olduğunu, `@Module()` gördüğünde bir organizasyon birimi tanımlandığını hemen anlarsın.

Angular geliştirme deneyimin varsa bu pattern'lar sana tamamen tanıdık gelecektir. `@Component()`, `@NgModule()`, `@Injectable()` gibi dekoratörlerle zaten çalışmışsındır. NestJS, Angular'ın frontend'e getirdiği yapıyı backend'e taşımak amacıyla tasarlandı — bu yüzden iki framework arasındaki benzerlik tesadüf değil, bilinçli bir tasarım kararıdır.

## Sürüm Bilgisi

Bu kurs, **NestJS v11** (2025) sürümünü hedeflemektedir. NestJS v11, **Node.js v20 ve üzeri** gerektirir; daha eski Node.js sürümleriyle çalışmaz. Kurulum yapmadan önce `node --version` komutuyla Node.js sürümünü kontrol et.

Eğer daha önce NestJS v9 veya v10 ile çalıştıysan, v11'de breaking change sayısı azdır; genel mimaride bir değişiklik yoktur. Yeni başlıyorsan doğrudan v11 ile başlamak en doğru tercih.
