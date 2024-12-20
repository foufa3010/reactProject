import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import "../assets/style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> 
        <XIcon /> 
        <FacebookIcon />
      </div>
      <p> &copy; 2024 Food Magpie & Co</p>
    </div>
  );
}
export default Footer