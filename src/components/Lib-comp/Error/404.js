import React from "react";
import "./error.css";



const Error = () => {

  
const BaseURL = "/firebase-app";

  // Firebase Custom Title
  document.title = "ERROR - 404";

  return (
    <>
      <div className="Errorbody">
      <a href="/firebase-app" target="/">
  <header class="top-header">
</header>

<div>
  <div class="starsec"></div>
  <div class="starthird"></div>
  <div class="starfourth"></div>
  <div class="starfifth"></div>
</div>


<div class="lamp__wrap" style={{overflow:"clip", height:"100vh"}}>
  <div class="lamp">
    <div class="cable"></div>
    <div class="cover"></div>
    <div class="in-cover">
      <div class="bulb"></div>
    </div>
    <div class="light"></div>
  </div>


  <section class="error">
  <div class="error__content">
    <div class="error__message message">
      <h1 class="message__title">Page Not Found</h1>
      <p class="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
    </div>
    <div class="error__nav e-nav">
      <a href={BaseURL} class="e-nav__link"> </a>
    </div>
  </div>

</section>
</div>




  </a>
      </div>
    </>
  );
}
export default Error