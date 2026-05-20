# Matrix Strategy: Birden Fazla Versiyonda Test

Bir kütüphane yazıyorsun ve hem Node 18 hem Node 20 hem de Node 22'yi desteklediğini iddia ediyorsun. Ama gerçekten hepsinde test çalıştırıyor musun? Matrix strategy tam bu iş için var. Tek bir job tanımı yazarsın, GitHub Actions geri kalan kombinasyonları senin için üretir.

## Matrix Strategy Nedir?

Matrix strategy, tek bir `job` tanımından birden fazla job üretmenin yolunu. `strategy.matrix` altında değişkenler tanımlarsın, her kombinasyon için ayrı bir job çalışır.

Ne işe yarar?

- **Kombinasyonel test:** Her kombinasyon ayrı bir job olarak çalışır. Node 18 başarılı olurken Node 22 hata veriyorsa ikisini de görürsün.
- **Paralel çalışır:** Tüm matrix job'ları aynı anda başlar. Sıralı çalıştırsan 3 kat daha uzun sürecek testi dakikalar içinde bitirirsin.
- **Tek tanım, çok çıktı:** Workflow dosyasını şişirmeden onlarca kombinasyonu kapsarsın.

GitHub Actions, `strategy.matrix` altında tanımladığın değişkenlere bakarak her kombinasyon için ayrı bir runner ayağa kaldırır. Bu runner'lar bağımsız ve paralel çalışır.

## Tek Değişkenli Matrix

En sade kullanım: tek bir dizi tanımlarsın, her eleman için bir job üretilir.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18, 20, 22]  # 3 eleman = 3 job üretilir

    steps:
      - uses: actions/checkout@v4

      - name: Node.js Kur
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}  # Her job kendi versiyonunu alır

      - name: Bağımlılıkları Yükle
        run: npm ci

      - name: Testleri Çalıştır
        run: npm test
```

Bu workflow çalıştığında 3 ayrı job üretilir: biri Node 18, biri Node 20, biri Node 22 ile. Hepsi aynı anda başlar, hepsi bağımsız çalışır. `${{ matrix.node-version }}` ifadesi, her job'da ilgili değeri otomatik olarak alır.

## Çok Değişkenli Matrix

Birden fazla değişken tanımladığında GitHub Actions her kombinasyonu hesaplar.

```yaml
strategy:
  matrix:
    node-version: [18, 20]         # 2 eleman
    os: [ubuntu-latest, windows-latest]  # 2 eleman
    # 2 × 2 = 4 kombinasyon → 4 job
```

4 job şunlar olur:
- Node 18 / ubuntu-latest
- Node 18 / windows-latest
- Node 20 / ubuntu-latest
- Node 20 / windows-latest

`runs-on` kısmında `matrix.os` kullanman gerekiyor, aksi halde hepsi aynı OS'ta çalışır:

```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}  # Her job kendi OS'unu alır

    strategy:
      matrix:
        node-version: [18, 20]
        os: [ubuntu-latest, windows-latest]

    steps:
      - uses: actions/checkout@v4

      - name: Node.js Kur
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}

      - run: npm ci
      - run: npm test
```

Job adlarında hangi kombinasyonun çalıştığını görmek için `name` alanına matrix değişkenlerini ekleyebilirsin:

```yaml
jobs:
  test:
    name: Node ${{ matrix.node-version }} / ${{ matrix.os }}  # Açıklayıcı job adı
    runs-on: ${{ matrix.os }}
```

## include ile Özel Kombinasyonlar Ekleme

Matrise mevcut olmayan bir kombinasyon eklemek ya da belirli kombinasyonlara ekstra özellik vermek istersen `include` kullanırsın.

```yaml
strategy:
  matrix:
    node-version: [18, 20]
    os: [ubuntu-latest, windows-latest]
    include:
      # Mevcut kombinasyona özellik ekle: Node 20 + ubuntu için experimental flag
      - node-version: 20
        os: ubuntu-latest
        experimental: true

      # Yeni bir kombinasyon ekle: matristeki 4 kombinasyona ek olarak bu da çalışır
      - node-version: 20
        os: macos-latest
        experimental: true
```

İlk `include` girdisi, `node-version: 20 / ubuntu-latest` kombinasyonuna `experimental: true` özelliği ekler. Bu değere workflow içinde `${{ matrix.experimental }}` ile erişebilirsin.

İkinci girdi ise matriste hiç olmayan bir kombinasyon. GitHub Actions bunu ayrı yeni bir job olarak üretir. Sonuç: 4 standart kombinasyon + 1 macOS job = toplam 5 job.

```yaml
    steps:
      - name: Deneysel Adımı Koşullu Çalıştır
        if: ${{ matrix.experimental == true }}  # Sadece experimental job'larda çalışır
        run: echo "Bu job deneysel olarak işaretlendi"
```

## exclude ile Kombinasyonları Atlama

Bazı kombinasyonların çalışmasını istemiyorsun. Örneğin Windows + Node 18 kombinasyonu seni ilgilendirmiyor. `exclude` ile o kombinasyonu matrisin dışında bırakırsın.

```yaml
strategy:
  matrix:
    node-version: [18, 20, 22]
    os: [ubuntu-latest, windows-latest]
    exclude:
      - os: windows-latest
        node-version: 18   # Windows + Node 18 kombinasyonunu atla
      - os: windows-latest
        node-version: 22   # Windows + Node 22 kombinasyonunu da atla
