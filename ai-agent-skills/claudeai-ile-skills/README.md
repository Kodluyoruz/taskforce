# Claude.ai ile Skills

Skills'in en hızlı denenebileceği yer Claude.ai. Terminal açmaya, API anahtarı üretmeye, beta header yazmaya gerek yok. Tarayıcı, hesap, bir zip dosyası — yeterli. Ama bu kolaylığın altında bilmen gereken kuralcılıklar var: özellik hangi planlarda açık, hangi ön şart kapatıldığında çalışmaz, yüklediğin skill ekibinin geri kalanına geçer mi, paket büyüklüğü hangi noktada elinden kayar. Bu derste Claude.ai'nın Skills tarafını uçtan uca açıyorum: erişim kuralları, pre-built skill'lerin sessiz çalışma şekli, custom skill yükleme adımları, paylaşım modeli, admin tarafındaki eksiklikler ve sahada en sık görülen sorunlar.

## Hangi planlarda var

Claude.ai'da Skills özelliği **Pro, Max, Team ve Enterprise** planlarına açık. Ücretsiz hesaplarda ne pre-built skill'leri ne de custom skill yükleme menüsünü göreceksin. Custom skill yükleyebilmen için bir ek koşul daha var: hesap ayarlarında `code execution` açık olmalı. Skills'in bash, Python script çalıştırma ve dosya üretme kabiliyetinin tamamı bu sandbox üstünde döner; kapalıyken yüklediğin skill yüklenir ama tetiklendiğinde sessiz kalır.

Plan ve `code execution` ikilisini önceden netleştir; aşağıdaki adımların hiçbiri bu iki şart sağlanmadan ilerlemez.

## Pre-built skills (otomatik aktif)

Anthropic'in hazır skill'leri arka planda zaten çalışır durumda. Kullanıcının yapması gereken hiçbir şey yok — ne aktifleştirme, ne ayar, ne menü. Şu an dört pre-built skill var:

- **PowerPoint** (`pptx`) — sunum oluşturma ve düzenleme
- **Excel** (`xlsx`) — formüllü tablo, çoklu sheet, biçimlendirme
- **Word** (`docx`) — uzun belge yazımı ve revizyon
- **PDF** (`pdf`) — okuma, form doldurma, birleştirme

"Şu üç çeyreğin satış verisinden çoklu sheet'li bir Excel hazırla" dediğinde Claude `xlsx` skill'ini, "Bu PDF'lerden tablo çek" dediğinde `pdf` skill'ini sessizce devreye sokar. Hangi skill'in tetiklendiğini chat akışında dosya üretim adımından ve `code execution` çıktısından görebilirsin. Pre-built skill'ler her sohbette mevcuttur; kullanıcının seçmesine gerek yoktur.

## Custom skill yükleme adımları

Kendi yazdığın bir skill'i Claude.ai'a tanıtmak dört adım:

1. **Hesabın menüsünden** `Settings` > `Features` > `Skills` bölümüne git.
2. **`Upload a skill`** butonuna tıkla.
3. Skill bundle'ını **zip** olarak yükle. Sınırlar: 50 MB sıkıştırılmış paket, 25 MB uncompressed boyut, paket içinde maksimum 500 dosya.
4. Validation geçtikten sonra skill listede aktif görünür. Yeni sohbette description'ı doğru tetikleyici bir prompt yazdığında devreye girer.

Doğru zip yapısı kritik: kök dizinde tek bir klasör olur, içinde `SKILL.md`. Bundle iskeleti aşağıdaki gibi düşünülebilir.

```
weekly-report.zip
└── weekly-report/
    ├── SKILL.md
    ├── REFERENCE.md
    └── scripts/
        └── fetch.py
```

Komut satırında zip üretirken zip aracını klasörün **bir üst dizinine** çık ve oradan paketle; aksi takdirde Claude.ai paketin içine yanlışlıkla bir extra katman görür ve validation hata verir.

```bash
cd weekly-report
zip -r ../weekly-report.zip .
```

## Bireysel kullanıcı paylaşım modeli

Claude.ai'daki en kritik tasarım kararı: **custom skill'ler kullanıcıya özeldir.** Bir takım üyesi `weekly-report` skill'ini yükledi diye diğer üyeler otomatik almaz; her biri kendi `Settings` > `Features` > `Skills` ekranından aynı zip'i tek tek yüklemek zorunda. Bu davranış Claude API'daki workspace-wide paylaşımdan tamamen farklıdır.

Bunun ikinci sonucu **cross-surface sync yokluğu**. Claude.ai'a yüklediğin skill Claude API'da görünmez, Claude API'da `/v1/skills` üzerinden yüklediğin skill claude.ai'da görünmez, Claude Code'daki filesystem klasörü ikisinden de bağımsızdır. Aynı `SKILL.md`'yi birden fazla yüzeyde çalıştırmak istiyorsan her birine ayrı yüklersin.

