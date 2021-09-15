import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';


const cache = new InMemoryCache();


const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      buySomething: (_, variables) => {
        return null;
      },
      buyAnotherThing: (_, variables) => {
        return null;
      }
    },
  }
});


const client = new ApolloClient({
  link: stateLink,
  cache,
});


export default client;