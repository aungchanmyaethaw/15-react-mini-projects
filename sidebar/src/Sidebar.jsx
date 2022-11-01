import React from "react";
import logo from "./assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useAppContext } from "./contexts";
const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : null}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
