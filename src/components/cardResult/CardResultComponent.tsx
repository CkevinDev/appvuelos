import { useState } from 'react'
import './CardResultComponent.css'

const CardResultComponent = (vuelo: any) => {

    const [cod, setCod] = useState() 

    const getCod = () =>{
        setCod(cod)
    }
    
    return (
        <div className="card text-white bg-primary mb-3 ">
            <div className="card-header">Vuelo #{vuelo.vuelo.num_vuelo}</div>
            <div className="card-body cb">
                <div>
                    <div className="card-title tc">
                        <h5 className="me-2">
                            <i className="fas fa-plane-departure me-2"></i>
                            {vuelo.vuelo.ciudadorigen}
                        </h5>
                        <i className="fas fa-arrows-alt-h me-2"></i>
                        <h5>
                            <i className="fas fa-plane-arrival me-2"></i>
                            {vuelo.vuelo.ciudaddestino}
                        </h5>
                    </div>
                    <div className="card-text">
                        <p>fecha-ida : {vuelo.vuelo.fechaida}</p>
                    </div>
                    <div className="card-text">
                        <p>fecha-vuelta : {vuelo.vuelo.fechavuelta}</p>
                    </div>
                    <div className="card-text">
                        <p>Agencia : {vuelo.vuelo.cod_agencia.nombre}</p>
                    </div>
                </div>
                <div className="me-5">
                    <h5>Precio por persona</h5>
                    <h2>S/{vuelo.vuelo.precio}</h2>
                    <p>precio total S/{vuelo.vuelo.precio * vuelo.npasajeros}</p>
                    <p># pasajeros: {vuelo.npasajeros}</p>
                    <div className="me-5">
                        <button name="codvuelo" className="btn btn-success">
                            reservar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardResultComponent
