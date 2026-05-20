# İlk Workflow'unu Oluştur

Teoriyi geride bırakıp ilk gerçek workflow'unu yazma zamanı. Bu konunun sonunda `.github/workflows/` klasörünü oluşturacak, bir YAML dosyası yazacak, GitHub'a push'layacak ve Actions sekmesinden çalışma sonucunu izleyeceksin. Basit, ama her şeyin temeli bu.

## Ön Koşullar

Bu adımları takip edebilmek için ihtiyacın olan tek şey:

- Aktif bir GitHub hesabı
- Üzerinde çalışabileceğin bir GitHub reposu (yeni oluşturulmuş, boş bir repo da olur)

Yerel ortamında Git kurulu olması ve terminal kullanmayı biliyor olman yeterli. Başka bir araç, eklenti ya da hesap gerekmez — GitHub Actions, GitHub'ın içine gömülü gelir.

## Adım 1: .github/workflows/ Klasörünü Oluştur

GitHub Actions, workflow dosyalarını nerede arayacağını bilir: `.github/workflows/` klasörü. Bu klasör dışına koyduğun YAML dosyalarını GitHub tanımaz, workflow çalışmaz. Dolayısıyla yapıyı doğru kurmak kritik.

Reponda klasör yapısı şöyle görünmeli:

```
proje/
├── .github/
│   └── workflows/
│       └── ilk-workflow.yml
```

`.github/` klasörü gizli bir klasör (nokta ile başlıyor), ama bu sorun değil — Git onu takip eder, GitHub onu okur. `workflows/` içine istediğin kadar YAML dosyası ekleyebilirsin; her biri ayrı bir workflow tanımlar.

Klasörü terminalde şöyle oluşturabilirsin:

```bash
mkdir -p .github/workflows
```

Ya da kullandığın code editor üzerinden klasör oluşturabilirsin — her ikisi de aynı sonucu verir.

## Adım 2: Workflow Dosyasını Yaz

`.github/workflows/ilk-workflow.yml` dosyasını oluştur ve aşağıdaki içeriği yaz:

```yaml
# Workflow'un adı — GitHub arayüzündeki Actions sekmesinde bu isim görünür
name: İlk Workflow

# Bu workflow'u hangi event tetikler?
# "on: push" — main branch'e her push yapıldığında çalışır
on:
  push:
    branches:
      - main

# Workflow içindeki job'lar burada tanımlanır
jobs:
  # Job'un adı: "bilgi-ver" — istediğin bir isim verebilirsin
  bilgi-ver:
    # Bu job hangi işletim sisteminde çalışacak?
    # "ubuntu-latest" — GitHub'ın yönettiği en güncel Ubuntu runner
    runs-on: ubuntu-latest

    # Job içindeki adımlar (steps) sırayla çalışır
    steps:
      # Adım 1: Repo içeriğini runner'a kopyala
      # actions/checkout@v4 — GitHub'ın resmi action'ı, kodu çeker
      - name: Repoyu klonla
        uses: actions/checkout@v4

      # Adım 2: Birkaç bilgiyi terminale yazdır
      # github.actor   — workflow'u tetikleyen kullanıcı adı
      # github.event_name — tetikleyen event (push, pull_request vb.)
      # github.ref     — tetikleyen branch veya tag referansı
      - name: Ortam bilgisi göster
        run: |
          echo "Workflow'u tetikleyen: ${{ github.actor }}"
          echo "Event türü: ${{ github.event_name }}"
          echo "Branch: ${{ github.ref }}"
```

### Her Bloğun Görevi

**`name:`** — Workflow'a bir isim verir. GitHub'daki Actions sekmesinde listelenen isim bu olur. Birden fazla workflow dosyan olduğunda hangisinin hangisi olduğunu anlaman için anlamlı bir isim seç.

**`on:`** — Workflow'u tetikleyen event'i tanımlar. Burada `push` event'i kullanıldı ve `branches` altında `main` belirtildi. Bu, sadece `main` branch'e push yapıldığında bu workflow'un devreye gireceği anlamına gelir. `feature/` gibi başka branch'lere push yaparsan bu workflow çalışmaz.

**`jobs:`** — Bir workflow bir veya birden fazla job içerebilir. Her job bağımsız çalışır (varsayılan olarak paralel). Burada `bilgi-ver` adında tek bir job var.

**`runs-on: ubuntu-latest`** — Bu job'ın hangi runner üzerinde çalışacağını belirtir. `ubuntu-latest`, GitHub'ın sağladığı en güncel Ubuntu sanal makinesidir. `windows-latest` ve `macos-latest` de seçenekler arasında.

**`steps:`** — Job içindeki adımlar. Her step sırayla çalışır; bir step başarısız olursa sonrakiler çalışmaz (varsayılan davranış).

**`uses: actions/checkout@v4`** — GitHub Marketplace'ten hazır bir action kullanır. `actions/checkout`, reponun içeriğini runner'ın dosya sistemine kopyalar. Bunu yapmadan runner'da kaynak koduna erişemezsin. `@v4` kullandığın sürümü belirtir — her zaman sabit bir sürüm belirtmek en iyi pratik.

**`run: |`** — Shell komutu çalıştırır. Boru işareti (`|`) çok satırlı komut bloku yazmayı sağlar. `${{ github.actor }}` gibi ifadeler GitHub Actions'ın bağlam (context) değişkenleridir; GitHub bu değerleri workflow çalışırken otomatik doldurur.

## Adım 3: Workflow'u GitHub'a Push'la

Dosyayı oluşturduktan sonra sıra bunu GitHub'a göndermeye geliyor. Terminalde sırasıyla şu komutları çalıştır:

```bash
git add .github/workflows/ilk-workflow.yml
git commit -m "ci: ilk workflow eklendi"
git push origin main
```

`git add` komutuyla yeni dosyayı staging area'ya alıyorsun. `git commit` ile yerel bir commit oluşturuyorsun. `git push` ile bu commit'i GitHub'daki `main` branch'e gönderiyorsun.

Push tamamlandığı anda GitHub bu commit'i algılar, `.github/workflows/` klasöründeki YAML dosyasını okur ve tanımlanan event koşulu sağlandığı için — `main` branch'e push yapıldı — workflow'u otomatik olarak kuyruğa alır ve çalıştırır. Ayrıca bir şey yapman gerekmiyor.

### Push Sonrasında Ne Olur?

GitHub arka planda şunları yapar:

1. Commit'in hangi event'e yol açtığını saptar (`push`, `main` branch)
2. `.github/workflows/` içindeki tüm YAML dosyalarını tarar
3. `on:` bloğu bu event ile eşleşen workflow'ları bulur
4. Eşleşen her workflow için bir runner tahsis eder
5. Workflow'u çalıştırır; adım adım her step'i işler
6. Sonuçları Actions sekmesine yazar

Tüm bu süreç genellikle birkaç saniye ile birkaç dakika arasında tamamlanır — runner'ın müsaitliğine ve job'ın karmaşıklığına göre değişir.

## Adım 4: Sonuçları GitHub'da İzle

Workflow çalıştıktan sonra sonuçları görmek için GitHub reponun sayfasına git.

**Actions sekmesini aç:** Reponun üst menüsünde "Actions" sekmesini tıkla. Soldaki panelde kayıtlı workflow'larını görürsün — "İlk Workflow" burada listeleniyor olmalı.

**Çalışmayı seç:** "İlk Workflow" ismine tıkla. Sağ tarafta bu workflow'un geçmiş çalışmaları listelenir. En üstteki en son olanı — az önce push ettiğin commit tarafından tetiklenmiş olanı. Tıkla.

**Job ve step detaylarına bak:** Workflow çalışma ekranı açılır. Burada `bilgi-ver` job'unu görürsün. Job'a tıkla; içinde her step listelenir. Her step'in yanındaki ok işaretine tıkladığında o step'in tam log çıktısı açılır.

"Ortam bilgisi göster" step'ini açtığında şuna benzer bir çıktı görmen gerekiyor:

```
Workflow'u tetikleyen: kullanici-adin
Event türü: push
Branch: refs/heads/main
```

Bu üç satır, context değişkenlerinin gerçekte ne döndürdüğünü gösteriyor. Daha karmaşık workflow'larda bu değişkenleri koşullu çalışma kararları vermek, dosya adları oluşturmak ya da bildirim mesajları hazırlamak için kullanacaksın.

Her step'in solunda yeşil bir tik işareti varsa workflow başarıyla tamamlanmış demektir. Kırmızı bir X görüyorsan o step başarısız olmuş — log'a bakarak hatayı okuyabilirsin.

## Sık Yapılan Hatalar

### YAML girintisi yanlış

YAML, girintiye son derece duyarlı bir format. **2 boşluk (space) kullanmak zorundasın; sekme (tab) kesinlikle kabul edilmez.** Bir adımı yanlış seviyede girintilersen workflow parse edilemez ve Actions sekmesinde "Invalid workflow file" hatası görürsün.

```yaml
# YANLIŞ — tab kullanıldı veya tutarsız girintileme
jobs:
	bilgi-ver:        # ← tab karakter, hata verir
    runs-on: ubuntu-latest

# DOĞRU — her seviye 2 boşluk
jobs:
  bilgi-ver:
    runs-on: ubuntu-latest
```

Editörünü YAML dosyaları için "boşluğa dönüştür" moduna al. VS Code kullanıyorsan sağ alt köşeden sekme boyutunu ve "Spaces" seçeneğini kontrol edebilirsin.

### Dosya .github/workflows/ içinde değil

Workflow dosyasını `workflows/` içine koymak yerine `.github/` içine ya da reponun köküne koymak sık yapılan bir hata. GitHub sadece `.github/workflows/` yolunu dinliyor. Dosyanın tam yolunun `.github/workflows/ilk-workflow.yml` olduğundan emin ol.

### `on:` bloğu eksik veya yanlış event adı

`on:` bloğunu unutmak ya da yanlış yazmak (`On:`, `ON:`, `on: Push` gibi) workflow'un hiçbir zaman tetiklenmemesine yol açar. YAML'da key'ler büyük/küçük harfe duyarlıdır. Event adı da tam olarak `push`, `pull_request`, `workflow_dispatch` gibi küçük harfle ve eksiksiz yazılmalı.

### `runs-on:` yazmayı unutmak

Her job'da `runs-on:` zorunlu. Bunu yazmazsan GitHub workflow dosyasını geçersiz sayar ve çalıştırmayı reddeder. Job'larını her zaman bir runner ile eşleştir.

---

İlk workflow'un çalıştı. Şu an kullandığın yapı — event tanımla, job oluştur, step'leri sırala — daha karmaşık pipeline'ların da temelidir. Sonraki adımda bu yapının üzerine gerçek bir test ya da build adımı ekleyebilirsin.
