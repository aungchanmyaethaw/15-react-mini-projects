import { useState } from "react";
const Tour = ({ name, info, image, price, handleDelete }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <span className="tour-price">$ {price}</span>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button onClick={() => setReadMore((prev) => !prev)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={handleDelete}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
