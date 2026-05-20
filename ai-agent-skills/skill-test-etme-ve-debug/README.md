# Skill Test Etme ve Debug

Bir skill yazdın, klasör hazır, SKILL.md keskin, script'ler de yerinde. Ama "çalışıyor" demek için tek bir prompt'la mutlu olmak yetmez. Skill'in gerçek dünyada çalıştığını söyleyebilmek için üç soruya cevap vermen gerek: doğru anda **tetikleniyor mu?**, tetiklendiğinde **doğru adımları mı izliyor?**, çıktısı **beklediğin formatta mı**? Bu üç sorunun her birinin kendi debug aracı, kendi izolasyon tekniği ve kendi tipik hata kalıpları var. Bu derste skill geliştirmenin en az romantik ama en getirili kısmına bakıyoruz: yazılmış bir skill'i lokal olarak test etmek, akışını izlemek, neden tetiklenmediğini ya da yanlış zamanda tetiklendiğini anlamak ve production'a almadan önce güven kazanmak.

## Local test: Claude Code ile en hızlı döngü

Skill'in çalıştığını görmenin en kestirme yolu Claude Code'da denemektir. İki yerleştirme noktan var: kişisel skill'ler için `~/.claude/skills/<skill-name>/`, proje skill'leri için repo'nun içindeki `.claude/skills/<skill-name>/`. Klasörü kopyaladıktan sonra `claude` komutuyla yeni bir oturum açtığında skill metadata otomatik yüklenir.

Lokal döngünün değeri hızında. Description'ı değiştirip kaydet, Claude Code'u yeniden başlat, aynı prompt'u dene — saniyeler içinde "yeni description daha iyi tetikliyor mu?" sorusunun cevabını alırsın. Bu döngü kısalmadığında insanlar test etmeyi bırakır; lokal kurulumun ilk işi bu sürtünmeyi sıfıra yakın tutmaktır.

Tipik bir akış şöyle görünür:

```bash
# 1. Skill'i lokale yerleştir
cp -r ./csv-summary ~/.claude/skills/

# 2. Test fixture hazırla
printf "name,age\nAli,30\nVeli,25\n" > /tmp/test.csv

# 3. Claude Code'da skill'i tetiklemeye çalış
claude
> Bu dosyayı özetle: /tmp/test.csv

# 4. Verbose modla akışı izle
claude --verbose
> Şu CSV'yi özetle: /tmp/test.csv
```

## Trigger doğrulama

Skill yazımının en sinsi hatası şudur: skill kusursuz çalışıyor ama agent onu hiç çağırmıyor. Trigger doğrulaması bu yüzden ilk test adımı olmalı.

Prompt setini iki gruba böl:

- **Pozitif prompt'lar.** Skill'in tetiklenmesi gereken senaryolar. Açıkça anahtar kelimeyi içeren ("şu CSV'yi özetle"), ima eden ("bu tablodan ne çıkar?"), dolaylı atıfta bulunan ("verideki desenler neler?") varyantlar.
- **Negatif prompt'lar.** Skill'in tetiklenmemesi gereken senaryolar. "Bir Python fonksiyonu yaz", "git nedir?", "yarınki hava" gibi alan dışı istekler.

Her grubu Claude Code'da sırayla çalıştır. Pozitiflerde skill çağrılmıyorsa description ya çok belirsiz ya çok dar — keyword ekle, "Use when…" cümlesini netleştir. Negatiflerde çağrılıyorsa description çok geniş — sınır cümleleri ekle, hedef alanı daralt.

## Log ve trace ile akışı izleme

Tetiklendiği görüldükten sonraki soru: skill içinde ne oluyor? Claude Code'un `--verbose` flag'i tool çağrılarını, dosya okumalarını ve modelin attığı adımları satır satır gösterir. Hangi referans dosyasının açıldığı, hangi script'in çalıştığı, hangi argümanlarla çağrıldığı buradan okunur.

OpenAI Responses API tarafında benzer görünürlük `response.output` üzerinden gelir. Her tool çağrısı output listesinde ayrı bir item olarak yer alır; iteration ile dolaşıp tipini, adını ve argümanlarını yazdırdığında skill'in adım haritasını çıkarmış olursun. Ek olarak `response.usage` token tüketimini verir — beklediğinden büyük bir sayı görüyorsan ya bir referans dosyası gereksiz yere yüklendi ya da progressive disclosure çalışmadı.

```python
response = client.responses.create(
    model="gpt-5.5",
    tools=[{"type": "shell", "environment": {"skills": [...]}}],
    input="Bu CSV'yi özetle: /tmp/test.csv",
)

for item in response.output:
    print(item.type, getattr(item, "name", ""), getattr(item, "arguments", ""))

print("tokens:", response.usage)
```

