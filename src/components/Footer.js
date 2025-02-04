import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "rgb(66, 103, 142)",
  color: "white",
  textAlign: "center",
  padding: "10px 0",
  width: "100%",
};

export default Footer;
