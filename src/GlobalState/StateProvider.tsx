import React, { createContext, useReducer, useContext } from "react";

//
import { JoinedType } from "../Types/Types";
import { InitialState } from "../Types/Types";
import {State} from '../Types/Types'
// Setting Up A Data Layer

export const StateContext = createContext<InitialState>({
  List: []
});

// Building Up A Provider
const StateProvider = ({ initialState, reducer, children }: JoinedType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTransaction(transaction: State): void {
    dispatch({
      type: "ADD-TRANSACTION",
      payload: transaction,
    });
  }

  function deleteTransaction(transaction: State) {
    dispatch({
      type: "REMOVE-TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <StateContext.Provider value={
        {
            List: state.List,
            addTransaction,
            deleteTransaction
        }
    }>
      {children}
    </StateContext.Provider>
  );
};
export default StateProvider;

export const useStateValue = () => useContext(StateContext);
