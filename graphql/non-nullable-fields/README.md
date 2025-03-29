# Non-Nullable Fields
GraphQL resolver tanımlarınız üzerinde null dönmemesini istediğiniz bir field veya tip varsa bunun için bir tanım yapabilirsiniz.
Bu sayade ilgili backend'i kullanan client ilgili field'ın asla null gelmeyeceğine emin olur.

Non-nullable field tanımı yapmak için ünlem işaretine(!) ihtiyacınız var.

Örnek tanım;
```
type Location {
  address: String!
} 
``` 

Daha fazlası için [tıklayın](https://www.apollographql.com/blog/graphql/basics/using-nullability-in-graphql/).