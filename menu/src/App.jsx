import { useState, useEffect } from "react";
import data from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(data.map(({ category }) => category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories] = useState(allCategories);

  function filteredItems(category) {
    setMenuItems(() => {
      if (category === "all") {
        return data;
      }

      return data.filter((item) => item.category === category);
    });
  }

  return (
    <section className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} handleFilter={filteredItems} />
      <Menu items={menuItems} />
    </section>
  );
};

export default App;
