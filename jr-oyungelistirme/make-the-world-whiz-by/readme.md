## Genel Bakış:

Bu oyunun temel mekaniğini çözdük: Oyuncu, gelen engellerin üzerinden atlamak için boşluk çubuğuna dokunabilir. Ancak, oynatıcı ilk birkaç saniye çalışıyor gibi görünüyor, ancak ardından arka plan kayboluyor! Bunu düzeltmek için, dünya hızla geçiyormuş gibi görünmesi için arka planı sorunsuz bir şekilde tekrarlamamız gerekiyor! Ayrıca, oyuncu bir engelle çarpıştığında, arka planın tekrar etmesini durdurarak ve engellerin ortaya çıkmasını durdurduğunda oyunun durmasına ihtiyacımız var. Son olarak, oyuncuyu geçen tüm engelleri yok etmeliyiz.

## Proje Sonucu:

Arka plan, engellerle aynı anda kusursuz bir şekilde hareket eder ve engeller oyun sınırlarından çıktıklarında ortadan kaybolur. Senaryo iletişiminin gücüyle, oyuncu bir engelle çarpıştığında arka plan ve spawn yöneticisi durur. Bir engelle çarpışmak aynı zamanda konsol günlüğünde bir game over mesajını tetikleyerek arka planı ve spawn yöneticisini durdurur.
