import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const URL = "https://course-api.com/react-tabs-project";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(URL);
    const data = await res.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="section">
        <h1 className="loading">Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
};

export default App;
