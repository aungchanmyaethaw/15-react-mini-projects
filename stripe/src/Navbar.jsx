import logo from "./assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useStripeContext } from "./contexts";
const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useStripeContext();

  function handleHover(event) {
    const tempBtn = event.target;
    const page = tempBtn.textContent;
    const measurements = tempBtn.getBoundingClientRect();
    const bottom = measurements.bottom - 3;
    const center = (measurements.left + measurements.right) / 2;
    openSubMenu(page, { bottom, center });
  }

  function handleSubMenu(event) {
    if (!event.target.classList.contains("link-btn")) {
      closeSubMenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={handleHover}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleHover}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={handleHover}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn" onMouseOver={handleHover}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
