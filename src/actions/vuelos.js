import axios from "axios";
import { types } from "../types/types";
const baseUrl = process.env.REACT_APP_API_URL;


export const findVuelos = (origen,destino,ida,vuelta) =>{
    return async(dispatch) =>{
        
        try {
            const response  = await axios({
             url :`http://localhost:8080/api/v1/vuelos?origen=${encodeURI(origen)}&destino=${encodeURI(destino)}&ida=${ida}&vuelta=${vuelta}`,
             method:'GET'
             }) 
             console.log(response.data.content);
             dispatch(vuelos(response.data.content))
         } catch (error) {
             console.log(error);
         }
    }
}

export const vuelos = (response) =>({
    type: types.addVuelos,
    payload: response
})