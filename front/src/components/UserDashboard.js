import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Box, Grid, Typography } from "@mui/material";
import RecipeCards from "./RecipeCards";
import TrendingNews from "./TrendingNews";

import HealthTips from "./HealthTips";
import SeasonalRecipes from "./SeasonalRecipes";
import { Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

function UserDashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1000,
          backgroundColor: "#f3d25a",
          borderColor: "none",
          color: "black",
        }}
      >
        Menu
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ width: "250px", backgroundColor: "#B2B377" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "#493628" }}>
            Food Magpie & Co
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  to="/user-profile"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "#f3d25a",
                    border: "none",
                    color: "#000",
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  User Profile
                </Link>
              </li>
              <br />

              <li>
                <Link
                  to="/"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "#f3d25a",
                    border: "none",
                    color: "#000",
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Home
                </Link>
              </li>

              <br />

              <li>
                <Link
                  to="/browse-recipes"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "#f3d25a",
                    border: "none",
                    color: "#000",
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Browse Recipes
                </Link>
              </li>

              <br />

              <li>
                <Link
                  to="/saved-recipes"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    backgroundColor: "#f3d25a",
                    border: "none",
                    color: "#000",
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Saved Recipes
                </Link>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>



      <h1
        style={{
          fontFamily: "Itim, serif",
          fontWeight: "400",
          fontStyle: "normal",
          marginTop: "15px",
        }}
      >
        Welcome
      </h1>
      <TrendingNews />
      <HealthTips />
      <SeasonalRecipes />
    </>
  );
}

export default UserDashboard;
