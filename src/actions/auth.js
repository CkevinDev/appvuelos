import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'

export const startLoginEmailPassword = (email,password) =>{
    return(dispatch) =>{
        setTimeout(() => {
            dispatch(login(123,'vkjdv'))
        }, 3500);
    }
}




export const startGooleLogin = () =>{
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) =>{
            dispatch(
                login(user.uid, user.displayName)
            )
        });
    }
}

export const login = (uid, displayName) => {
    return{
        type: types.authLogin,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogOut = () =>{
    return async(dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = ()=>({
    type: types.authLogout
})