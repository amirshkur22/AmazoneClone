import { useReducer } from "react";
import { Type } from "./Action.type";
export const initialState = {
  cart: [],
};
export const reducerMethod = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    //   break;
      default:
          return state
    //   break;
  }
};
// const [state, dispatch] = useReducer(reducerMethod, initialState);
