# Fikstür Oluşturucu

Java ile girilen takımlar için rastgele maç fikstürü oluşturan bir sınıf yazılmalı.

Kurallar :

- Çift Devreli Lig usülü uygulanacaktır. Her takım diğer takımlarla kendi evinde ve deplasmanda olmak üzere iki maç yapacaktır.
- Listenin sol tarafı ev sahibini sağ tarafı deplasman takımını gösterir.
- Eğer tek sayıda takım listesi girilirse, çift sayıya tamamlanacak şekilde "Bay" adında bir takım daha eklenmeli. Bay ile eşleşen takımlar o hafta maç
  yapmayacağı anlamına gelir.

## Takım sayısı çift senaryosu

```
Takımlar
- Galatasaray
- Bursaspor
- Fenerbahçe
- Beşiktaş
- Başakşehir
- Tranbzonspor

Round 1
Galatasaray vs Bursaspor
Fenerbahçe vs Başakşehir
Trabzonspor vs Beşiktaş

Round 2
Bursaspor vs Beşiktaş
Başakşehir vs Trabzonspor
Galatasaray vs Fenerbahçe

Round 3
Fenerbahçe vs Bursaspor
Trabzonspor vs Galatasaray
Beşiktaş vs Başakşehir

Round 4
Bursaspor vs Başakşehir
Galatasaray vs Beşiktaş
Fenerbahçe vs Trabzonspor

Round 5
Trabzonspor vs Bursaspor
Beşiktaş vs Fenerbahçe
Başakşehir vs Galatasaray

Round 6
Bursaspor vs Galatasaray
Başakşehir vs Fenerbahçe
Beşiktaş vs Trabzonspor

Round 7
Beşiktaş vs Bursaspor
Trabzonspor vs Başakşehir
Fenerbahçe vs Galatasaray

Round 8
Bursaspor vs Fenerbahçe
Galatasaray vs Trabzonspor
Başakşehir vs Beşiktaş

Round 9
Başakşehir vs Bursaspor
Beşiktaş vs Galatasaray
Trabzonspor vs Fenerbahçe

Round 10
Bursaspor vs Trabzonspor
Fenerbahçe vs Beşiktaş
Galatasaray vs Başakşehir
```

## Takım sayısı tek senaryosu

```
Takımlar
- Galatasaray
- Bursaspor
- Fenerbahçe
- Beşiktaş
- Başakşehir
- Bursaspor
- Boluspor

Round 1
Galatasaray vs Bay
Fenerbahçe vs Boluspor
Trabzonspor vs Bursaspor
Beşiktaş vs Başakşehir

Round 2
Bay vs Başakşehir
Bursaspor vs Beşiktaş
Boluspor vs Trabzonspor
Galatasaray vs Fenerbahçe

Round 3
Fenerbahçe vs Bay
Trabzonspor vs Galatasaray
Beşiktaş vs Boluspor
Başakşehir vs Bursaspor

Round 4
Bay vs Bursaspor
Boluspor vs Başakşehir
Galatasaray vs Beşiktaş
Fenerbahçe vs Trabzonspor

Round 5
Trabzonspor vs Bay
Beşiktaş vs Fenerbahçe
Başakşehir vs Galatasaray
Bursaspor vs Boluspor

Round 6
Bay vs Boluspor
Galatasaray vs Bursaspor
Fenerbahçe vs Başakşehir
Trabzonspor vs Beşiktaş

Round 7
Beşiktaş vs Bay
Başakşehir vs Trabzonspor
Bursaspor vs Fenerbahçe
Boluspor vs Galatasaray

Round 8
Bay vs Galatasaray
Boluspor vs Fenerbahçe
Bursaspor vs Trabzonspor
Başakşehir vs Beşiktaş

Round 9
Başakşehir vs Bay
Beşiktaş vs Bursaspor
Trabzonspor vs Boluspor
Fenerbahçe vs Galatasaray

Round 10
Bay vs Fenerbahçe
Galatasaray vs Trabzonspor
Boluspor vs Beşiktaş
Bursaspor vs Başakşehir

Round 11
Bursaspor vs Bay
Başakşehir vs Boluspor
Beşiktaş vs Galatasaray
Trabzonspor vs Fenerbahçe

Round 12
Bay vs Trabzonspor
Fenerbahçe vs Beşiktaş
Galatasaray vs Başakşehir
Boluspor vs Bursaspor

Round 13
Boluspor vs Bay
Bursaspor vs Galatasaray
Başakşehir vs Fenerbahçe
Beşiktaş vs Trabzonspor

Round 14
Bay vs Beşiktaş
Trabzonspor vs Başakşehir
Fenerbahçe vs Bursaspor
Galatasaray vs Boluspor
```
