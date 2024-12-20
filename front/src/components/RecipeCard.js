import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../assets/style/RecipeCard.css";
function RecipeCard({ strMeal, strMealThumb, strArea }) {
  
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((response) => {
        const meal = response.data.meals[0];
        setRecipe({
          name: meal.strMeal,
          area: meal.strArea,
          instructions: meal.strInstructions,
          ingredients: getIngredients(meal),
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  const handleIngredientsClick = () => {
    setShowIngredients(true);
    setShowInstructions(false);
  };

  const handleInstructionsClick = () => {
    setShowInstructions(true);
    setShowIngredients(false);
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <Card
        style={{
          width: "20rem",
          marginTop: "40px",
          backgroundColor: "#F6F1EE",
          position: "relative",
          border: "1px solid #857e7e",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Img
            src={strMealThumb}
            alt={strMeal}
            variant="top"
            style={{
              height: "200px",
              width: "90%",
              border: "1px solid black",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strArea}</Card.Text>
          <div className="button-group">
            <button className="action-button" onClick={handleIngredientsClick}>
              Ingredients
            </button>
            <button className="action-button" onClick={handleInstructionsClick}>
              Instructions
            </button>
          </div>
         

          {showIngredients && (
            <div className="details">
              <h5>Ingredients:</h5>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li  key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {showInstructions && (
            <div className="details">
              <h5>Instructions:</h5>
              <p className="ingredients">{recipe.instructions}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeCard;
