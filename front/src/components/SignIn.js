import React, { useState } from 'react';
import { Container, Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/style/signin.css';
function SignIn() {
  const url='http://localhost:3010/api/signin';
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit =(e)=>{
    e.preventDefault();
    axios
    .post(url,user)
    .then((response)=>{
      console.log(response.data);
      const token=response.data.token;
      localStorage.setItem("token", token);
      if(response.data.user.role=== 'user'){ 
        alert('Login successful!');
        navigate('/userdashboard');}
      else{alert('you are an admin');
        navigate('/admin');
      }

      /*alert('Login successful!');
      navigate('/userdashboard');*/
    })
    .catch((error)=>{
      console.log("there was an error!", error);
      alert('Login failed. Please check your credentials and try again.');
    })
  }

  return (
    <Container className="signin_container" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, marginBottom: '30px' }}>
        <h2 className="signin" variant="h5" sx={{ mb: 2 }}>Sign In & Let’s Cook!<br></br> 🥄 
        🔪🕒🍳🥗🥤</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <label>Email</label>
          <TextField
            label="Enter your email"
            type="email"
            fullWidth
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            margin="normal"
          />
          <label>Password</label>
          <TextField
            label="Enter your password"
            type="password"
            fullWidth
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            margin="normal"
          />
          <button
            className="signup_button"
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign In
          </button>
        </form>
      </Box>
    </Container>
  );
}

export default SignIn;
