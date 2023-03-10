import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/pages/landing';
import Dashboard from './components/pages/Dashboard';
import Signin from './components/pages/signin.js';
import Signup from './components/pages/signup.js';
import Error404 from './components/Lib-comp/Error/404';


function App() {
  return (
    <div className="container">
      <BrowserRouter basename="/firebase-app">
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path ="/Dashboard" element={<Dashboard />}></Route>
          <Route exact path ="/Signin" element={<Signin />}></Route>
          <Route exact path ="/Signup" element={<Signup />}></Route>
          <Route  path ="/" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
