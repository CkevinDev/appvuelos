import { types } from '../types/types';

const initialState = {
    data : []
}

export const vuelosReducer = (state = initialState, action) =>{
    switch (action.type) {

        case types.addVuelos:
            return {
                ...state,
                exitoso: true,
                data : action.payload
            }

        default:
            return state;
    }
}