import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/landing/landing';
import Signin from './components/signin-signup/signin';
import Signup from './components/signin-signup/signup';
import Home from './Home.jsx'

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Landing' element={<Landing/>} />
            <Route path='/Signin' element={<Signin/>} />
            <Route path='/Signup' element={<Signup/>} />
         </Routes>
          </div>
            );
  }
}

export default App;



