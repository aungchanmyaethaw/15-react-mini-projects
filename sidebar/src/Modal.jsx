import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./contexts";
const Modal = () => {
  const { isModalShow, setIsModalShow } = useAppContext();

  return (
    <div className={`modal-overlay  ${isModalShow ? "show-modal" : null}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button
          className="close-modal-btn"
          onClick={() => setIsModalShow(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
