// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from"firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2adP88gwkZCWy6qGs2_IKEcyU7FKONWI",
  authDomain: "shopy-shopy.firebaseapp.com",
  projectId: "shopy-shopy",
  storageBucket: "shopy-shopy.appspot.com",
  messagingSenderId: "1063418473068",
  appId: "1:1063418473068:web:a72f1369bd1964affe4649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app)
const auth=getAuth(app)
export {fireDB,auth}