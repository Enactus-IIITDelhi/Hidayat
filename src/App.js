import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='resources/*' element={<Resources />} ></Route>
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;
