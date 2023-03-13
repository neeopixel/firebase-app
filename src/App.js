import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/pages/landing';
import Dashboard from './components/pages/Dashboard';
import Signin from './components/pages/signin.js';
import Signup from './components/pages/signup.js';
import Error from './components/Lib-comp/Error/404';
import Flex from './components/Lib-comp/FlexCard/Flex';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/firebase-app">
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route exact path ="/Dashboard" element={<Dashboard />}/>
          <Route exact path ="/Signin" element={<Signin />}/>
          <Route exact path ="/Signup" element={<Signup />}/>
          <Route exact path ="/Flex" element={<Flex />}/>
          <Route exact path ="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
