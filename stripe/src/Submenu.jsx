import React, { useState, useRef, useEffect } from "react";
import { useStripeContext } from "./contexts";
const Submenu = () => {
  const [cols, setCols] = useState("col-2");
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useStripeContext();
  const subMenuRef = useRef(null);

  useEffect(() => {
    const { bottom, center } = location;
    subMenuRef.current.style.left = `${center}px`;
    subMenuRef.current.style.top = `${bottom}px`;

    if (links.length === 3) {
      setCols("col-3");
    }

    if (links.length > 3) {
      setCols("col-4");
    }
  }, [location, page]);

  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
      ref={subMenuRef}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${cols}`}>
        {links.map(({ label, icon, url }) => (
          <div key={label}>
            <a href={url}>
              {icon}
              {label}
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Submenu;
