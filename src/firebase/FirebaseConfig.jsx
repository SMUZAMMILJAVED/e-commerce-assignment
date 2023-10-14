// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from 'firebase/firestore';
import {getAuth}from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYDHZSKXVgHW76MKbyIAM3jzVnvao5tqI",
  authDomain: "ecommerce-6224d.firebaseapp.com",
  projectId: "ecommerce-6224d",
  storageBucket: "ecommerce-6224d.appspot.com",
  messagingSenderId: "35216645468",
  appId: "1:35216645468:web:b564f583e344635ea53599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firedDB=getFirestore(app);
const auth=getAuth(app);
export{firedDB,auth}