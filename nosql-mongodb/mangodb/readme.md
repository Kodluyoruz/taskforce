# MongoDB Cheat Sheet

## Tüm Veri Tabanını Göster

```
show dbs
```

## Mevcut Veri Tabanını Göster

```
db
```

## Veri Tabanı Oluştur veya Değiştir
```
use acme
```

## Mevcut Veri Tabanını Sil

```
db.dropDatabase()
```

## Yeni Tablo Oluştur

```
db.createCollection('posts')
```

## Veri Tabanındaki Tabloları Göster

```
show collections
```

## Veri Ekle

```
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

## Birden Fazla Veri Ekle

```
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

## Tüm Verileri Getir
```
db.posts.find()
```

## Tüm Verileri Düzenli Halde Getir

```
db.posts.find().pretty()
```

## Verileri Bul

```
db.posts.find({ category: 'News' })
```

## Verileri Sırala

```
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
```

## Verileri Say

```
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

## Verileri Sınırla

```
db.posts.find().limit(2).pretty()
```

## Chaining

```
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

## Foreach

```
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

## Bir Tane Veri Bul

```
db.posts.findOne({ category: 'News' })
```

## Belirli Alanları Bul

```
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```

## Satırları Güncelle

```
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

## Belirli Alanı Güncelle

```
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

## Alanı Arttırma (\$inc)

```
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

## Alanı Yeniden Adlandır

```
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

## Satırı Sil

```
db.posts.remove({ title: 'Post Four' })
```

## Alt Belgeler

```
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

## Dizideki Öğeye Göre Bul (\$elemMatch)

```
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

## Index Ekle

```
db.posts.createIndex({ title: 'text' })
```

## Metin Ara

```
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

## Büyük veya Küçük

```
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```
