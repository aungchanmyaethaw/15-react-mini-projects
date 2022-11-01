import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
      </section>
      <section className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let currentCls = "nextSlide";
          if (personIndex === index) {
            currentCls = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (personIndex === people.length - 1 && index === 0)
          ) {
            currentCls = "lastSlide";
          }
          return (
            <article className={`article ${currentCls}`} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <h3 className="title">{title}</h3>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex((prev) => prev - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex((prev) => prev + 1)}>
          <FiChevronRight />
        </button>
      </section>
    </main>
  );
};

export default App;
