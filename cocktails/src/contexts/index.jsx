import React, { useState, useContext, createContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url + query);
      const data = await res.json();

      if (data) {
        const { drinks } = data;
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcholic, strGlass } =
            drink;

          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      }

      setLoading(false);
    } catch (e) {
      console.log("error");
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider
      value={{
        loading,
        query,
        cocktails,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
