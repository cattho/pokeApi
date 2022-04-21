import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCVuODVV3wdcMcTzLMfG4x2KeXDV-zj2so",
  authDomain: "pokemon-aa58f.firebaseapp.com",
  projectId: "pokemon-aa58f",
  storageBucket: "pokemon-aa58f.appspot.com",
  messagingSenderId: "912547483856",
  appId: "1:912547483856:web:9371d80b9b2e8bdbb54ed5",
  measurementId: "G-2S3GRTGW3S"
};


export const app = initializeApp(firebaseConfig);
export const logWithGoogle= new GoogleAuthProvider()
export const logWithFacebook= new FacebookAuthProvider()
export const db=getFirestore()
