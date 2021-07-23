import {Switch,Route, Redirect} from "react-router-dom";
import NavComponent from '../components/navbar/NavComponent'
import ResultVueloComponent from '../components/resultVuelo/ResultVueloComponent';
import FindVueloComponent from '../components/findVuelo/FindVueloComponent';

const DashboardRoutes = () => {
    return (
        <>
            <NavComponent/>
            <div>
                <Switch>
                    <Route path="/" component={FindVueloComponent} />
                    <Route exact path="/vuelos" component={ResultVueloComponent} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
