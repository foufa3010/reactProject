import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Quote from "./components/Quote.js";
import SearchBar from "./components/SearchBar.js";
import RecipeCard from "./components/RecipeCard.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
import UserDashboard from "./components/UserDashboard.js";
import UserProfile from "./components/UserProfile.js";
import AdminProfile from "./components/AdminProfile.js";
import BrowseRecipes from "./components/BrowseRecipes.js";
import PrivateRoute from "./components/PrivateRoute.js";
import { useState, useEffect } from "react";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
 

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [meals, setMeals] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    try {
      const url = searchApi + query;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Call searchRecipes whenever query changes
  useEffect(() => {
    searchRecipes();
  }, [query]); // It now runs whenever query changes

  // Submit handler to trigger search
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <>
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Quote />
                <SearchBar
                  isLoading={isLoading}
                  query={query}
                  setQuery={setQuery}
                  handleSubmit={handleSubmit}
                />

                {/* Display Recipes */}
                <div className="card-container">
                  {recipes.length === 0 && !isLoading && (
                    <p>No recipes found. Try a different search.</p>
                  )}
                  {isLoading && <p>Loading...</p>}
                  {recipes.map((recipe, index) => (
                    <div className="recipe-card" key={recipe.idMeal}>
                      <RecipeCard {...recipe} />
                      {(index + 1) % 3 === 0 && <div className="row-divider" />}
                    </div>
                  ))}
                </div>
              </>
            }
          />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/userdashboard" element={<UserDashboard />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route path="/browse-recipes" element={<BrowseRecipes />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
