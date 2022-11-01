import { FaBars } from "react-icons/fa";
import { useAppContext } from "./contexts";
const Home = () => {
  const { setIsModalShow, setIsSidebarOpen } = useAppContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(true)}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => setIsModalShow(true)}>
        Open Modal
      </button>
    </main>
  );
};

export default Home;
