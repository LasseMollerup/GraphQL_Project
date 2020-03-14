import React from 'react';
import './App.css';

// import { ApolloProvider } from 'react-apollo'
// import ApolloClient from 'apollo-boost'

import GetDataFromAPI from './caracters'

// const client = new ApolloClient ({
//   uri: 'https://swapi.co/api' 
// });

const App = () => (
    // <ApolloProvider client={client} >
    //   <Caracters/>
    // </ApolloProvider>
  <div>
    <GetDataFromAPI/>
  </div>
)

export default App;
