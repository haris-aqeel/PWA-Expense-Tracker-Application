import { ReactNode } from "react";
export type State = {
    id: string;
    amount: number;
    name: string;
}

export type InitialState ={
    List:  State[] ,
    addTransaction?:(transaction: State) =>void,
    deleteTransaction?: (transaction: State) => void

};

export type Action = {
    type: 'ADD-TRANSACTION' | 'REMOVE-TRANSACTION';
    payload: State
}

export type JoinedType = {
    initialState: InitialState;
    reducer: (state:  InitialState, action:Action)=> InitialState;
    children: ReactNode;
}


export type Reducer = (state:  InitialState, action:Action)=> InitialState;
