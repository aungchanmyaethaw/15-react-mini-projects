import React from "react";
import { useGlobalContext } from "../contexts";

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <section className="search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="searchCocktails">
            Search Your Favourite Cocktail!
          </label>
          <input type="text" value={query} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
