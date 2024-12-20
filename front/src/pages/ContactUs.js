import React, { useState } from "react";
import { TextField, Container, Box, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import "../assets/style/ContactUs.css";
import contactus from '../assets/images/contactus.png';

import axios from "axios";

function ContactUs() {
  const url = "http://localhost:3010/api/feedback";
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    sentiment: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleEmojiClick = (sentiment) => {
    setData({ ...data, sentiment });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, data);
      alert(`Feedback submitted! Your sentiment: ${data.sentiment}`);
      setData({ name: "", email: "", message: "", sentiment: "" });
    } catch (error) {
      alert("Error submitting feedback.");
    }
  };

  return (
    <Container className="container">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          mt: 4,
        }}
      >
        {/* Left Side: Image */}
        <Box
          sx={{
            flex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={contactus}
            alt="Contact Us Illustration"
            style={{
              width: "80%",
              height: "auto",
              maxHeight: "500px", // Adjust this value for maximum height
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>

        {/* Right Side: Form */}
        <Box sx={{ flex: 1 }}>
          <h2 className="creation">
            If you have any questions or you would like to give us feedback,
            please don't hesitate!😊
          </h2>
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <TextField
              label="Enter your name"
              fullWidth
              name="name"
              onChange={handleChange}
              required
              margin="normal"
            />
            <label>Email</label>
            <TextField
              label="Email (Optional, for follow-up)"
              type="email"
              fullWidth
              name="email"
              onChange={handleChange}
              required
              margin="normal"
            />
            <label>Message</label>
            <TextField
              label="Please enter your message here"
              type="text"
              fullWidth
              name="message"
              onChange={handleChange}
              required
              multiline
              margin="normal"
            />
            <Typography variant="body1" sx={{ mt: 2 }}>
              How do you feel about your experience?
            </Typography>
            <Box
              sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 2 }}
            >
              <SentimentSatisfiedAltIcon
                sx={{
                  fontSize: "2rem",
                  cursor: "pointer",
                  color: data.sentiment === "Happy" ? "blue" : "gray",
                }}
                onClick={() => handleEmojiClick("Happy")}
              />
              <SentimentNeutralIcon
                sx={{
                  fontSize: "2rem",
                  cursor: "pointer",
                  color: data.sentiment === "Neutral" ? "blue" : "gray",
                }}
                onClick={() => handleEmojiClick("Neutral")}
              />
              <SentimentDissatisfiedIcon
                sx={{
                  fontSize: "2rem",
                  cursor: "pointer",
                  color: data.sentiment === "Sad" ? "blue" : "gray",
                }}
                onClick={() => handleEmojiClick("Sad")}
              />
            </Box>
            <button
              className="signup_button"
              style={{ marginTop: "20px" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactUs;
