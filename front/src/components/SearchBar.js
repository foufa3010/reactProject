import React from "react";
import { useState } from "react";
import axios from "axios";

import "../assets/style/SearchBar.css";
function SearchBar({ handleSubmit, query, isLoading, setQuery }) {
  return (
    <div>
      <h1>Search Our Recipes</h1>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          value={query}
          className="searching"
          type="text"
          name="query"
          disabled={isLoading}
          placeholder="Search for recipes"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="search-button"
          disabled={isLoading || !query}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
