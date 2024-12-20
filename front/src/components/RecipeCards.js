import React, { useState, useEffect } from "react";
import "../assets/style/RecipeCards.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const RecipeCards = ({ recipe }) => {
  const [ingredient, setIngredient] = useState("chicken_breast");
  const [category, setCategory] = useState("Seafood");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState({
    idMeal: null,
    strMeal: "",
    strMealThumb: "",
    strInstructions: "",
    strArea: "",
    ingredients: [],
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const ingredients = [
    "chicken_breast",
    "beef",
    "fish",
    "quinoa",
    "couscous",
    "honey",
    "potatoes",
    "carrots",
  ];

  const categories = ["Seafood", "Chicken", "Beef", "Vegetarian"];

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let mealsData = [];

        if (ingredient) {
          const ingredientResponse = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          );
          const ingredientData = await ingredientResponse.json();
          mealsData = ingredientData.meals || [];

        } else if (category) {

          const categoryResponse = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          const categoryData = await categoryResponse.json();
          mealsData = categoryData.meals || [];
        }

        setMeals(mealsData);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, [ingredient, category]); 

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
    setCategory(""); 

    }
    
    const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setIngredient("");
    }

    const fetchMealDetails = async (idMeal) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const mealDetails = response.data.meals[0];
      setSelectedMeal({
        idMeal: mealDetails.idMeal,
        strMeal: mealDetails.strMeal,
        strMealThumb: mealDetails.strMealThumb,
        strInstructions: mealDetails.strInstructions,
        strArea: mealDetails.strArea,
        ingredients: getIngredients(mealDetails),
      });
      setShowModal(true); 
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

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

  // Function to save the recipe
  /*const handleSaveRecipe = () => {
    if (!selectedMeal || !selectedMeal.strMeal) {
      alert("Invalid meal. Cannot save.");
      return;
    }

    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

    const isAlreadySaved = savedRecipes.some(
      (savedMeal) => savedMeal.strMeal === selectedMeal.strMeal
    );

    if (!isAlreadySaved) {
      const updatedRecipes = [...savedRecipes, selectedMeal];
      localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
      alert(`${selectedMeal.strMeal} has been saved!`);
    } else {
      alert(`${selectedMeal.strMeal} is already in your saved recipes!`);
    }
  };*/

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <div className="selecting">
        <label className="label">Select an Ingredient: </label>
        <select
          className="select"
          value={ingredient}
          onChange={handleIngredientChange}
        >
          <option value="">--Select Ingredient--</option>
          {ingredients.map((ingredientOption, index) => (
            <option key={index} value={ingredientOption}>
              {ingredientOption.replace("_", " ")}
            </option>
          ))}
        </select>
      </div>

      <div className="selecting">
        <label className="label">Select a Category: </label>
        <select
          className="select"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">--Select Category--</option>
          {categories.map((categoryOption, index) => (
            <option key={index} value={categoryOption}>
              {categoryOption}
            </option>
          ))}
        </select>
      </div>

      <div className="recipe-cards">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <Card
              key={meal.idMeal}
              style={{ width: "300px", margin: "10px", textAlign: "center" }}
            >
              <Card.Img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{
                  width: "100%",
                }}
              />
              <Card.Body className="card-content">
                <Card.Title
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    fontFamily: "ui-monospace",
                    fontStyle: "italic",
                    color: "#675d50",
                    paddingBottom: "20px",
                  }}
                >
                  {meal.strMeal}
                </Card.Title>

                <div
                  className="button-group"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <Button
                    className="action-button"
                    onClick={() => fetchMealDetails(meal.idMeal)}
                    style={{
                      fontSize: "14px",
                      height: "50px",
                      width: "110px",
                      borderRadius: "10px",
                      border: "none",
                      backgroundColor: "#B2B377",
                      transition: "background-color 0.4s ease, color 1s ease",
                    }}
                  >
                    View Details
                  </Button>

                  <Button
                    variant="primary"
                    
                  >
                    Save Recipe
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No meals found for this ingredient or category.</p>
        )}
      </div>

      {/* Modal for meal details */}
      {selectedMeal && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMeal.strMeal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Ingredients:</h5>
            <ul>
              {selectedMeal.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h5>Instructions:</h5>
            <p>{selectedMeal.strInstructions}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default RecipeCards;
