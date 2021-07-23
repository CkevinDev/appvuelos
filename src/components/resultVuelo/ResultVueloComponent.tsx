import { useEffect } from 'react';
import { useState } from 'react'
import CardResultComponent from '../cardResult/CardResultComponent';


const ResultVueloComponent = () => {

    const [vuelos, setVuelos] = useState(['']);

    useEffect(() => {
        getVuelos();
    })

    const getVuelos = async() =>{
        var data
            const url = `http://localhost:8080/api/v1/vuelos}`;
            const resp = await fetch(url);
            data = await resp.json();
            const fly = data.content.map( (vuelo:any) =>{
                return {
                    id: vuelo.num_vuelo,
                    origen : vuelo.ciudadorigen,
                    destino: vuelo.ciudaddestino,
                    ida: vuelo.fechaida,
                    vuelta: vuelo.fechavuelta,
                    precio: vuelo.precio,
                    stock: vuelo.precio,
                    agencia: vuelo.cod_agencia.nombre,
                }
            })
    
            setVuelos(fly)        

        
    }

    return (
        <div className="container m-5">
                    
            <h1>Resultados de la busqueda: </h1>
            
      
                {
                    vuelos.map( (vuelo:any) => (
                        <CardResultComponent key={vuelo.id} vuelo={vuelo}/>
                    ))
                }
            
        </div>
    )
}

export default ResultVueloComponent
