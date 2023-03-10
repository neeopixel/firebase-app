import React from "react";
import '../styles.css'
import OfferImage1 from '../../images/img/offer-1.jpg';
import OfferImage2 from '../../images/img/offer-2.jpg';

export default function Offer() {





  // Firebase Custom Title
  // document.title = "HomePage";


  return (

    <>
     <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        <div className="col-md-6">
          <div className="product-offer mb-30">
            <img className="img-fluid" src={OfferImage1} alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="/firebase-app/Signin" className="btn btn-primary">Sign-In Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-offer mb-30">
            <img className="img-fluid" src={OfferImage2} alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="/firebase-app/Signup" className="btn btn-primary">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>);
}



