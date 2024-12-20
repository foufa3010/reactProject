import React, { useState } from "react";
import axios from "axios"; // Make sure you have axios installed
import { useNavigate } from "react-router-dom";
import "../assets/style/signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const url = "http://localhost:3010/api/signup";
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    axios
      .post(url, user)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg);
        navigate("/signin");
      })
      .catch((error) => {
        alert(error.response?.data?.msg || "An error occurred!");
        console.log("There was an error!", error);
      });
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <div className="creation">
          Unlock a World of Flavor <br></br>with <br></br>Your Free Account!🥗✨
        </div>
        <div className="form-group">
          <label className="Label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="please enter your name"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="Label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="please enter your email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="Label">Password</label>
          <input
            type="password"
            className="input"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="Signup_button">
          Sign Up
        </button>
        <div>
          <p>
            Already have an account ?<Link to="/signin"> Sign in </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
