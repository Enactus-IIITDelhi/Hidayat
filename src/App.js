import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/resources' component={Resources} ></Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
