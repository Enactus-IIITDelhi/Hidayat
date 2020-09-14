import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path='/' component={Home} ></Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
