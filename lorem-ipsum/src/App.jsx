import { useState } from "react";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setResult(() => {
      let amount = value;
      if (amount <= 0) {
        amount = 1;
      }
      if (amount > data.length) {
        amount = 8;
      }

      return data.slice(0, amount);
    });
  }

  console.log(result);

  return (
    <section className="section-center">
      <h3>get tired of Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Count of paragraph: </label>
        <input
          type="number"
          id="paragraph"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div>
        {result.map((paragraph, index) => {
          return (
            <p key={index} className={index}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default App;
