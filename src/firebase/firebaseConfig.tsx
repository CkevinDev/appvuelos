import firebase from "firebase";
import 'firebase/firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD8N-SzqynoJOFkueysPco6JeHd1tAiQRo",
    authDomain: "vuelos-ef05d.firebaseapp.com",
    projectId: "vuelos-ef05d",
    storageBucket: "vuelos-ef05d.appspot.com",
    messagingSenderId: "327071779157",
    appId: "1:327071779157:web:8938590cb67d16bd7287dc",
    measurementId: "G-ZFV73QNF8J"
};
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}