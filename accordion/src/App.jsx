import Question from "./Question";
import questions from "./data";
const App = () => {
  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          <Question questions={questions} />
        </section>
      </section>
    </main>
  );
};

export default App;
