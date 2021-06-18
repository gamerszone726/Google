import React ,{createContext, useContext, useReducer} from 'react';

//preparing the data-layer
export const StateContext =  createContext();

//initialState is something what a datalayer looks like
//reducer is something that listen to the changes that occurs in the datalayer
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//Hook which helps us to pull the information from the datalayer..
export const useStateValue = () => useContext(StateContext);
