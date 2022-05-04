import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBoHV-bk0vFrp9X1czLfIyPbXI0o1dB0RU",
    authDomain: "mycapstoneproject-1bc50.firebaseapp.com",
    projectId: "mycapstoneproject-1bc50",
    storageBucket: "mycapstoneproject-1bc50.appspot.com",
    messagingSenderId: "919424891838",
    appId: "1:919424891838:web:a0e229c6708872cffb57ef"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}