# Yanlılık ve Varyans

Link: https://youtu.be/EuBBz3bI-aA

## Aşırı Öğrenme

Yabancı bir ülkede bulunduğunu ve taksi sürücülerinin seni dolandırdığını düşün. **Tüm** taksi sürücülerinin hırsız olduğunu söyleyecek kadar sinirlenebilirsin. Bu durumda küçük bir taksi sürücüsü grubunun özelliklerini tüm taksi sürücülerine genellemiş ve **aşırı genelleme** yapmış olursun. Büyük ihtimalle, bu düşüncen yanlış olacaktır. Makine Öğrenmesinde bu duruma **aşırı öğrenme** denir: yani Makine Öğrenmesi modelinin eğitim setinde iyi performans göstermesi ancak iyi bir genelleme yapamaması anlamına gelir. <br>

Figür 1-22, yüksek-dereceden bir polinom fonksiyonu kullanan bir modelin eğitim verisini aşırı öğrenmesini göstermekte. Eğitim verisinde, basit bir modelden çok daha iyi performans gösterse de bu modelin tahminlerine güvenebillir misin?

Aşırı öğrenme, modelin eğitim verisinin miktarı ve gürültü miktarına göre çok karmaşık olduğu durumlarda ortaya çıkar. Olası çözümler şunlardır: <br>
- Daha basit bir model seçmek (örneğin, yüksek-dereceden polinom bir model yerine basit bir lineer model seçmek)
- Daha çok eğitim verisi elde etmek
- Eğitim setindeki gürültüyü azaltmak (örneğin, veri hatalarını düzeltmek ve aykırı değerleri ortadan kaldırmak)

## Yetersiz Öğrenme

Yetersiz öğrenme ise aşırı öğrenmenin tersidir: modelin, verinin yapısını öğrenmesi için çok basit olduğunda ortaya çıkar. <br>

Bu problemin olası çözümleri şunlardır:
- Daha güçlü, karmaşık bir model seçmek
- Modeli daha iyi özellikler ile beslemek
