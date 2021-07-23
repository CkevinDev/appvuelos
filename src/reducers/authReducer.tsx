import { types } from "../types/types";

const initialState = {
    uid: null,
    name: null,
    log: false

}

export const authReducer = (state = initialState, action:any)=>{
    switch (action.type) {
        case types.authLogin:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName,
                log: true
            }
        case types.authLogout:
            return {}
    
        default:
            return state
    }
}