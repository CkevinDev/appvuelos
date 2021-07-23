import "./FindVueloComponent.css";
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { findVuelos } from "../../actions/vuelos";
import CardResultComponent from "../cardResult/CardResultComponent";




const FindVueloComponent = () => {

    const dispatch = useDispatch()


    const {data,exitoso} = useSelector(state => state.vuelos)    
    console.log(data);
    
  

   const [formValues, handleInputChange] = useForm({
        origen: '',
        destino: '',
        ida: '',
        vuelta: '',
        numero: 1
    })


    const {origen,destino,ida,vuelta,numero} = formValues

    const handleSearchVuelos = (e) =>{
        e.preventDefault();
        dispatch(findVuelos(origen,destino,ida,vuelta))        
    }


    



/////////////////////////////////77



               



    return (
        <>
        <form onSubmit={handleSearchVuelos} className="navbar navbar-expand-lg navbar-light bg-light tarjetas">

            <div className="card text-white bg-secondary mb-3 t-items">
                <div className="card-header">ORIGEN - DESTINO</div>
                <div className="card-body">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="fas fa-plane-departure"></i>
                        </span>
                        <input name="origen" onChange={handleInputChange} value={origen} type="text" className="form-control" placeholder="origen" aria-label="origen" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mt-2">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="fas fa-plane-arrival"></i>
                        </span>
                        <input name="destino" onChange={handleInputChange} value={destino}  type="text" className="form-control" placeholder="destino" aria-label="destino" aria-describedby="addon-wrapping" />
                    </div>
                </div>
            </div>

            <div className="card text-white bg-secondary mb-3 t-items">
                <div className="card-header">FECHA DE IDA - FECHA DE VUELTA</div>
                <div className="card-body">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="far fa-calendar-alt"></i>
                        </span>
                        <input name="ida" onChange={handleInputChange} value={ida} type="date" className="form-control" placeholder="ida" aria-label="ida" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mt-2">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="far fa-calendar-alt"></i>
                        </span>
                        <input name="vuelta" onChange={handleInputChange} value={vuelta} type="date" className="form-control" placeholder="vuelta" aria-label="vuelta" aria-describedby="addon-wrapping" />
                    </div>
                </div>
            </div>

            <div className="card text-white bg-secondary mb-3 t-items">
                <div className="card-header">PASAJEROS</div>
                <div className="card-body">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="fas fa-male"></i>
                        </span>
                        <input name="numero" onChange={handleInputChange} value={numero} type="number" className="form-control" placeholder="adultos" aria-label="adulto" aria-describedby="addon-wrapping" />
                    </div>
                    <nav  className="input-group flex-nowrap justify-content-end mt-2">
                        <button  type="submit" className="btn btn-light">Search</button>
                    </nav>
                </div>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b9b9b9" fill-opacity="1" d="M0,32L30,26.7C60,21,120,11,180,10.7C240,11,300,21,360,42.7C420,64,480,96,540,106.7C600,117,660,107,720,90.7C780,75,840,53,900,80C960,107,1020,181,1080,197.3C1140,213,1200,171,1260,154.7C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </form>
        {
        <div className="container m-5">
                    
            <h1>Resultados de la busqueda: </h1>
            
      
                {
              
                    data.map( (vuelo) => (
                        
                        <CardResultComponent key={vuelo.num_vuelo} npasajeros={numero} vuelo={vuelo}/>
                    ))
                }
            
        </div>
        }
        

        </>
    )
}

export default FindVueloComponent
