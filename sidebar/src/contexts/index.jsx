import { useContext, useState, createContext } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ isModalShow, setIsModalShow, isSidebarOpen, setIsSidebarOpen }}
    >
      {children}
    </AppContext.Provider>
  );
}
