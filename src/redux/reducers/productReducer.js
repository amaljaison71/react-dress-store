import { ActionTypes } from "../constants/action-types";

/**
 * Redux reducer
 * It takes an empty array of products as initial state
 */

const initialState = {
  products: [{ id: 1, title: "Amal", category: "programmer" }],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
