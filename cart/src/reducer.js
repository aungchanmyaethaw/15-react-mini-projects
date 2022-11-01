export const ACTIONS = {
  CLEAR_CART: "clear-cart",
  REMOVE_ITEM: "remove-item",
  INCREASE_ITEM: "increase-item",
  DECREASE_ITEM: "decrease-item",
  TOTAL: "total",
  FETCH: "fetch",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };

    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== payload.id),
      };

    case ACTIONS.INCREASE_ITEM:
      const tempCartInc = state.cart.map((item) => {
        if (item.id === payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return { ...state, cart: tempCartInc };

    case ACTIONS.DECREASE_ITEM:
      const tempCartDec = state.cart
        .map((item) => {
          if (item.id === payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);

      return { ...state, cart: tempCartDec };

    case ACTIONS.TOTAL:
      const tempTotal = state.cart.reduce(
        (totalItem, currentItem) => {
          const { price, amount } = currentItem;
          totalItem.amount += amount;
          totalItem.total += price * amount;
          return totalItem;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      return {
        ...state,
        amount: tempTotal.amount,
        total: parseFloat(tempTotal.total.toFixed(2)),
      };

    case ACTIONS.FETCH:
      if (payload.status === "loading") {
        return { ...state, loading: true };
      }
      if (payload.status === "success") {
        return { ...state, loading: false, cart: payload.data };
      }
  }
};

export default reducer;
