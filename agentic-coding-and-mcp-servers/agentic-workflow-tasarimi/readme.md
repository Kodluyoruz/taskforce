# Agentic Workflow Tasarımı: Ajanlar Nasıl Düşünür?

Bir yapay zeka ajanından en iyi verimi almak için, ona sadece "ne yapacağını" değil, "nasıl düşüneceğini" de öğretmek gerekir. Bu sürece **Agentic Workflow (Ajan İş Akışı) Tasarımı** denir.

## 1. Tek Adımlı vs. Çok Adımlı Görevler

- **Zero-Shot (Tek Adım):** "Bana bir şiir yaz." -> Ajan yazar ve biter.
- **Agentic Loop (Ajan Döngüsü):** "Bu web sitesini klonla." -> Ajanın siteyi analiz etmesi, plan yapması, dosyaları oluşturması, test etmesi ve hataları düzeltmesi gerekir.

## 2. Etkili Bir İş Akışı Tasarlamak

Başarılı bir ajan iş akışı genellikle şu aşamalardan oluşur:

### A. Bağlam Hazırlığı (Context Setting)

Ajana kim olduğunu ve hangi kaynaklara sahip olduğunu tanıtın.

> "Sen kıdemli bir React geliştiricisisin. Elinin altında dosya sistemi ve terminal araçları var."

### B. Hedef Tanımlama (Goal Definition)

Başarı kriterlerini net bir şekilde belirtin.

> "Hedefin, `src/components` klasöründeki tüm bileşenleri TypeScript'e çevirmek ve testlerin hatasız geçmesini sağlamak."

### C. Planlama (Planning)

Ajandan hemen kod yazmaya başlamasını değil, önce bir plan yapmasını isteyin.

> "Kod yazmaya başlamadan önce, yapacağın değişiklikleri adım adım listele."

### D. Yürütme ve Geri Bildirim (Execution & Feedback)

Ajanın her adımda geri bildirim almasını sağlayın.

- **Kendi Kendine Düzeltme:** Ajan bir komut çalıştırdığında hata alıyorsa, bu hatayı okuyup yeni bir komut denemelidir.
- **İnsan Onayı:** Kritik aşamalarda (örn. veritabanı silme) insan onayı isteyecek şekilde tasarlayın.

## 3. Yaygın Tasarım Desenleri (Patterns)

### Reflection (Yansıtma)

Ajanın kendi çıktısını eleştirmesini sağlayın.

- _Örnek:_ "Kodu yazdın, şimdi bu kodu güvenlik açıkları açısından incele ve bulgularına göre düzelt."

### Tool Use (Araç Kullanımı)

Ajanı, bilmediği konularda halüsinasyon görmek yerine araç kullanmaya teşvik edin.

- _Örnek:_ "Bir kütüphanenin versiyonundan emin değilsen, tahmin etme; terminalden `npm list` komutunu çalıştırıp kontrol et."

### Chain of Thought (Düşünce Zinciri)

Ajanın mantık yürütme sürecini adım adım açıklamasını isteyin. Bu, hataları tespit etmeyi kolaylaştırır.

## Sonuç

İyi tasarlanmış bir iş akışı, ortalama bir AI modelini bile uzman bir mühendise dönüştürebilir. Önemli olan, ajanı başıboş bırakmak değil, ona yapılandırılmış bir düşünme ve çalışma çerçevesi sunmaktır.
