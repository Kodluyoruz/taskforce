# shadcn/ui Nedir?

React projelerinde UI component'ları nasıl yönetiyorsun? Muhtemelen bir kütüphane kuruyorsun, component'ı import ediyorsun ve bir sorunla karşılaştığında Google'a "how to override MUI button style" diye yazıyorsun. shadcn/ui bu döngüyü kırıyor — ama bunu yaparken seni bambaşka bir modele götürüyor.

Bu topic'in sonunda shadcn/ui'ın ne olduğunu, nasıl çalıştığını ve projena alıp almamana nasıl karar vereceğini anlayacaksın.

## Geleneksel UI Kütüphaneleri ve Sorunları

Bootstrap'i hatırlıyorsun. Sonra Material UI geldi, Ant Design geldi, Chakra UI geldi. Bunların hepsinin ortak bir mantığı var: bir npm paketi kurarsın, component'ları import edersin ve kullanırsın.

Bu yaklaşım başlangıçta çok rahat hissettiriyor. Ama bir süre sonra bazı duvarlarla karşılaşıyorsun:

**node_modules içinde kilitli kaynak kodu.** `@mui/material` altındaki Button component'ının kaynak kodunu görmek istediğinde ne yapıyorsun? node_modules klasörüne giriyorsun, gömülü dosyaları okumaya çalışıyorsun, sonra "zaten değiştiremem ki" diyip çıkıyorsun. Kod sende değil, paket yöneticisinde.

**!important savaşları.** Kütüphanenin uyguladığı stilleri override etmek için bazen CSS'e `!important` ekliyorsun. Sonra o `!important` başka bir şeyi bozuyor, oraya da `!important` ekliyorsun. Bu sarmal büyüyor ve bir süre sonra CSS dosyan kimin yazdığı belli olmayan kurallarla dolup taşıyor.

**Kütüphanenin tasarım kararlarıyla mahsur kalmak.** Material UI'ın Button component'ı `contained`, `outlined`, `text` variant'larını destekliyor. Ya sen bunların hiçbirine uymayan bir tasarım istersen? Kütüphanenin öngördüğü sınırlar içinde çalışmak zorunda kalıyorsun ya da component'ı sıfırdan yazıyorsun — ki bu da kütüphane kurmanın amacını tamamen ortadan kaldırıyor.

**Major versiyonlarda breaking changes riski.** Material UI v4'ten v5'e geçiş yaşayanlar bilir: `makeStyles` kaldırıldı, stil sistemi değişti, migration guide onlarca sayfa tuttu. Bir dependency'nin major versiyonunu güncellemek için haftalar harcayabiliyorsun.

Tüm bu sorunlar tek bir kökten geliyor: kod sende değil, kütüphanede.

## shadcn/ui'ın Yaklaşımı: Open Code

shadcn/ui'ın kendi dokümantasyonu net bir şekilde şunu söylüyor: **"Bu bir component kütüphanesi değil. Bu, kendi component kütüphaneni nasıl inşa edeceğinin yolu."**

Bu cümle biraz kafanı karıştırabilir. Açıklayayım.

shadcn/ui'ı npm'den kurduğunda projena bir paket gelmez. Bunun yerine CLI aracılığıyla seçtiğin component'ın kaynak kodunu doğrudan projenin içine kopyalarsın. Button component'ını istediysen `components/ui/button.tsx` diye bir dosya oluşur — ve bu dosya senin projenin içinde, tamamen senin kontrolünde.

Buna **"open code"** deniyor. Fikir şu: kaynak kodu okunaklı ve değiştirilebilir olduğunda, hem sen hem de AI araçları o kodu anlayabilir ve üzerine inşa edebilir.

Pratik sonuçları şunlar:

- Component'ın herhangi bir satırını değiştirebilirsin. Renk, davranış, yapı — hepsini düzenleyebilirsin.
- Bir kütüphane güncellemesi beklemeye gerek yok. Bir özellik istiyorsan kendin ekleyebilirsin.
- Kütüphane major versiyonlarından kaynaklanan breaking changes seni etkilemez, çünkü kütüphaneye bağımlı değilsin.
- Projen kapandığında component'ların hâlâ orada duruyor. Maintainer birisi sabah kalktı "artık bu paketi güncellemiyorum" dedi diye paniklemene gerek yok.

Şuna benzetebilirsin: bir fırından ekmek almak yerine tarifi alıyorsun ve kendi mutfağında pişiriyorsun. Fırın kapanırsa tarif hâlâ sende.

```tsx
// Geleneksel yaklaşım — npm paketi
import Button from '@mui/material/Button';
// Kaynak koda erişemezsin.
// Renk değiştirmek için tema sistemiyle boğuşursun.
// Her major update'te breaking change riski var.

// shadcn/ui yaklaşımı
import { Button } from "@/components/ui/button";
// components/ui/button.tsx dosyası SENIN projenin içinde.
// İstediğin satırı değiştirebilirsin.
// Kütüphane güncellemesi beklemeye gerek yok.
```

Yeni bir component eklemek için CLI'ı çalıştırırsın:

```bash
# Dialog component'ını projena kopyala
npx shadcn@latest add dialog

# Birden fazla component aynı anda
npx shadcn@latest add button card input form
```

Bu komutları çalıştırdıktan sonra `components/ui/` klasörüne bakarsın — kodlar orada, okunmayı bekliyor.

## Altındaki Üç Teknoloji

shadcn/ui kendi kendine bir şey icat etmiyor. Var olan üç güçlü teknolojiyi bir araya getiriyor:

### Radix UI — Erişilebilirlik Primitives'leri

