import React from "react";
import { Cocktail, Loading } from "./index";
import { useGlobalContext } from "../contexts";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  console.log(cocktails);
  if (cocktails == null) {
    return (
      <section className="section">
        <h4 className="section-title">
          Sorry We cannot find your favourite cocktail!
        </h4>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails?.map((cocktail) => {
          return <Cocktail {...cocktail} key={cocktail.idDrink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