```

Olmadan: 3×2 = 6 job. Exclude ile: 6 - 2 = 4 job çalışır.

`exclude` girdisindeki tüm özellikler eşleşmeli. `os: windows-latest` yazarsan sadece bu OS'a sahip kombinasyonlar etkiler; yanlışlıkla başka kombinasyonları dışarıda bırakmazsın.

## fail-fast

Varsayılan davranış şu: matrix içindeki herhangi bir job hata verirse, GitHub Actions geri kalan tüm job'ları iptal eder. Bu `fail-fast: true` varsayılanından geliyor.

```yaml
strategy:
  fail-fast: true   # Varsayılan: bir job başarısız olunca diğerleri iptal edilir
  matrix:
    node-version: [18, 20, 22]
```

Bu davranışı değiştirmek çoğu zaman daha mantıklı. Özellikle hangi versiyonların hata verdiğini görmek istiyorsan:

```yaml
strategy:
  fail-fast: false   # Bir job başarısız olsa bile diğerleri çalışmaya devam eder
  matrix:
    node-version: [18, 20, 22]
    os: [ubuntu-latest, windows-latest]
```

`fail-fast: false` ile tüm job'ların tamamlanmasını beklersin. Node 18 hata verse bile Node 20 ve 22 çalışır. Hangi kombinasyonun sorunlu olduğunu net görürsün.

Ne zaman hangisini kullan?

- **`fail-fast: true`** (varsayılan): CI süresini kısa tutmak istiyorsan. İlk hata görününce erken çıkar.
- **`fail-fast: false`**: Tüm kombinasyonların sonucunu görmek istiyorsan. Kütüphane geliştirirken, sürüm uyumluluğu test ederken tercih et.

## max-parallel

Matrix job'ları varsayılan olarak elverdiği kadar paralel çalışır. Bunu sınırlamak istersen `max-parallel` kullanırsın.

```yaml
strategy:
  max-parallel: 2   # Aynı anda en fazla 2 job çalışsın, diğerleri sıraya girer
  matrix:
    node-version: [18, 20, 22]
    os: [ubuntu-latest, windows-latest]
```

6 kombinasyon var ama aynı anda sadece 2'si çalışır. Diğerleri önceki job'lar bitmeden başlamaz.

Ne zaman işe yarar? Dışarıdan bir servise bağlanıyorsan ve rate limit sorunuyla karşılaşıyorsan, ya da test ortamında kaynak kısıtlaması varsa `max-parallel` ile yükü kontrol edebilirsin.

## Tam Örnek

Tüm özellikleri bir arada kullanan, gerçekçi bir workflow:

```yaml
name: Node.js Matrix CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    name: Node ${{ matrix.node-version }} / ${{ matrix.os }}
    runs-on: ${{ matrix.os }}

    strategy:
      fail-fast: false          # Bir job hata verse diğerleri devam etsin
      matrix:
        node-version: [18, 20, 22]
        os: [ubuntu-latest, windows-latest]
        exclude:
          - os: windows-latest
            node-version: 18   # Windows + Node 18 kombinasyonunu atla

    steps:
      - name: Kodu İndir
        uses: actions/checkout@v4

      - name: Node.js ${{ matrix.node-version }} Kur
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'          # npm cache ile kurulum hızlanır

      - name: Bağımlılıkları Yükle
        run: npm ci

      - name: Testleri Çalıştır
        run: npm test
```

Hesap şu: 3×2 = 6 kombinasyon, eksi 1 exclude = **5 job** çalışır. Hepsi paralel başlar, `fail-fast: false` sayesinde biri hata verse diğerleri çalışmaya devam eder.

## Ne Zaman Matrix Kullanmalı?

Matrix her proje için şart değil. Doğru senaryoyu seçmek önemli.

**Kullan:**

- **Library veya SDK geliştiriyorsan:** Birden fazla Node/Python/Java versiyonunu desteklemek zorundaysan her versiyonu otomatik test et. Kullanıcıların hangi versiyonu kullandığını bilemezsin.
- **Cross-platform uygulama yazıyorsan:** Windows, macOS ve Linux davranışlarının farklılaştığı noktalarda matrix ile OS uyumluluğunu doğrula.
- **Framework veya araç üretiyorsan:** Bağımlı olduğun bileşenlerin birden fazla versiyonuyla uyumluluğunu sürekli kontrol et.

**Kullanma:**

- **Basit bir web uygulaması geliştiriyorsan:** Production'da tek bir Node LTS versiyonu çalışacaksa o versiyonu test etmek yeterli. Matrix ek yük getirir, gereksiz runner dakikaları harcar.
- **İç araç veya script yazıyorsan:** Kontrollü bir ortamda çalışan bir şeyse tek bir kombinasyon test et, matrise gerek yok.

Kural basit: kaç farklı ortamda çalışmasını garanti etmek istiyorsan o kadar kombinasyon test et. Gereksiz kombinasyonlar sadece CI süresini ve maliyetini artırır.