## Admin yönetimi (mevcut eksiklikler)

Team ve Enterprise planlarında bile **admin'ler skill'leri merkezi olarak yönetemiyor.** Bir sözleşme inceleme skill'ini hukuk ekibine tek tıkla dağıtmak, eski versiyonu force-update etmek, kim hangi skill'i yüklemiş listelemek — bunların hiçbiri Claude.ai'da şu an mevcut değil. Pratikte ekip yöneticileri bu boşluğu iki yöntemle dolduruyor:

- **Paylaşımlı zip:** Skill paketini bir cloud klasörde tutar, üyelere "indir ve yükle" talimatı verirler. Versiyon takibi tamamen manuel.
- **Claude API'ya kaymak:** Ekip ortak skill'leri Claude API tarafında workspace-wide kullanır; claude.ai'ı sadece bireysel sohbet için bırakırlar.

Anthropic admin tooling'inin yakında gelmesi bekleniyor; bugün için kabul edilmiş bir eksikliktir.

## Test akışı

Yüklediğin skill'in gerçekten tetiklendiğinden emin olmanın bir yolu var ve sadece tek bir yol var: **yeni bir sohbet aç, hedef tetikleyici cümleyi yaz, ne olduğunu izle.**

1. Skill'i `Settings`'ten yükle, "Active" işaretine bak.
2. Sohbet açıp description'ın net olarak vaad ettiği işten birini iste — "Geçen haftanın commit'lerinden weekly report üret" gibi.
3. Claude'un sohbetin üstündeki "using skill" bilgilendirmesini ve `code execution` adımını izle.
4. Çıktı doğru değilse `SKILL.md`'yi düzelt, zip'i yeniden üret, **eski paketi sil**, yenisini yükle. Aynı isimle güncelleme yapmaz; üzerine yazmak için silip yeniden yüklemen gerekir.

## Yaygın sorunlar

- **Skill tetiklenmiyor.** Sebep neredeyse her zaman zayıf description. Frontmatter'daki `description` hem ne yaptığını hem ne zaman kullanılacağını içermeli; Claude tetikleme kararını description'a bakarak veriyor.
- **"Code execution disabled" hatası.** Hesap ayarlarından `code execution` kapalı. `Settings` > `Capabilities` (ya da plan'a göre `Features`) üstünden aç.
- **Validation hatası — name.** `name` alanı sadece lowercase, sayı ve tire içerebilir; 64 karakteri geçemez.
- **Validation hatası — description.** 1024 karakteri aşan description reddedilir.
- **Zip içinde fazla katman.** Paket içinde `weekly-report/weekly-report/SKILL.md` gibi iki katlı bir yapı varsa Claude `SKILL.md`'yi bulamaz. Tek katmanlı tut.
- **50 MB sınırı.** Büyük PDF veya video varlıklarını skill içine koyma; resources klasörüne onun yerine link veya küçük örnek bırak.

## Network erişimi (settings'e göre değişir)

Claude.ai'da skill çalıştığında ağ erişimi otomatik açık değil. **Kullanıcı ve admin ayarlarına göre** üç farklı durum oluşabilir:

- **Full network:** Skill harici API'lere bağlanabilir, internet üzerinden dosya çekebilir.
- **Partial network:** Yalnızca beyaz listeye alınmış domain'lere izin verilir.
- **No network:** Skill sadece sandbox içinde dosya üretip okuyabilir; dış dünyaya çıkış yok.

Skill'in bir REST API'ye çağrı atıyorsa kullanıcının ayarına bakmadan "çalışır" diye varsayma. Yazarken `SKILL.md`'de bu beklentiyi açıkça söyle: "Bu skill `api.example.com` adresine network erişimi gerektirir."

## Sırada ne var?

Claude.ai Skills'in en cilalı tüketici yüzü — kolay erişim, sıfır setup, pre-built'in otomatikliği — ama aynı zamanda paylaşım ve yönetim açısından en kısıtlı yüz. Programatik kontrol istiyorsan, ekip için merkezi yönetim arıyorsan ve workspace genelinde aynı skill setini garanti altına almak istiyorsan rota Claude API'dan geçer — ki onu bir önceki derste işledik. Bir sonraki ders aynı `SKILL.md`'yi Anthropic dışındaki en büyük ekosistemde çalıştırmaya bakar: **OpenAI Responses API ile Skills.** `shell` tool'unun nasıl mount edildiği, `skill_reference` ile `inline` skill arasındaki farklar, hosted ve local shell ayrımı — hepsi sıradaki konuda.
