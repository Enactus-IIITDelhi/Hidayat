import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer"
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Resources from './pages/Resources';
import JoinUs from './pages/joinUs';
import Blog from './pages/Blog';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Mentorship from "./pages/Mentorship/index"
import About from "./pages/About/About"
import ScrollToTop from "./ScrollToTop"

function App() {

  return (
    <BrowserRouter basename="/">
              <ScrollToTop />

      <div className="App">
        <Navigation />

        <Routes >

          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='about/*' element={<About />} ></Route>
          <Route exact path='resources/*' element={<Resources />} ></Route>
          <Route exact path='mentorship/*' element={<Mentorship />} ></Route>
          <Route exact path='blog/*' element={<Blog />} ></Route>
          <Route exact path='joinUs/*' element={<JoinUs/>}></Route>
          <Route exact path='login' element={<Login/>}></Route>
          <Route exact path='signup' element={<SignUp/>}></Route>
        </Routes>
      <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
