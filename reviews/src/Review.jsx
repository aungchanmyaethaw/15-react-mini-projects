import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevReview = () => {
    setIndex((index) => {
      if (index === 0) {
        return people.length - 1;
      }
      const newIndex = index - 1;
      return newIndex;
    });
  };
  const nextReview = () => {
    setIndex((index) => {
      if (index === people.length - 1) {
        return 0;
      }
      const newIndex = index + 1;
      return newIndex;
    });
  };

  const getRandom = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="name">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandom}>
        Get Random
      </button>
    </article>
  );
};

export default Review;
