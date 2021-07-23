import {combineReducers} from 'redux'
import { authReducer } from './authReducer';
import { reservaReducer } from './reservaReducer';
import { vuelosReducer } from './vuelosReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    vuelos: vuelosReducer,
    reservas: reservaReducer
})