# Theming Sistemi

shadcn/ui'yi kurup ilk component'ını eklediğinde aklında mutlaka şu soru belirmiştir: "Peki bu renkleri nasıl değiştireceğim?" Bu topic tam olarak bunu yanıtlıyor. shadcn/ui'nin theming yaklaşımı, hardcoded değerler yerine CSS variable'lardan oluşan bir design token sistemi üzerine kuruludur. Bir kez nasıl çalıştığını kavradığında, tüm uygulamanın rengini tek bir dosyadan saniyeler içinde değiştirebilirsin.

---

## CSS Variables ile Design Tokens

Design token kavramı basit: renk, boyut veya boşluk gibi tasarım kararlarını sabit değerler olarak değil, isimlendirilmiş değişkenler olarak saklamak. `#3b82f6` yerine `--primary` diyorsun. Bu ayrım küçük görünür ama sonuçları çok büyüktür.

**Neden hardcoded renk değil, token kullanmalısın?**

Diyelim ki uygulamanın genelinde mavi kullandın ve onlarca bileşende `bg-blue-500` yazdın. Bir gün tasarımcı rengi koyu mavi yapmak istedi. Şimdi o onlarca yeri bulup güncelllemen gerekiyor. Token kullansaydın sadece `--primary` değişkenini değiştirirdin, hepsi otomatik güncelleniyor.

Dark mode söz konusu olduğunda fark daha da belirginleşiyor. Token sistemi olmadan açık/koyu tema için tüm bileşenleri iki kez yazman gerekirdi. Token sistemiyle sadece aynı değişkenlere farklı değerler atıyorsun.

**HSL formatı neden tercih edilir?**

shadcn/ui başlangıçta HSL (Hue, Saturation, Lightness) formatını benimsedi. Bu formatın güzelliği şu: rengi, doygunluğu ve parlaklığı birbirinden bağımsız manipüle edebilirsin. `220 39% 11%` ifadesinde 220 hue (ton), 39% saturation (doygunluk), 11% lightness (parlaklık) demektir. Örneğin bir rengi daha açık yapmak istersen sadece lightness değerini artırırsın. Runtime'da CSS `calc()` ile bu değerleri dinamik olarak değiştirebilirsin.

Daha yeni shadcn/ui sürümleri OKLCH renk uzayına geçmiş durumda. OKLCH, insan gözünün algısına daha uygun perceptually uniform (algısal olarak eşit) bir renk uzayıdır. Yani iki renk arasındaki matematiksel mesafe, gözün algıladığı görsel farkla daha iyi örtüşür. Tailwind v4 kullanan projelerde `globals.css` içindeki değerler OKLCH formatında gelir: `--background: oklch(1 0 0);`. Tailwind v3 ile kurulan projelerde ise HSL formatı kullanılmaya devam edilir. Temel mantık aynı: renkler token olarak saklanır ve CSS variable'lar üzerinden kullanılır.

---

## globals.css Anatomy

Projeye `shadcn/ui` kurduğunda `globals.css` dosyana otomatik olarak bir `:root` ve `.dark` bloğu eklenir. Bu bloklar projenin tüm tema değişkenlerini barındırır. Her birinin ne işe yaradığını bilmek, sistemi istediğin gibi özelleştirmene olanak tanır.

Aşağıdaki örnek HSL formatında gösterilmiştir (Tailwind v3 varsayılanı). Tailwind v4 ile kurulumda bu değerler OKLCH formatında gelir ancak token adları ve mantık aynıdır.

