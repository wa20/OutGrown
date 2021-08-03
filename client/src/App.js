import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home/home-page';

import Nav from './components/navbar/navbar';
import LoginForm from './pages/login/login';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  <Home />
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav/>
        <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginForm} />
            </Switch>
        </div>
      </Router>
    </ApolloProvider> 
  );
}

export default App;
