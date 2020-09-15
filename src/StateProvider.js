import { createContext, useContext, useReducer } from "react"

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => {
    <StateContext.Provider value={useReducer, initialState}>
        {children}
    </StateContext.Provider>
};

export const useStateValue = () = useContext(StateContext);