# Modül 1: Agentic Coding (Ajan Tabanlı Kodlama)

Yazılım geliştirme dünyası, yapay zeka entegrasyonu ile birlikte baş döndürücü bir hızla değişiyor. Bu modülde, bu değişimin en son aşaması olan "Agentic Coding" kavramını, araçlarını ve çalışma prensiplerini inceleyeceğiz.

## 1. Agentic Coding Nedir?

**Agentic Coding**, yapay zeka modellerinin sadece kod tamamlayan pasif yardımcılar olmaktan çıkıp, karmaşık görevleri planlayan, araç kullanan (terminal, tarayıcı, dosya sistemi vb.) ve kendi hatalarını düzeltebilen "ajanlara" (agents) dönüştüğü bir yazılım geliştirme paradigmasıdır.

Geleneksel kodlamada geliştirici "yapan", AI "öneren" konumundayken; Agentic Coding'de AI "yapan", geliştirici ise "denetleyen" ve "yönlendiren" konumuna geçer.

### Temel Kavram: "Agency" (Eyleyicilik)

Bir AI modelinin "Agency"ye sahip olması, onun sadece bir soruya cevap vermekle kalmayıp, bir hedefe ulaşmak için çevreyle etkileşime girebilmesi, kararlar alabilmesi ve çok adımlı süreçleri yönetebilmesi anlamına gelir.

## 2. Copilot vs. Otonom Ajanlar

Yapay zeka asistanlarının evrimini anlamak için şu ayrımı yapmak önemlidir:

| Özellik              | Copilot (Yardımcı Pilot)           | Autonomous Agent (Otonom Ajan)                |
| :------------------- | :--------------------------------- | :-------------------------------------------- |
| **Rolü**             | Asistan / Tamamlayıcı              | Yürütücü / Mühendis                           |
| **Komut Tipi**       | "Bu fonksiyonu yaz."               | "Bu repodaki X hatasını bul ve düzelt."       |
| **İnsan Etkileşimi** | Her adımda insan onayı gerekir.    | İnsan sadece hedefi verir ve sonucu denetler. |
| **Bağlam**           | Genellikle sadece açık olan dosya. | Tüm proje, terminal çıktıları, dokümantasyon. |
| **Hata Yönetimi**    | Hatayı insan düzeltir.             | Hatayı görüp kendi kendine düzeltmeyi dener.  |

Bu geçiş, **"Human-in-the-loop"** (Döngüdeki İnsan - her adımda aktif) kavramından **"Human-on-the-loop"** (Döngü üzerindeki İnsan - denetleyici) kavramına doğru bir evrimdir.

## 3. Öne Çıkan Araçlar ve Platformlar

Bu alanda öne çıkan ve "AI-native" (Yapay zeka doğumlu) olarak adlandırılan bazı araçlar şunlardır:

### Cursor

VS Code tabanlı (fork) bir editör olan Cursor, şu an en popüler Agentic Coding aracıdır.

- **Composer:** Çoklu dosya düzenleme özelliği sayesinde, tek bir komutla projenin farklı yerlerindeki dosyaları aynı anda değiştirebilir.
- **Terminal Entegrasyonu:** Terminal komutlarını anlayabilir ve çalıştırabilir.

### Windsurf (Codeium)

Codeium ekibi tarafından geliştirilen Windsurf, "Flow" adı verilen bir sisteme sahiptir.

- **Derin Bağlam:** Geliştiricinin ne yaptığını derinlemesine anlar ve bir sonraki adımı öngörerek proaktif davranır.
- **Cascade:** Ajanın dosya sistemi ve terminal üzerindeki yeteneklerini birleştiren akış yapısı.

### GitHub Copilot Workspace

GitHub'ın vizyonu olan bu ortam, bir "Issue"dan (sorun kaydı) başlayıp, planlama, kodlama, test etme ve Pull Request oluşturma sürecinin tamamını yönetmeyi hedefler.

### Devin (Cognition Labs)

"İlk yapay zeka yazılım mühendisi" olarak lanse edilen Devin, tamamen otonom çalışabilen bir ajandır. Kendi tarayıcısını kullanarak dokümantasyon okuyabilir, terminalde komut çalıştırabilir ve kod yazabilir.

## 4. Çalışma Akışları (Workflow Patterns)

Ajan tabanlı kodlamada başarılı olmak için ajanların nasıl "düşündüğünü" anlamak gerekir. Tipik bir ajan döngüsü (Loop) şu şekildedir:

1.  **Planlama (Planning):** Kullanıcının verdiği karmaşık görevi (örn: "Login sayfasını React ile yeniden yaz") daha küçük, yönetilebilir alt adımlara böler.
2.  **Eylem (Acting):** Planın ilk adımını uygular. Bu bir dosya oluşturmak, bir kodu değiştirmek veya terminalde bir paket yüklemek olabilir.
3.  **Gözlem (Observing):** Eylemin sonucunu izler. Terminalde bir hata çıktı mı? Testler geçti mi?
4.  **Düzeltme (Correcting):** Eğer bir hata varsa, ajan bunu fark eder, planını günceller ve hatayı düzeltmek için yeni bir eylemde bulunur.
5.  **Reflection (Yansıtma):** Bazı gelişmiş ajanlar, işi bitirmeden önce kendi ürettiği kodu eleştirel bir gözle inceler ve iyileştirmeler yapar.

## Sonuç

Agentic Coding, yazılım geliştiricilerin üretkenliğini katlayarak artırma potansiyeline sahiptir. Ancak, ajanların bazen "halüsinasyon" görebileceği (olmayan kütüphaneleri uydurmak gibi) veya sonsuz döngülere girebileceği unutulmamalıdır. Bu nedenle, **insan denetimi** hala sürecin en kritik parçasıdır.

Bir sonraki modülde, bu ajanların dış dünya ile nasıl standart bir dilde konuştuğunu sağlayan **Model Context Protocol (MCP)** konusunu inceleyeceğiz.
