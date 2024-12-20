import React from "react";

const seasonalRecipes = {
  Summer: [
    {
      name: "Refreshing Watermelon Salad",
      image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2016/07/Waterelon-Salad-5.jpg",
      description: "A cool, refreshing salad with watermelon, feta, and mint.",
    },
    {
      name: "Mango Smoothie Bowl",
      image: "https://thefoodiephysician.com/wp-content/uploads/2022/01/mango-smoothie-bowl-3.jpg",
      description: "A healthy mango smoothie topped with fresh fruits and seeds.",
    },
  ],
  Winter: [
    {
      name: "Hearty Tomato Soup",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg",
      description: "A warm and creamy tomato soup perfect for cold nights.",
    },
    {
      name: "Roasted Pumpkin Stew",
      image: "https://simple-veganista.com/wp-content/uploads/2015/10/Moroccan-Pumpkin-Chickpea-Stew-5.jpg",
      description: "A rich, flavorful stew with roasted pumpkin and spices.",
    },
  ],
};

const featuredIngredient = {
  name: "🥑 Avocado",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2qdPwstyyNuS6Fz5GcgIjbOvAvRXJdEZpg&s",
  recipes: [
    {
      name: "Avocado Toast",
      description: "Simple and delicious toast with smashed avocado and toppings.",
    },
    {
      name: "Creamy Avocado Pasta",
      description: "A rich and creamy pasta sauce made with fresh avocados.",
    },
  ],
};

const getSeason = () => {
  const month = new Date().getMonth();
  if (month >= 5 && month <= 8) return "Summer"; 
  return "Winter";
};

const SeasonalRecipes = () => {
  const currentSeason = getSeason();
  const recipes = seasonalRecipes[currentSeason];

  return (
    <div style={styles.container}>
      {/* Seasonal Recipes */}
      <h3 style={styles.title}>🌟 Seasonal Recipes - {currentSeason}</h3>
      <div style={styles.recipeContainer}>
        <div style={styles.recipeColumn}>
          <h4 style={styles.subTitle}>❄️ Winter Recipes</h4>
          <div style={styles.recipeGrid}>
            {seasonalRecipes.Winter.map((recipe, index) => (
              <div key={index} style={styles.card}>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={styles.image}
                />
                <h4 style={styles.recipeName}>{recipe.name}</h4>
                <p style={styles.recipeDesc}>{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.recipeColumn}>
          <h4 style={styles.subTitle}>☀️ Summer Recipes</h4>
          <div style={styles.recipeGrid}>
            {seasonalRecipes.Summer.map((recipe, index) => (
              <div key={index} style={styles.card}>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={styles.image}
                />
                <h4 style={styles.recipeName}>{recipe.name}</h4>
                <p style={styles.recipeDesc}>{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      <h3 style={styles.title}>🥑 Featured Ingredient: {featuredIngredient.name}</h3>
      <div style={styles.ingredientContainer}>
        <img
          src={featuredIngredient.image}
          alt={featuredIngredient.name}
          style={styles.featuredImage}
        />
        <div>
          {featuredIngredient.recipes.map((recipe, index) => (
            <div key={index} style={styles.featuredRecipe}>
              <h4 style={styles.recipeName}>{recipe.name}</h4>
              <p style={styles.recipeDesc}>{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    margin: "20px auto",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fdfdfd",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    color: "#2C3E50",
  },
  subTitle: {
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "1.5rem",
    color: "#34495E",
  },
  recipeContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "40px",
  },
  recipeColumn: {
    width: "48%",
  },
  recipeGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  card: {
    backgroundColor: "#FAFAFA",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  recipeName: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#34495E",
  },
  recipeDesc: {
    fontSize: "0.9rem",
    color: "#7F8C8D",
  },
  ingredientContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },
  featuredImage: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
  featuredRecipe: {
    marginBottom: "15px",
  },
};

export default SeasonalRecipes;
