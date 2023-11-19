import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing, incoming, { readField }) {
              const results = existing ? { ...existing.results } : {};
              incoming.results.forEach((result) => {
                results[readField('id', result)] = result;
              });
              return {
                ...incoming,
                results,
              };
            },

            read(existing) {
              if (existing) {
                return {
                  ...existing,
                  results: Object.values(existing.results),
                };
              }
            },
          },
        },
      },
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
