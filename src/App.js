import React from 'react';
import './App.css';

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

// component that works with axios/async/try&catch
// import GetDataFromAPI from './caracters'

import GraphQL from './caracters_graphql'

const client = new ApolloClient ({
  uri: 'https://swapi.co/api/people/' 
});

const App = () => (
    <ApolloProvider client={client} >
      <GraphQL/>
    </ApolloProvider>
  // <div>
  //   <GetDataFromAPI/>
  // </div>
)

export default App;
