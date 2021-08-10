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
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/home-page';
import LoginForm from './pages/login/login';
import SignupForm from './pages/signup/signup';
import Marketplace from './pages/marketplace/marketplace';
import ProfilePage from './pages/profilePage/profilePage';
import Detail from './pages/Detail/Detail';

import { StoreProvider } from './utils/globalState';





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
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/marketplace" component={Marketplace}/>
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/Profile" component={ProfilePage} />
                <Route exact path="/products/:id" component={Detail} />
                <Route exact path="/signup" component={SignupForm} />
              </Switch>
          </div>
        </Router>  
      </StoreProvider>
    </ApolloProvider> 
  );
}

export default App;
