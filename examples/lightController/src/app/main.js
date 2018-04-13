import React from 'react'
import { AppRegistry } from 'react-native';
import { RootComponent } from './root-component'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider as PaperProvider } from 'react-native-paper';

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000"
});

AppRegistry.registerComponent('lightController', () => () => (
  <ApolloProvider client={client}>
    <PaperProvider>
      <RootComponent />
    </PaperProvider>
  </ApolloProvider>
));