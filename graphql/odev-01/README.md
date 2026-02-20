# Ödev 1

Kullanıcılar, etkinlikler, etkinliklerin yapılacağı konum ve etkinlik katılımcılarını size sağlanan veri seti üzerinden görüntüleyebilecek bir GraphQL sunucu oluşturmanız gerekiyor.

## Gereksinimler
- [ ] [Şuradaki](https://github.com/Kodluyoruz/taskforce/blob/main/graphql/odev-01/data.json) veri seti kullanılarak bir GraphQL sunucusu ayağa kaldırılmalıdır.
- [ ] Temel olarak `User`, `Event`, `Location` ve `Participant` tiplerini oluşturmalısınız. Bu tiplerle alakalı fieldları veri seti üzerinden görüntüleyebilirsiniz.
- [ ] Bir `User`'a ait bir veya birden fazla `Event` olabilir.
- [ ] Bir `Event`, bir  `User` ile ilişkili olmalıdır.
- [ ] Bir `Event`, bir `Location` ile ilişkili olmalıdır.
- [ ] Bir `Event` birden fazla `Participant` ile ilişkili olmalıdır.
- [ ] Tüm tipler üzerinde tümünü listeleme ve id bazlı bir kaydı getirme Query'leri yazılmalıdır.

Günün sonunda aşağıdaki Query'ler çalışır vaziyette olmalıdır.

```
  query users{}
  query user(id: 1){}

  query events{}
  query event(id: 1){}
  query events{
    id
    title
    user{
      id
      username
    }
    pariticipants{
      id
      username
    }
    location{
      id
      name
    }
  }

  query locations{}
  query location(id: 1){}

  query participants{}
  query participant(id: 1){}

```
