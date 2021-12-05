# Apollo Client

[Apollo Client](https://www.apollographql.com/docs/react/), GraphQL backend'ler ile çalışırken client tarafında tercih edilebilecek en iyi kütüphanelerden birisidir. 

Apollo Client sadece React üzerinde değil diğer çoğu JavaScript ortamında çalışmak için de uyarlanmıştır. [Angular](https://apollo-angular.com/), [Vue](https://www.apollographql.com/docs/react/integrations/integrations/#vue), [Svelte](https://www.apollographql.com/docs/react/integrations/integrations/#svelte), [Ember](https://www.apollographql.com/docs/react/integrations/integrations/#ember) ve [Meteor](https://www.meteor.com/) ile de kullanabilirsiniz.

# Neden Apollo Client?
Özellikle React ortamınd state'i yönetmekte güçlük çekiyorsanız Apollo Client bu konuda sihirbaz gibi davranıyor. Örneğin bir Query çalıştırdığızda, dönen veriyi el ile ayrıca state'e yazmanıza gerek yok. Apollo Client bu işi otomatik olarak yapıyor. Remote ve Client side state'i çok rahat bir şekilde yönetebiliyorsunuz.

Apollo Client ile bir Query çalıştırmak oldukça kolaydır. `loading`,`error` ve `data` gibi Component bazlı state'ler oluşturmanıza da gerek yok.

```
function Feed() {
  const { loading, error, data } = useQuery(GET_DOGS);
  if (error) return <Error />;
  if (loading) return <Fetching />;

  return <DogList dogs={data.dogs} />;
}

```

Bu ve bunun gibi onlarca farklı modern konseptleri içinde barından Apollo Client'ı daha yakından incelemek için [tıklayın](https://www.apollographql.com/docs/react/).