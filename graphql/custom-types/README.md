# Custom Types
Bir field sadece scalar(Int,Float,String,Boolean,ID) tipte veri dönmek zorunda değil. Kendimizde bir tip oluşturup bunu bir field üzerinde kullanabiliriz.

Örnek şema tanım;
```
type User {
  id: ID!
  fullName: String!
  posts: [Post!]!
}

type Post{
  id: ID!
  title: String!
}
```

Yukarıdaki User tipi üzerindeki `posts` field'ı `Post` tipinde bir array döner.

[Daha fazlası](https://graphql.org/learn/schema/)