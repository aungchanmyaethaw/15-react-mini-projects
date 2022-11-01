import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useStripeContext } from "./contexts";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useStripeContext();

  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ page, links }) => (
            <article key={page}>
              <h4>{page}</h4>
              <ul className="sidebar-sublinks">
                {links.map(({ label, icon, url }) => (
                  <li key={label}>
                    <a href={url}>
                      {icon}
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
