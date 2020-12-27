import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/resources' component={Resources} ></Route>
        </Switch>

      </div>
    </HashRouter>
  );
}

export default App;
