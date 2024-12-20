import React from 'react';

function Chatbot() {
  return (

    <div className="chatbot-container" style={{ position: "fixed", bottom: "80px", right: "20px", zIndex: 1000 }}>
      <iframe
        src="http://localhost:8502/"
        title="Food Chatbot"
        width="400"
        height="500"
        frameBorder="0"
        style={{ borderRadius: "10px" }}
      ></iframe>
    </div>
    
  );
}

export default Chatbot;
