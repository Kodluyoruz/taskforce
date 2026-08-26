# Apollo Client Subscriptions

Diyelim ki backend üzerinde Subscription yapınızı kurguladınız ve iş sadece bunu client tarafına entegre etmeye kaldı.

Hemen gerekli olan kütüphaneyi kuralım
> npm i subscriptions-transport-ws

Apollo Client aşağıdaki gibi yapabilirsiniz.
```
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/',
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
```

Artık Subscription Query'leri çalıştırmaya hazırız.

```
import { useSubscription } from '@apollo/client';

const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      content
    }
  }
`;

function LatestComment({ postID }) {
  const { data, loading } = useSubscription(
    COMMENTS_SUBSCRIPTION,
    { variables: { postID } }
  );

  return (
    <h4>
      New comment: {!loading && data.commentAdded.content}
    </h4>
  );
}
```

İşte bu kadar! Artık real-time çalışan eğlenceli oyunlar bile geliştirebilirsiniz.
