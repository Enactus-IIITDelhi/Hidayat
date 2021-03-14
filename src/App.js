import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';
import JoinUs from './pages/joinUs';
import Blog from './pages/Blog';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navigation />

        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='resources/*' element={<Resources />} ></Route>
          <Route path='blog/*' element={<Blog />} ></Route>
          <Route path='joinUs/*' element={<JoinUs/>}></Route>
          <Route path='joinUs/*' element={<JoinUs/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;
