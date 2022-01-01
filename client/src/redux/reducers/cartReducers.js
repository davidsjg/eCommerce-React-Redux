import * as actionTypes from "../constants/cartConstants";

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => {
            return x.product === existItem.product ? item : x;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      console.log(state.cartItems);
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.products !== action.payload),
      };

    default:
      return state;
  }
};
