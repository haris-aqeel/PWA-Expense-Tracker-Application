import React, { createContext, useReducer, useContext } from 'react'

//Importing Types
import { JoinedType } from '../Types/Types'

// Setting Up A Data Layer
export const StateContext = createContext({});

const addTransaction = () => {

}

// Building Up A Provider
const StateProvider = ( {initialState, reducer, children}: JoinedType) => {
    return(
        // <StateContext.Provider value={ useReducer(reducer, initialState) }>
        
        //     {children}
        
        // </StateContext.Provider>
        <> </>
        
    
    );
}
export default StateProvider;

export const useStateValue = () => useContext(StateContext); 
