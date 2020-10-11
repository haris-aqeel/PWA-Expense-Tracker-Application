//Importing Types 
import {State} from '../Types/Types'
import {Action} from '../Types/Types'
import {InitialState} from '../Types/Types'

export const initialState: InitialState = {
    TransactionList: [
        {id: '1234', amount: '3000', name: 'Milk', time: '2: 00'}
    ]
}

const reducer = (state: State, action:Action) => {
    switch (action.type){
        case 'ADD-TRANSACTION': 
            return state
        case 'REMOVE-TRANSACTION':
            return state
        default: 
            return state
    }
}

export default reducer;