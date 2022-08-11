import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  brand: undefined,
  price:undefined,
};

export const BuyCarContext = createContext(INITIAL_STATE);

const BuyCarReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const BuyCarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BuyCarReducer, INITIAL_STATE);

  return (
    <BuyCarContext.Provider
      value={{
        brand: state.brand,
        price: state.price,
        dispatch,
      }}
    >
      {children}
    </BuyCarContext.Provider>
  );
};
