# Kurulum ve Proje Yapısı

NestJS ile geliştirmeye başlamadan önce birkaç araç kurman ve projenin nasıl yapılandığını anlamanı gerekiyor. Bu bölümde sıfırdan bir NestJS projesi oluşturup çalıştıracak, her dosyanın ne işe yaradığını öğreneceksin.

## Gereksinimler

NestJS v11, Node.js'in LTS sürümleriyle en iyi çalışır. Minimum gereksinim **Node.js v20+** sürümüdür. Daha eski bir Node.js sürümü kullananlar için bazı bağımlılıklar beklenmedik şekilde davranabilir ya da kurulum sırasında uyarılar alabilirsin.

Paket yöneticisi olarak `npm` veya `yarn` kullanabilirsin. NestJS CLI, proje oluştururken hangi paket yöneticisini kullanmak istediğini sana sorar.

Mevcut kurulumunu kontrol etmek için terminali aç ve şunu çalıştır:

```bash
# Gereksinim kontrolü
node --version  # v20.x.x veya üzeri olmalı
npm --version

# CLI kurulumu
npm i -g @nestjs/cli

# Yeni proje
nest new benim-projem
cd benim-projem
npm run start:dev
```

`node --version` çıktısı `v20` veya üzeri bir sürüm gösteriyorsa devam edebilirsin. Daha düşük bir sürüm görüyorsan [Node.js resmi sitesinden](https://nodejs.org) güncel LTS sürümünü indir ya da `nvm` ile sürüm yönetimini ele al.

## NestJS CLI Kurulumu

NestJS CLI, framework ile çalışırken sık kullandığın işlemleri otomatikleştiren komut satırı aracıdır. Global olarak bir kez kurarsın, sonra tüm projelerinde kullanabilirsin:

```bash
npm i -g @nestjs/cli
```

CLI'nin sunduğu başlıca yetenekler şunlardır:

- **Scaffolding:** Boilerplate kodunu elle yazmak zorunda kalmadan module, controller, service gibi yapıları birkaç komutla oluşturur.
- **Code generation:** `nest generate` komutuyla tek tek dosyalar veya tüm CRUD resource'ları üretebilirsin. Her seferinde dosya yapısını, import'ları ve decorator'ları elle kurmak zorunda kalmazsın.
- **Build:** TypeScript'i JavaScript'e derleyip `dist/` klasörüne yazar. Production ortamı için optimize edilmiş çıktı alırsın.
- **Geliştirme sunucusu:** Dosyalardaki değişiklikleri izler ve uygulamayı otomatik yeniden başlatır.

CLI kurulumu tamamlandıktan sonra `nest --version` komutuyla kurulumun başarılı olduğunu doğrulayabilirsin.

## Yeni Proje Oluşturma

Projeyi oluşturmak için CLI'nin `new` komutunu kullanırsın:

```bash
nest new benim-projem
```

CLI, proje adını aldıktan sonra sana hangi paket yöneticisini kullanmak istediğini sorar:

```
? Which package manager would you ❤️ to use?
  npm
❯ yarn
  pnpm
```

Seçim yapınca CLI şunları yapar:

1. Proje dizinini oluşturur.
2. `package.json`, `tsconfig.json`, `nest-cli.json` gibi yapılandırma dosyalarını yerleştirir.
3. `src/` altına başlangıç için bir module, controller ve service dosyası ekler.
4. Seçtiğin paket yöneticisiyle bağımlılıkları yükler.

İşlem bittiğinde `cd benim-projem` komutuyla proje dizinine gir.

## Proje Dosya Yapısının Anatomisi

Proje oluşturulduktan sonra `src/` klasöründe şu yapıyı görürsün:

```
src/
├── app.controller.ts       # Ana controller (örnek /hello endpoint'i)
├── app.controller.spec.ts  # Controller unit testi
├── app.module.ts           # Kök module — tüm modüller buraya bağlanır
├── app.service.ts          # Ana service (örnek iş mantığı)
└── main.ts                 # Uygulama başlangıç noktası
```

Her dosyanın rolüne bakalım:

**`main.ts`**

Uygulamanın başladığı yer burasıdır. `NestFactory.create()` ile uygulama örneği oluşturulur ve belirtilen port'ta dinlemeye alınır.

```typescript
// main.ts — uygulamanın başladığı yer
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

`NestFactory.create()` kök module'ü alır ve tüm bağımlılık grafiğini buradan kurar. `process.env.PORT ?? 3000` ifadesi, ortam değişkeninden port alır; tanımlı değilse 3000'i varsayılan olarak kullanır.

**`app.module.ts`**

Uygulamanın kök module'üdür. Yeni module'ler ekledikçe hepsini bu dosyada `imports` dizisine bağlarsın. NestJS, bağımlılık enjeksiyonu için bu module haritasını kullanır — hangi provider'ın nereye enjekte edileceğini bu yapı belirler.

**`app.controller.ts`**

Gelen HTTP isteklerini karşılayan ve uygun handler'lara yönlendiren katmandır. İş mantığı burada değil, service'te olur. Controller yalnızca isteği alır, service'i çağırır ve yanıtı döndürür.

**`app.controller.spec.ts`**

`app.controller.ts` için otomatik oluşturulan unit test dosyasıdır. NestJS, Jest'i test framework'ü olarak kullanır. Bu dosya, controller'ın test edilebilir biçimde nasıl kurulduğunu gösterir.

**`app.service.ts`**

İş mantığının yaşadığı yerdir. Controller'dan gelen çağrıları işler, veritabanı sorguları, harici API çağrıları ve hesaplamalar burada yapılır. `@Injectable()` decorator'ı sayesinde NestJS'in bağımlılık enjeksiyonu sistemi bu sınıfı yönetir.

---

`src/` dışında da birkaç önemli dosya vardır:

**`nest-cli.json`**

CLI'nin projeyi nasıl yapılandıracağını tanımlar. Kaynak dizini, çıktı dizini ve derleme seçenekleri burada tutulur. Monorepo yapısına geçtiğinde bu dosya daha fazla anlam kazanır.

**`tsconfig.json`**

TypeScript derleyicisine hangi kuralların geçerli olduğunu söyleyen yapılandırma dosyasıdır. NestJS, decorator'lar için `experimentalDecorators` ve metadata reflection için `emitDecoratorMetadata` özelliklerine ihtiyaç duyar — bunlar bu dosyada etkinleştirilmiştir.

**`package.json`**

Bağımlılıkları ve çalıştırabileceğin script'leri içerir. `npm run start:dev`, `npm run build`, `npm run test` gibi komutlar burada tanımlanmıştır.

## İlk Uygulamayı Çalıştırma

NestJS, farklı ihtiyaçlar için farklı başlatma komutları sunar:

**Geliştirme modunda çalıştırma:**

```bash
npm run start:dev
```

Bu komut, uygulamayı "watch mode"da başlatır. `src/` altındaki herhangi bir dosyayı kaydettiğinde uygulama otomatik olarak yeniden derlenir ve başlatılır. Geliştirme sırasında her değişiklikte elle yeniden başlatmak zorunda kalmazsın.

**Standart başlatma:**

```bash
npm run start
```

Önceden derlenmiş `dist/` klasörünü çalıştırır — değişiklikleri izlemez. Çalışması için önce `npm run build` yapman gerekir. Hızlı bir test için kullanışlıdır.

**Production build ve çalıştırma:**

```bash
npm run build      # TypeScript'i derler, dist/ klasörüne yazar
npm run start:prod # Derlenen JavaScript'i çalıştırır
```

Production ortamında TypeScript kaynak dosyaları değil, derlenmiş JavaScript çalışır. `dist/main.js` başlangıç noktası olarak kullanılır.

**Port değiştirme:**

Varsayılan port 3000'dir. Bunu değiştirmenin en temiz yolu ortam değişkeni kullanmaktır:

```bash
PORT=4000 npm run start:dev
```

Ya da `main.ts` içinde `app.listen()` çağrısına sabit bir değer verebilirsin; ama ortam değişkeni yaklaşımı farklı ortamlar (development, staging, production) arasında geçiş yaparken çok daha esnektir.

Uygulama başarıyla çalıştığında terminalde şunu görürsün:

```
[Nest] LOG [NestFactory] Starting Nest application...
[Nest] LOG [NestApplication] Nest application successfully started +Xms
[Nest] LOG [NestApplication] Application is running on: http://localhost:3000
```

Tarayıcıda `http://localhost:3000` adresini açtığında `Hello World!` yanıtını alırsın — bu, `app.controller.ts` içindeki örnek endpoint'ten gelir.

## Yararlı CLI Komutları

Proje büyüdükçe yeni module'ler, controller'lar ve service'ler eklemen gerekir. Her seferinde dosyaları elle oluşturmak yerine CLI'nin `generate` komutunu kullanırsın:

```bash
# Scaffold komutları — tek tek dosya oluşturma
nest generate module kullanicilar       # veya: nest g mo kullanicilar
nest generate controller kullanicilar   # veya: nest g co kullanicilar
nest generate service kullanicilar      # veya: nest g s kullanicilar

# Tüm CRUD dosyalarını birden oluşturmak:
nest generate resource kullanicilar
# Bu komut; module, controller, service, dto'ları ve entity'yi tek seferde oluşturur
```

Her komutun ne ürettiğine bakalım:

**`nest g module kullanicilar`**

`src/kullanicilar/kullanicilar.module.ts` dosyasını oluşturur ve otomatik olarak `app.module.ts` içindeki `imports` dizisine ekler. Module'ü elle bağlamak zorunda kalmazsın.

**`nest g controller kullanicilar`**

`src/kullanicilar/kullanicilar.controller.ts` ve `kullanicilar.controller.spec.ts` dosyalarını oluşturur. Controller, ilgili module'e otomatik olarak kaydedilir.

**`nest g service kullanicilar`**

`src/kullanicilar/kullanicilar.service.ts` ve `kullanicilar.service.spec.ts` dosyalarını oluşturur. Service de ilgili module'ün `providers` dizisine otomatik eklenir.

**`nest g resource kullanicilar`**

En kapsamlı generate komutudur. Tek bir komutla şunları oluşturur:

- `kullanicilar.module.ts`
- `kullanicilar.controller.ts` ve `.spec.ts`
- `kullanicilar.service.ts` ve `.spec.ts`
- `dto/create-kullanicilar.dto.ts` ve `update-kullanicilar.dto.ts`
- `entities/kullanicilar.entity.ts`

Hangi transport türünü kullandığını sorar (REST API, GraphQL, WebSockets, Microservice). REST seçersen controller içinde `findAll`, `findOne`, `create`, `update`, `remove` metodları hazır gelir. CRUD işlemleri için sıfırdan başlamak yerine bu yapıyı temel alarak geliştirmeye başlayabilirsin.

CLI'nin kısaltmalarını öğrenmen uzun vadede zaman kazandırır: `mo` module, `co` controller, `s` service, `gu` guard, `itc` interceptor, `pi` pipe anlamına gelir. `nest generate --help` komutuyla tam listeye bakabilirsin.
