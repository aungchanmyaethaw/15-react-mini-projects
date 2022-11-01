import { useState, useContext } from "react";
import { createContext } from "react";
import sublinks from "../data";

const StripeContext = createContext();

export function useStripeContext() {
  return useContext(StripeContext);
}

export function StripeContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSubMenu(text, coordinates) {
    setIsSubMenuOpen(true);
    setLocation(coordinates);
    const currentPage = sublinks.find(({ page }) => page === text);
    setPage((prev) => {
      return { ...prev, page: currentPage.page, links: currentPage.links };
    });
  }

  function closeSubMenu() {
    setIsSubMenuOpen(false);
  }

  return (
    <StripeContext.Provider
      value={{
        isSidebarOpen,
        isSubMenuOpen,
        openSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </StripeContext.Provider>
  );
}
