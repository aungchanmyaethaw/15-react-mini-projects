import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, img, glass, info }) => {
  return (
    <article className="cocktail">
      <img src={img} alt="" />
      <footer className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <button className="btn btn-details">
          <Link to={`/cocktail/${id}`}>Details</Link>
        </button>
      </footer>
    </article>
  );
};

export default Cocktail;
