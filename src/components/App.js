import React from 'react';
import { Router } from '@reach/router';
import NavBar from './NavBar';
import SearchParams from './SearchParams';
import Details from './Details';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Router>
          <SearchParams exact path="/" />
          <Details exact path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
