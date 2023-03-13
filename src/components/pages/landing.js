import React from "react";
import "./landing.css";
import Header from '../Lib-comp/NavBar/Header';
import Offer from "../../components/Lib-comp/Offer";
import Products from "../Lib-comp/Products";

function Landing() {
  // Firebase Custom Title
  document.title = "HomePage";

  return (
    <div className="styles.App-Landing">
      <Header />
      <Offer />
      <Products/>
    </div>
  );
}

export default Landing;
