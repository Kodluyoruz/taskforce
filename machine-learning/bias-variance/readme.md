# Yanlılık ve Varyans

Link: https://youtu.be/EuBBz3bI-aA

## Aşırı Öğrenme

Yabancı bir ülkede bulunduğunu ve taksi sürücülerinin seni dolandırdığını düşün. **Tüm** taksi sürücülerinin hırsız olduğunu söyleyecek kadar sinirlenebilirsin. Bu durumda küçük bir taksi sürücüsü grubunun özelliklerini tüm taksi sürücülerine genellemiş ve **aşırı genelleme** yapmış olursun. Büyük ihtimalle, bu düşüncen yanlış olacaktır. Ya da bir sınava çalışırken önceki sınavlarda çıkmış olan soruları ve cevaplarını ezberlediğini düşün. Soruları sadece ezberlediğin için ve soruları çözme mantığını anlamadığın için daha önce görmediğin soruları çözmekte zorlanırsın. Yani gördüğün verilerdeki mantığı ve yapıyı anlayamadığından önceden görmediğin verilerde iyi performans sergileyemezsin. Makine Öğrenmesinde bu duruma **aşırı öğrenme** denir: yani Makine Öğrenmesi modelinin eğitim setinde iyi performans göstermesi ancak iyi bir genelleme yapamaması anlamına gelir. <br>

Şekil 1-22, yüksek-dereceden bir polinom fonksiyonu kullanan bir modelin eğitim verisini aşırı öğrenmesini göstermekte. Eğitim verisinde, basit bir modelden çok daha iyi performans gösterse de bu modelin tahminlerine güvenebillir misin? <br>

Aşırı öğrenme, modelin eğitim verisinin miktarı ve gürültü miktarına göre çok karmaşık olduğu durumlarda ortaya çıkar. Olası çözümler şunlardır: <br>
- Daha basit bir model seçmek (örneğin, yüksek-dereceden polinom bir model yerine basit bir lineer model seçmek)
- Daha çok eğitim verisi elde etmek
- Eğitim setindeki gürültüyü azaltmak (örneğin, veri hatalarını düzeltmek ve aykırı değerleri ortadan kaldırmak)

## Yetersiz Öğrenme

Bir sınava çok az çalıştığını ve soruları çözme mantığını kavrayamadığını düşün. İşte bu durumda da **yetersiz öğrenme** yapmış olursun. Yani soruları çözmeyi yeterince öğrenmediğinden dolayı hem önceden gördüğün sorularda hem de daha önce görmediğin sorularda iyi performans sergileyemezsin. <br>

Aslında yetersiz öğrenme, aşırı öğrenmenin tersidir: modelin, verinin yapısını öğrenmesi için çok basit olduğunda ortaya çıkar. <br>

Bu problemin olası çözümleri şunlardır:
- Daha güçlü, karmaşık bir model seçmek
- Modeli daha iyi özellikler ile beslemek
