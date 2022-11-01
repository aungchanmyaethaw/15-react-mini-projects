import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const Question = ({ questions }) => {
  const [id, setId] = useState(0);

  function handleOpen(id) {
    setId((prevId) => {
      if (prevId === id) {
        return 0;
      }
      return id;
    });
  }

  return questions.map((question, i) => (
    <article key={question.id} className="question">
      <header>
        <h4>{question.title}</h4>
        <button className="btn" onClick={() => handleOpen(question.id)}>
          {id === question.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {id === question.id && <p className="info">{question.info}</p>}
    </article>
  ));
};

export default Question;
