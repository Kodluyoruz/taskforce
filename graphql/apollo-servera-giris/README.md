# Apollo Server

[Apollo Server](https://www.apollographql.com/docs/), hızlıca GraphQL sunucuları oluşturabileceğimiz, oldukça az bağımlılığı olan bir kütüphanedir.

## Yeni Proje Oluşturmak
Aşağıdaki komutları sırasıyla çalıştırarak yeni bir Apollo Server projesi oluşturmaya başlayabiliriz.

```
mkdir graphql-project
cd graphql-project
npm init -y
```

## Bağımlılıkları Yüklemek
Apollo Server ile çalışmaya başlamak için temelde iki adet kütüphaneye ihtiyacımız var.

- [apollo-server](https://npm.im/apollo-server)
- [graphql](https://npm.im/graphql)

Aşağıdaki komutu çalıştırarak bu bağımlılıkları yükleyebiliriz.
```
npm install apollo-server graphql
```

Proje kök dizinimizde `index.js` isimli bir dosya oluşturalım.
```
touch index.js
```

`index.js` içerisine aşağıdaki tanımları yapalım.
```
  const { ApolloServer, gql } = require('apollo-server');

  const typeDefs = gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
  `;

  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  const resolvers = {
    Query: {
      books: () => books,
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
```


## Sunucuyu Çalıştırmak
Artık sunucuyu çalıştırmaya hazırız! Aşağıdaki komut ile bunu yapalım.

```
node index.js
```

Bu komutu çalıştırdıktan sonra terminal ekranında aşağıdaki çıktıyı almalısınız.
```
🚀 Server ready at http://localhost:4000/
```

