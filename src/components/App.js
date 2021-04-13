import React, { useState } from 'react';
import { Router } from '@reach/router';
import NavBar from './NavBar';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
import './App.css';

const App = () => {
  const themeHook = useState('peru');
  return (
    <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams exact path="/" />
            <Details exact path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
