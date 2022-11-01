import Tour from "./Tour";
const Tours = ({ tours, handleTour, handleRefresh }) => {
  function deleteTour(id) {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    handleTour(filteredTours);
  }

  if (tours.length === 0) {
    return (
      <section className="title">
        <h2>No Tour Left</h2>
        <button onClick={handleRefresh} className="refresh-btn">
          Refresh
        </button>
      </section>
    );
  }

  return (
    <section>
      {tours.map((tour) => (
        <Tour
          {...tour}
          handleDelete={() => deleteTour(tour.id)}
          key={tour.id}
        />
      ))}
    </section>
  );
};

export default Tours;
