import React, { useState } from "react";
import Logo from "../assets/images/pasta.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../assets/style/NavigationBar.css"
import {useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function NavigationBar() {
  const navigate = useNavigate(); 

  const isLoggedIn = !!localStorage.getItem("token");
  
  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleSignOut = () => {
    if (window.confirm("Are you sure you want to SignOut")) {
      localStorage.removeItem("token"); 
      navigate("/"); 
    }
  };
  return (
    <div className="nav-bar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
        <p className="title">Food Magpie & Co</p>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact us">Contact us</Link>
      
        {isLoggedIn ? (
          <Nav.Link>
            <Button
              onClick={handleSignOut}
              style={{
                borderRight: "none",
                border: "3px solid grey",
                borderRadius: "10px",
                marginLeft: "190px",
                padding: "8px",
              }}
            >
              Sign Out
            </Button>
          </Nav.Link>
        ) : (
          <Nav.Link>
            <Button
              onClick={handleSignupClick}
              style={{
                borderRight: "none",
                border: "3px solid grey",
                borderRadius: "10px",
                marginLeft: "190px",
                padding: "8px",
              }}
            >
              SignUp/In
            </Button>
          </Nav.Link>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
