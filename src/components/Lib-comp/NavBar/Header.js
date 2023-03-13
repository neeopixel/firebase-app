import React from "react";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import "./Header.css";
=======
import styles from"./Header.module.css";
>>>>>>> b06ffe04f74c3e4d86b4a9e9eeffdce8d25043f5
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "./logo.svg";
import { Link } from "react-router-dom";



export default function Header() {





  // Firebase Custom Title
  // document.title = "HomePage";


  return (

    
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="styles.d-inline-block styles.align-top"
            />{" "}
            React Bootstrap
          </Link>
          </Navbar.Brand>
        </Container>
        <Container className="styles.justify-content-end">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/Dashboard">Dashboard</Link></Nav.Link>
            <Nav.Link ><Link to="/Signin">Sign In</Link></Nav.Link>
            <Nav.Link ><Link to="/Signup">Sign Up</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}



