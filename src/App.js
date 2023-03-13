import React from 'react';
<<<<<<< HEAD
import "./App.css";
=======
import styles from "./App.module.css";
>>>>>>> b06ffe04f74c3e4d86b4a9e9eeffdce8d25043f5
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/pages/landing';
import Dashboard from './components/pages/Dashboard';
import Signin from './components/pages/signin.js';
import Signup from './components/pages/signup.js';
import Error from './components/Lib-comp/Error/404';
import Flex from './components/Lib-comp/FlexCard/Flex';


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
=======
    <div className="styles.app">
>>>>>>> b06ffe04f74c3e4d86b4a9e9eeffdce8d25043f5
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