```css
@layer base {
  :root {
    --background: 0 0% 100%;        /* Sayfanın genel arka plan rengi */
    --foreground: 224 71.4% 4.1%;   /* Sayfanın genel metin rengi */

    --card: 0 0% 100%;              /* Kart bileşeninin arka planı */
    --card-foreground: 224 71.4% 4.1%; /* Kart üzerindeki metin rengi */

    --primary: 220.9 39.3% 11%;       /* Ana eylem rengi (butonlar, linkler vb.) */
    --primary-foreground: 210 20% 98%; /* Primary üzerindeki metin rengi */

    --secondary: 220 14.3% 95.9%;       /* İkincil eylem rengi */
    --secondary-foreground: 220.9 39.3% 11%; /* Secondary üzerindeki metin */

    --muted: 220 14.3% 95.9%;           /* Silik/geri planda yüzeyler */
    --muted-foreground: 220 8.9% 46.1%; /* Yardımcı metin (placeholder, etiket) */

    --accent: 220 14.3% 95.9%;          /* Hover ve interaktif durumlar */
    --accent-foreground: 220.9 39.3% 11%; /* Accent üzerindeki metin */

    --destructive: 0 84.2% 60.2%;         /* Hata/silme rengi */
    --destructive-foreground: 210 20% 98%; /* Destructive üzerindeki metin */

    --border: 220 13% 91%;  /* Kenarlık rengi */
    --input: 220 13% 91%;   /* Input alanlarının kenarlık rengi */
    --ring: 224 71.4% 4.1%; /* Focus ring rengi (erişilebilirlik için) */
    --radius: 0.5rem;        /* Bileşenlerin köşe yarıçapı */
  }

  .dark {
    --background: 224 71.4% 4.1%;
    --foreground: 210 20% 98%;
    --primary: 210 20% 98%;
    --primary-foreground: 220.9 39.3% 11%;
    /* ... diğer dark token'lar */
  }
}
```

Her token'ı tek tek inceleyelim:

- **`--background` / `--foreground`**: Sayfanın temel yüzeyi ve üzerindeki metin. `body` elementine uygulanır.
- **`--card` / `--card-foreground`**: `Card` bileşeni bu token'ları kullanır. Background ile aynı olabilir ya da hafif farklı bir ton verebilirsin.
- **`--primary` / `--primary-foreground`**: En önemli ikili. Birincil butonlar, aktif durumlar, öne çıkan elementler bu rengi kullanır. `--primary-foreground` ise primary arka plan üzerinde okunabilir kontrast sağlamak için vardır.
- **`--secondary` / `--secondary-foreground`**: Daha düşük hiyerarşideki eylemler. Outline butonlar, etiketler gibi ikincil elemanlarda kullanılır.
- **`--muted` / `--muted-foreground`**: Geri planda kalan yüzeyler ve yardımcı metinler. Placeholder text, açıklama metinleri, deaktif durumlar bu token'ı tercih eder.
- **`--accent` / `--accent-foreground`**: Hover durumları ve interaktif highlight'lar için. Bir menü öğesinin üzerine geldiğinde gördüğün hafif renk değişimi genellikle accent token'ından gelir.
- **`--destructive` / `--destructive-foreground`**: Tehlikeli aksiyonlar için. Silme butonları, hata mesajları, uyarı banner'ları bu rengi kullanır. Genellikle kırmızı tonlarında tutulur.
- **`--border`**: Ayraçlar, kenar çizgileri, divider'lar.
- **`--input`**: Form elemanlarının kenarlık rengi.
- **`--ring`**: Bir elemana focus olduğunda beliren halka. Klavye navigasyonu ve erişilebilirlik açısından kritik.
- **`--radius`**: Tek bir değerden tüm bileşenlerin köşe yarıçapı türetilir. `0` versen keskin köşeler, `1rem` versen yuvarlak köşeler elde edersin.

Güncel shadcn kurulumları ek token kategorileri de içeriyor:

- **`--popover` / `--popover-foreground`**: Popover, dropdown ve tooltip bileşenlerinin arka planı. Genellikle `--card` ile aynı değerdedir.
- **`--chart-1` … `--chart-5`**: Chart component'larında kullanılan renk paleti. Her biri bir veri serisine karşılık gelir.
- **`--sidebar-*`**: Sidebar component'ı kullanıyorsan (`--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-accent`, vb.) bu token'lar sidebar'ın kendi renk sistemini yönetir; ana temadan bağımsız özelleştirilebilir.

---

## Rengi Değiştirmek

Kendi brand rengine göre tema oluşturmak için tek yapman gereken `:root` bloğundaki HSL değerlerini değiştirmek. Örneğin mor tonlarında bir brand rengi için:

```css
:root {
  /* Mor bir brand rengi */
  --primary: 262 83% 58%;
  --primary-foreground: 0 0% 100%;
}
```

Bu iki satır değişikliğiyle uygulamadaki tüm birincil butonlar, aktif durumlar ve öne çıkan elementler otomatik olarak mora döner. Başka hiçbir dosyaya dokunmana gerek yok.

