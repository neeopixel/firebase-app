import React from 'react';
import Header from '../Lib-comp/NavBar/Header';
import "./signin-signup.module.css";




function Signin() {

  

  // Firebase Custom Title
  document.title = "Sign-In";



  return (
    <div>
      <Header/>
      Signin
    </div>
  )
}

export default Signin