## Script'leri izole test etme

Skill içindeki Python script'leri Claude Code akışı dışında, doğrudan terminalden çalıştırılabilir. Bu izolasyon değerlidir çünkü "model script'i yanlış argümanla çağırdı" ile "script kendi başına bozuk" sorunlarını birbirinden ayırır. Çalıştırma şöyle olur:

```bash
python ~/.claude/skills/csv-summary/scripts/summarize.py /tmp/test.csv
```

Script tek başına hatasız çalışıyorsa sorun model tarafında: yanlış argüman, yanlış sıralama, eksik bağımlılık beklentisi. Tek başına da hatalıysa script'i edge case'lerle dolu küçük bir test set'iyle önce sağlam hale getir, sonra skill akışına dön.

## A/B description testi

Description ilk seferde nadiren doğru çıkar. İki varyantı yan yana dene:

- Varyant A: "Summarize CSV files."
- Varyant B: "Summarize CSV files, compute basic statistics, detect outliers. Use when the user mentions CSV, tabular data, or wants a quick data overview."

Her ikisini ayrı klasörlere koy, aynı 8-10 prompt setini iki kuruluma da uygula, tetiklenme oranlarını karşılaştır. B'nin daha iyi tetiklediğini gözleyince hipotezini kaydet ("trigger keyword'leri eklemek hit rate'i artırdı") ve sıradaki varyantı dene. Bu döngü skill yazımının iteration'unu disiplinli hale getirir.

## Yaygın sorunlar ve debug çözümleri

Pratikte tekrar tekrar gördüğün dört kalıp:

- **Skill tetiklenmiyor.** Description belirsiz ya da dar. Kullanıcı prompt'undaki gerçek kelimeleri description'a literal olarak yerleştir; "Use when…" listesini genişlet.
- **Yanlış zamanda tetikleniyor.** Description çok geniş. Spesifik trigger kelimeleri ekle, ilgisiz alanları "For X, use the Y skill instead" cümlesiyle dışla.
- **Script çalışmıyor.** Bağımlılık eksik, path yanlış, dosya izni yok. İzole çalıştırmayla doğrula; SKILL.md'in başına gereken paket listesini ekle.
- **Çıktı hatalı.** Script edge case'i kapsamıyor — boş dosya, tek satır, Unicode başlık, virgül içeren değer. Küçük bir fixture klasörü oluştur ve her değişiklikten önce bu fixture'larla script'i çalıştır.

Her sorun için tek soru sor: "bu hatayı tekrar gördüğümde hangi log'a bakacağım?" Cevabı yoksa o akışa bir log satırı ekle.

## CI test: production'a hazırlanma

Bir skill ekip içinde paylaşıldığında lokal güven yetmez. Skill repo'da git ile versiyonlanır, değişiklikler PR ile gelir, otomatik bir test runner skill'i indirir ve sample prompt'ları çalıştırır. Runner şunları doğrular: SKILL.md geçerli YAML mı, description boyutu sınırın altında mı, script'ler syntax hatasız mı, pozitif prompt setinde skill tetikleniyor mu, negatif prompt setinde tetiklenmiyor mu.

Bu adım skill yaşam döngüsünü "lone developer projesi" olmaktan çıkarıp ekip mühendisliğine dönüştürür. Description değişikliğinin yanlışlıkla bir tetikleyiciyi kırdığını fark eden test runner, bug'ı kullanıcı görmeden yakalar.

## Production observability'ye bakış

Lokal test ve CI doğru başlangıç noktasıdır ama skill bir kez ekibe yayıldığında soru değişir: gerçek kullanımda nasıl davranıyor? Trigger hit rate (kaç prompt'ta tetiklendi?), error rate (script'ler ne sıklıkla patladı?), latency (akış kullanıcıya ne kadar yavaşladı?) — bunlar production metrikleridir ve dry-run testlerle yakalanamaz.

## Sırada: yaygın hatalar ve anti-patterns

Test ve debug akışını kurduğunda gözün açılır: aynı hataların farklı skill'lerde tekrar tekrar çıktığını fark edersin. Description şişirme, monolit SKILL.md, script'lerle dolu klasör, "her şeyi yapan" tek skill — bunlar tek tek görüldüğünde küçük problem gibi ama bir araya geldiğinde skill ekosistemini çürütür. Bir sonraki ders bu tekrar eden hataları, neden ortaya çıktıklarını ve nasıl kaçınılacağını ele alıyor.
