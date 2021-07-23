import axios from "axios";
import { types } from "../types/types";


export const addReserva = (id) =>{
    return async(dispatch) =>{
        
        try {
            const response  = await axios({
             url :`http://localhost:8080/api/v1/vuelos/${encodeURI(id)}`,
             method:'GET'
             }) 
             console.log(response.data.content);
             dispatch(reserva(response.data.content))
         } catch (error) {
             console.log(error);
         }
    }
}

export const reserva = (response) =>({
    type: types.addReserva,
    payload: response
})