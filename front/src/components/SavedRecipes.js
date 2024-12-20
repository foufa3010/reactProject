import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import RecipeCards from "./RecipeCards.js";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Fetch saved recipes from localStorage
  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(recipes);
  }, []);

  // Remove a recipe from the saved list
  const handleRemove = (index) => {
    const updatedRecipes = [...savedRecipes];
    updatedRecipes.splice(index, 1); // Remove the recipe at the specified index
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes)); // Update localStorage
    alert("Recipe removed!");
  };

  return (
    <div className="saved-recipes">
      <h2>Your Saved Recipes</h2>
      {savedRecipes.length === 0 ? (
        <p>No recipes saved yet!</p>
      ) : (
        <div className="recipe-list">
          {savedRecipes.map((recipe, index) => (
            <Card key={index} className="recipe-card">
              
              {/* Check if strMealThumb exists before rendering the image */}
              {recipe.strMealThumb ? (
                <Card.Img variant="top" src={recipe.strMealThumb} alt={recipe.strMeal} />
              ) : (
                <div style={{ height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span>No Image Available</span>
                </div>
              )}
              <Card.Body>
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Button variant="danger" onClick={() => handleRemove(index)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
