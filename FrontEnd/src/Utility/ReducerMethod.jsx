import { useReducer } from "react";
import { Type } from "./Action.type";
export const initialState = {
  cart: [],
};
export const reducerMethod = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART:
      const isItemExists = state.cart.find((singleItem) => {
        return singleItem.id===action.id
      })
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
};
