import './NavComponent.css'
import {Link, NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../../actions/auth'

const NavComponent = () => {

    const {log} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(startLogOut())
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="container-fluid">
                    <Link className="navbar-brand logo" to="/">
                        <img src="./assets/airplane.svg" alt="" width="30" height="24" />
                        Airport
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ">
                            {
                                !log&&
                                <NavLink exact to="/login" className="nav-item nav-content">
                                    <i className="fas fa-user"></i>
                                    <a className="nav-link" href="#" >LogIn</a>
                                </NavLink>
                            }
                            
                            <NavLink to="vuelos" className="nav-item nav-content">
                                <i className="fas fa-plane"></i>
                                <a className="nav-link" href="#">Vuelos</a>
                            </NavLink>
                            {
                                log &&
                                <li className="nav-item nav-content">
                                    <i className="fas fa-question-circle"></i>
                                    <a className=" nav-link" onClick={handleLogout} href="#">logout</a>
                                </li>
                            }
                            
                        </ul>

                    </div>
                </div>
            </nav>

            <ul className="nav justify-content-center ">
                <NavLink to="/vuelos" className="nav-item li-content">
                    <i className="fas fa-plane"></i>
                    <a className="nav-link textos" href="#">Vuelos</a>
                </NavLink>
                <li className="nav-item li-content">
                    <i className="fas fa-suitcase-rolling"></i>
                    <a className="nav-link textos" href="#">Reservas</a>
                </li>
                <li className="nav-item li-content">
                    <i className="fas fa-box"></i>
                    <a className="nav-link textos" href="#">Paquetes</a>
                </li>
            </ul>

        </>
    )
}

export default NavComponent
