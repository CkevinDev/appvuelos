import { types } from '../types/types';

const initialState = {
    data : []
}

export const reservaReducer = (state = initialState, action:any) =>{
    switch (action.type) {

        case types.addReserva:
            return {
                ...state,
                agregado: true,
                data : action.payload
            }

        default:
            return state;
    }
}