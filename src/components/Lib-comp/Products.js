import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles.css";

export default function Products() {
  // Firebase Custom Title
  // document.title = "HomePage";

  return (
    <>
      <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span class="bg-secondary pr-3">Recent Products</span>
        </h2>
        <div class="row px-xl-5">
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-1.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" to="/Product1">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-2.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
              <Link class="h6 text-decoration-none text-truncate" to="/Product2">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-3.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
              <Link class="h6 text-decoration-none text-truncate" to="/Product3">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star-half-alt text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-4.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
              <Link class="h6 text-decoration-none text-truncate" to="/Product4">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-5.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
              <Link class="h6 text-decoration-none text-truncate" to="/Product5">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-6.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
              <Link class="h6 text-decoration-none text-truncate" to="/Product6">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-7.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
              <Link class="h6 text-decoration-none text-truncate" to="/Product7">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star-half-alt text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
              <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/product-8.jpg" alt="" />
                <div class="product-action">
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="far fa-heart"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-sync-alt"></i>
                  </a>
                  <a class="btn btn-outline-dark btn-square" href="/">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="text-center py-4">
              <Link class="h6 text-decoration-none text-truncate" to="/Product8">
                  Product Name Goes Here
                </Link>
                <div class="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 class="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="fa fa-star text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small class="far fa-star text-primary mr-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
