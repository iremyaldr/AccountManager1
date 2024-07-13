import {ACTION_TYPES} from "../actions/AccountInfo";
const initialState ={
    list:[]
}

export const AccountInfo = (state = initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
        return{
            ...state,
            list: [...action.payload]
        }
        default:
            return state

    }
}