// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAipPvoTm7aFxutRPstjZ3Z7B8wGF7wW8E",
  authDomain: "freak-7210f.firebaseapp.com",
  projectId: "freak-7210f",
  storageBucket: "freak-7210f.appspot.com",
  messagingSenderId: "428395080035",
  appId: "1:428395080035:web:c2f1cc018320bf974d4b56",
  measurementId: "G-SCMRQ4Y21E"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

