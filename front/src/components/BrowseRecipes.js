import React, { useState } from 'react';
import RecipeCards from '../components/RecipeCards';
import Chatbot from './Chatbot';
import { FaComment } from 'react-icons/fa';

function BrowseRecipes() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat(!showChat);

  return (
    <div className="browse-recipes-container">
      <p style={{
        fontStyle: "italic",
        margin: "20px",
        fontSize: "40px",
        color: "#4C4B16",
        fontWeight: "600"
      }}>
        Browse Recipes
      </p>
      <RecipeCards />

      <button 
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          border: "none",
          backgroundColor: "#4C4B16",
          borderRadius: "50%",
          padding: "15px",
          color: "#fff",
          cursor: "pointer"
        }} 
        onClick={toggleChat}
      >
        <FaComment size={30} />
      </button>

      {showChat && <Chatbot />}
    </div>
  );
}

export default BrowseRecipes;
