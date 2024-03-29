'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: 'http://localhost:3300/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
