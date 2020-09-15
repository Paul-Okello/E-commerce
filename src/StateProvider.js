import React, { createContext, useContext, useReducer } from "react";
//create data layer
export const StateContext = createContext();
// Wrap our app and provide Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull info from data layer
const useStateValue = () => useContext(StateContext);
export default useStateValue;
