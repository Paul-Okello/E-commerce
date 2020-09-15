import React, { createContext, useContext, useReducer } from "react";
//create data layer
export const StateContext = createContext();
// Wrap our app and provide Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={(useReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull info from data layer
export const useStateValue = () => useContext(StateContext);
