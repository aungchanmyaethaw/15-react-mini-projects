import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import cartItems from "../data";
import reducer, { ACTIONS } from "../reducer";
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.TOTAL });
  }, [state.cart]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    dispatch({ type: ACTIONS.FETCH, payload: { status: "loading" } });
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: ACTIONS.FETCH, payload: { status: "success", data } });
  }

  function removeItem(id) {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } });
  }

  function clearCart() {
    dispatch({ type: ACTIONS.CLEAR_CART });
  }

  function increaseAmount(id) {
    dispatch({ type: ACTIONS.INCREASE_ITEM, payload: { id } });
  }

  function decreaseAmount(id) {
    dispatch({ type: ACTIONS.DECREASE_ITEM, payload: { id } });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};
