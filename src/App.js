import React from 'react';
import './App.css';

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

// Components
import Caracters from './caracters'


const client = new ApolloClient ({
  uri: 'https://graphql.org/swapi-graphql/' 
});

const App = () => (
    <ApolloProvider client={client} >
      <div>
        <Caracters/>
      </div>
    </ApolloProvider>
)

export default App;
