import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import DashboardRoutes from './DashboardRoutes';
import LoginScreen from '../components/auth/LoginScreen';
import {firebase} from '../firebase/firebaseConfig'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { useState } from "react";
import Loader from "../components/loader/Loader";

const AppRouter = () => {

    const dispatch = useDispatch()

    const [cheking, setCheking] = useState(true);
    const [isLoggeIn, setIsLoggeIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggeIn(true)
            }else{
                setIsLoggeIn(false)
            }
            setCheking(false)
        })
    }, [dispatch,setCheking])

    if(cheking){
        return(
            <Loader/>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route path="/" component={DashboardRoutes}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
