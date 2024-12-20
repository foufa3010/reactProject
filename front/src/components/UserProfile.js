import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/style/Profile.css";
import { jwtDecode } from "jwt-decode"; 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function UserProfile() {
  
  const url = "http://localhost:3010/api/profile";

  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const [userUpdate, setUpdate] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const headers = {
            Authorization: `Bearer ${token}`,
          };
          const res = await axios.get(url, { headers });
          setUser(res.data); 
        } catch (error) {
          console.error("Error fetching user data:", error);
          setError("Failed to fetch user data");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUpdate({ ...userUpdate, [e.target.id]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        name: userUpdate.name || user.name, 
        email: userUpdate.email || user.email, 
      };
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.put(url, updatedUser, { headers }); 
      setUser(updatedUser); // Update local state with new user data
      handleClose();
    } catch (error) {
      console.log(error);
      setError("Failed to update user data");
    }
  };

  return (
    <>
      <div className="profile-container">
        <h3 className="welcome-back">Welcome Back <span role="img" aria-label="wave">👋</span> </h3>
        {error && <div className="error">{error}</div>}
        <Card className="profile-card">
          <Card.Body className="d-flex flex-column align-items-center">
            <img
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" 
              alt="Profile Avatar"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div className="user-detail">
              <h5>Name:</h5>
              <Card.Text>{user.name}</Card.Text>
            </div>
            <div className="user-detail">
              <h5>Email:</h5>
              <Card.Text>{user.email}</Card.Text>
            </div>
            <div className="update-button">
              <Button variant="success" onClick={handleShow}>
                Update
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={userUpdate.name || user.name}
                onChange={handleChange}
                id="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={userUpdate.email || user.email}
                onChange={handleChange}
                id="email"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserProfile;
