import { JsxChild, JsxElement, JsxFragment } from "typescript"

export type State = {
    id: string;
    amount: string;
    name: string;
    time: string;
}

export type InitialState = {
    TransactionList: State[]
}

export type Action = {
    type: 'ADD-TRANSACTION' | 'REMOVE-TRANSACTION';
    payload: string
}

export type JoinedType = {
    initialState: InitialState;
    reducer: (state: State, action: Action) => State;
    children: any;
}