import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getUserData } from "../utils/user-data";

const firebaseConfig = {
  apiKey: "AIzaSyAHeca51bgabRGSFCH8TMaBl_8u7u_Q3_w",
  authDomain: "bop-shop-95126.firebaseapp.com",
  projectId: "bop-shop-95126",
  storageBucket: "bop-shop-95126.appspot.com",
  messagingSenderId: "323748349914",
  appId: "1:323748349914:web:127486ec26a15bc64ca2e3",
};

//firebase
const app = initializeApp(firebaseConfig);

//user
const user = getUserData();

//Authentication
export const auth = getAuth(app);

//Realtime Database
export const realtimeDB = getDatabase(app);

//Firestore Database
export const firestoreDB = getFirestore(app);
