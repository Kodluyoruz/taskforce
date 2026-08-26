# Random Forest

Link: https://youtu.be/J4Wdy0Wc_xQ

## Toplu Öğrenme

Binlerce rastgele kişiye karmaşık bir soru sorduğunuzu ve ardından cevaplarını topladığınızı varsayalım. Çoğu durumda, bu toplu yanıtın bir uzmanın yanıtından daha iyi olduğunu göreceksiniz. Buna **kalabalığın bilgeliği** denir. Benzer şekilde, bir grup tahmin edicinin (sınıflandırıcılar veya regresörler gibi) tahminlerini toplarsanız,
genellikle en iyi bireysel tahminciden daha iyi tahminler alır. Bir grup tahmin ediciye **topluluk** denir; bu nedenle, bu tekniğe **toplu öğrenme**. <br>

Örneğin, bir grup Karar Ağacı sınıflandırıcısını, her birini eğitim setinin farklı bir rastgele alt kümesinde eğitebilirsiniz. Tahminlerde bulunmak için, tüm ağaçların tahminlerini elde edin, ardından en çok oyu alan sınıfı tahmin edin. Böyle bir Karar Ağaçları topluluğuna **Rastgele Orman (Random Forest)** denir ve basitliğine rağmen bu, günümüzde mevcut olan en güçlü Makine Öğrenimi algoritmalarından biridir. <br>

## Random Forest (Rastgele Orman)

Rastgele Orman, eğitim setinin rastgele kısımları ile eğitilmiş ve birbirinden farklı olan Karar Ağaçlarından oluşan bir topluluktur. Rastgele Ormanda bulunan Karar Ağaçlarının birbirinden farklı olması, verinin farklı kısımlarına farklı açılardan bakmaları istenir. Bunun sebebi, birbirinden farklı ağaçların kararlarından ortak bir karar alınması sağlanarak isabetin artırılmak istenmesidir. Bu yöntem sayesinde, en güçlü Makine Öğrenimi algoritmalarından biri olan **Rastgele Orman** doğmuştur.
