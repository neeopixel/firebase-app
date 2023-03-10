import logo from "../images/logo.svg";
import "./Dashboard.css";
import Draggable from "react-draggable";
import React from "react";
import Header from './Lib-comp/NavBar/Header';


export const Dashboard = () => {


  

  // Firebase Custom Title
  document.title = "Dashboard";



  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <div className="Dragclass">
          <Draggable bounds="parent">
            <div className="Move">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Draggable>
        </div>
      </header>
    </div>
  );
}
export default Dashboard;