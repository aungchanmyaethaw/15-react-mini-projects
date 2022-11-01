import React from "react";

const Categories = ({ categories, handleFilter }) => {
  return (
    <section className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          className="filter-btn"
          onClick={() => handleFilter(category)}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default Categories;