**ui.shadcn.com/themes ile hazır tema seç**

shadcn/ui sitesinde bir tema önizleyici bulunuyor. Bu araç farklı renk paletlerini canlı önizlemeni sağlıyor. Beğendiğin temayı seçip "Copy code" butonuna tıkladığında sana tam `:root` ve `.dark` bloğunu kopyalıyor. Bu kodu `globals.css` dosyana yapıştırman yeterli; anında yeni temanı görürsün.

Özelleştirme yaparken dikkat etmen gereken tek şey kontrast. `--primary` değiştirdiğinde `--primary-foreground` üzerinde de yeterli kontrast olduğundan emin ol. Açık bir primary rengi seçtiysen foreground koyu olmalı, koyu bir primary seçtiysen foreground açık olmalı. WebAIM Contrast Checker gibi araçlarla kontrastı doğrulayabilirsin.

---

## Dark Mode Hazırlığı

`globals.css` içinde `:root` bloğunun hemen altında bir `.dark` bloğu göreceksin. Bu blok, aynı token'ların koyu tema için override edilmiş değerlerini içeriyor.

```css
.dark {
  --background: 224 71.4% 4.1%;   /* Koyu arka plan */
  --foreground: 210 20% 98%;       /* Açık metin */
  --primary: 210 20% 98%;          /* Dark modda primary açık renk olur */
  --primary-foreground: 220.9 39.3% 11%;
  /* Diğer token'lar da benzer şekilde override edilir */
}
```

Buradaki mantık şu: `html` ya da `body` elementine `.dark` class'ı eklendiğinde tüm token'lar `.dark` bloğundaki değerleri alır. Bileşenler her iki temayı da aynı class adlarıyla (`bg-primary`, `text-foreground` vb.) kullandığı için herhangi bir bileşen kodunu değiştirmeden tema geçişi gerçekleşir.

Dark mode geçişini tam olarak yönetmek — kullanıcı tercihini kaydetmek, sistem temasını takip etmek, toggle butonu eklemek — ilerleyen bölümlerde ayrıca ele alınacak. Şimdilik şunu bil: token sistemi sayesinde dark mode desteği neredeyse "bedava" geliyor. `.dark` bloğu zaten oluşturulmuş durumda.

---

## Tailwind ile Kullanmak

shadcn/ui token'larının Tailwind ile entegrasyonu `components.json` konfigürasyonu sırasında kurulur. `tailwind.cssVariables: true` ayarı aktifken `bg-primary`, `text-foreground`, `border-border` gibi semantic Tailwind class'ları kullanabilirsin.

```tsx
// ❌ Hardcoded renk — tema değiştiğinde güncellenmez
<button className="bg-blue-500 text-white">Kaydet</button>

// ✅ Semantic token — tema değiştiğinde otomatik güncellenir
<button className="bg-primary text-primary-foreground">Kaydet</button>
```

Semantic class'ların avantajları:

1. **Tema değişikliği**: `--primary` değiştiğinde `bg-primary` kullanan tüm elementler otomatik güncellenir.
2. **Dark mode**: `.dark` bloğu devreye girdiğinde `bg-background` otomatik koyu renge döner, sen hiçbir şey yapmazsın.
3. **Tutarlılık**: Sayfanın farklı yerlerinde aynı semantic'i taşıyan elementler her zaman aynı rengi gösterir.
4. **Okunabilir kod**: `bg-primary` ne anlama geldiğini hemen söyler; `bg-[#1e293b]` ise söylemez.

Tailwind'in kendi renk paleti olan `blue-500`, `red-600` gibi class'ları kullanmak tamamen geçerlidir — ihtiyaç duyduğun durumlarda kullan. Ama uygulamanın genel renk sistemine dahil olan her şey için semantic token class'larını tercih et. Kartların arka planı için `bg-card`, sayfa arka planı için `bg-background`, metin için `text-foreground`, kenarlıklar için `border-border` yaz. Bu alışkanlığı erken edinmek, ilerleyen aşamada hem dark mode hem de tema değiştirme özelliklerini çok kolay hale getirir.

Özetle: token sisteminin gücü, tasarım kararlarını tek bir yerden yönetmene izin vermesinde yatar. Bir kez doğru kurulduğunda uygulama genelinde renk tutarlılığı ve tema esnekliği bedavaya gelir.
