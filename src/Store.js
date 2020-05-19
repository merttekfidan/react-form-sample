import React, { createContext, useReducer } from "react";
import reducer from "./reducers/rootReducer";

export const initialState = {
  title: "",
  body: "",
};

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export const Context = createContext(initialState);
export default Store;
