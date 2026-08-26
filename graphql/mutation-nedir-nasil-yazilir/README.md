# Mutation Nedir? Nasıl Yazılır?

Mutation tanımı, GraphQL sunucuları üzerinde veri ekleme,silme veya güncelleme durumlarında kullanılır.

Örnek bir Mutation tanımı;

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

    type Mutation {
      addBook(title: String, author: String): Book
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
    Mutation: {
      addBook: (_, args) => {
        const book = {
          title: args.title,
        };
        books.push(book);

        return book;
      },
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });

```

Yukarıdaki sunucu üzerinde tanımlanan Mutation, bir kitap ekler ve `Book` türünde veri döner.