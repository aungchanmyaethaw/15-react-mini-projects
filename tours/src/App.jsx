import Loading from "./Loading";
import Tours from "./Tours";
import { useState, useEffect } from "react";

const URL = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline" />
      </div>
      <Tours tours={tours} handleTour={setTours} handleRefresh={fetchData} />
    </main>
  );
};

export default App;
