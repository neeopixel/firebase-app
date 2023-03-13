import React from "react";
<<<<<<< HEAD
import "./landing.css";
=======
import styles from "./landing.module.css";
>>>>>>> b06ffe04f74c3e4d86b4a9e9eeffdce8d25043f5
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
