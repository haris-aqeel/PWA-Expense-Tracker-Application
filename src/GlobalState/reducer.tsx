//Importing Types 

import {Action} from '../Types/Types'
import {InitialState} from '../Types/Types'

export const initialState: InitialState = {

    List: [
       
    ],



}
const reducer = (state:  InitialState, action:Action) => {
    switch (action.type){
        case 'ADD-TRANSACTION': 
            return {
                ...state,
                List: [...state.List, action.payload] 
            }
        case 'REMOVE-TRANSACTION':
            let newItem = state.List.filter((curr)=> {
               return  curr.id !== action.payload.id
            })
            return {
                ...state,
                List: newItem
            }
        default: 
            return state
    }
}

export default reducer;