import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [code, setCode] = useState("");
  const [isError, setIsError] = useState(false);
  const [colors, setColors] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(code).all(10);
      console.log(colors);
      setColors(colors);
      setIsError(false);
    } catch (e) {
      setIsError(true);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="#84cc16"
            className={`${isError ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </section>
      <section className="colors">
        {colors.map((color, index) => {
          return (
            <SingleColor {...color} key={index} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
