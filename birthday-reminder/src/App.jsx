import List from "./List";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((obj) => (
          <List {...obj} key={obj.id} />
        ))}

        <button onClick={() => setPeople((prev) => (prev = []))}>
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