Dialog, Dropdown, Tooltip, Select gibi component'lar görünenden çok daha karmaşık. Klavye navigasyonu, ekran okuyucu desteği, focus yönetimi, ARIA attribute'ları — bunları sıfırdan doğru yazmak ciddi bir iş.

Radix UI bu "davranışsal" katmanı hallediyor. Stilsiz ama tamamen erişilebilir primitive'ler sunuyor. shadcn/ui bu primitive'lerin üzerine Tailwind stilleri giydiriyor. Yani component'lar hem görsel olarak güzel hem de ekran okuyucularla uyumlu çıkıyor.

### Tailwind CSS — Utility-First Stillendirme

Component'ların stilleri ayrı bir CSS dosyasında değil, doğrudan JSX içinde Tailwind class'larıyla yazılıyor. Bu sayede her şeyi görebiliyor ve değiştirebiliyorsun. "Bu button'un padding'i nereden geliyor?" sorusunun cevabı hemen önünde.

Tailwind'in utility-first yaklaşımı shadcn/ui'ın "open code" felsefesiyle mükemmel örtüşüyor: her şey görünür, her şey değiştirilebilir.

### TypeScript — Tip Güvenliği

Component'lar TypeScript ile yazılmış. Props'ların ne aldığını, hangi variant'ların mevcut olduğunu editörün sana söylüyor. Yanlış bir prop geçirmeye çalıştığında derleme aşamasında yakalanıyorsun, production'da değil.

Bu üçlünün kombinasyonu şu anlama geliyor: erişilebilir, görsel olarak tutarlı, tip güvenli component'lar — ve hepsinin kaynak kodu açık.

## "AI-Ready" Ne Demek?

shadcn/ui'ın dokümanlarında "AI-Ready" ifadesi geçiyor. Bunun arkasında somut bir mantık var.

AI araçları (v0, Claude, Cursor gibi) kod üretirken o kodu anlayabilmek zorunda. Bir npm paketinin derlenmiş çıktısı yerine okunabilir TypeScript dosyaları olduğunda, AI araçları component'ının tam olarak nasıl çalıştığını görebiliyor.

Bunu şöyle düşün: Cursor'da "bu dialog'a bir loading state ekle" dediğinde, Cursor `components/ui/dialog.tsx` dosyasını okuyabiliyor ve tam olarak nereye ne eklemesi gerektiğini anlayabiliyor. Derlenmiş bir pakette bu mümkün olmazdı.

v0 (Vercel'in AI arayüz üreticisi) shadcn/ui component'larını varsayılan çıktı formatı olarak kullanıyor. Bir arayüz taslağı oluşturduğunda doğrudan `shadcn/ui` component'ları olarak geliyor, kopyalayıp yapıştırabileceğin hâlde.

Bu özellik giderek daha önemli hâle geliyor. AI-assisted development artık bir niş değil, günlük iş akışının parçası. shadcn/ui bu iş akışıyla doğal olarak uyum sağlıyor.

## Ne Zaman Kullanmalısın?

Dürüst bir değerlendirme yapalım. shadcn/ui her proje için doğru seçim değil.

### Uygun Senaryolar

**Tasarım sistemine sahip olmak istiyorsun.** Kendi tasarım dilinle tutarlı bir component seti oluşturmak istiyorsan, shadcn/ui bunu yapmanın en iyi yollarından biri. Başlangıç noktasını veriyor, geri kalanı sana bırakıyor.

**Tailwind zaten kullanıyorsun.** Projen zaten Tailwind ile stillendiriliyorsa shadcn/ui çok doğal entegre oluyor. İki farklı stil sistemi arasında çakışma yaşamıyorsun.

**Uzun vadeli bir proje.** Breaking changes konusunda stres yaşamak istemiyorsun ve projenin component katmanı üzerinde tam kontrol istiyorsun. shadcn/ui bu senaryoda çok mantıklı.

**AI araçlarıyla aktif çalışıyorsun.** Cursor, Claude veya benzer araçları günlük kullanıyorsan shadcn/ui bu araçlarla çok iyi çalışıyor.

### Uygun Olmayan Senaryolar

**Hızlı bir prototip yapıyorsun.** Sadece iki günde bir şey göstermen gerekiyorsa ve component özelleştirme önceliğin değilse, hazır bir kütüphane daha hızlı olabilir. shadcn/ui kurulumu ve yapılandırması birkaç adım istiyor.

**Tailwind kullanmıyorsun ve kullanmayı planlamıyorsun.** shadcn/ui'ın Tailwind'e bağımlılığı derin. CSS Modules ya da styled-components ile çalışan bir projede shadcn/ui'ı entegre etmek acı verecektir.

**Takım Tailwind'i bilmiyor.** Component'ları değiştirmek için Tailwind class'larını anlamak gerekiyor. Takımın öğrenme eğrisini hesaba katman lazım.

**Non-React proje.** shadcn/ui registry'si framework-agnostic olduğunu söylüyor ama component'ların büyük çoğunluğu React için yazılmış. Vue ya da Svelte projesinde farklı bir yol izlemen gerekir.

---

Özetle: shadcn/ui bir component kütüphanesi değil, component'ları dağıtma ve sahiplenme biçimi. "Kurun ve kullanın" değil, "alın ve sizin yapın" felsefesi. Bu ayrım küçük gibi görünse de pratikte devasa bir fark yaratıyor — hem geliştirme sürecinde hem de projenin uzun vadeli bakımında.

Sonraki topic'te shadcn/ui'ı sıfırdan bir Next.js projesine nasıl kurduğunu adım adım göreceğiz.
