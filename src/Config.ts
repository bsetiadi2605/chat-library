// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxmyoHM0Ssk5ZMXaunpvTVFgJJHCIoZsk",
    authDomain: "chat-e2232.firebaseapp.com",
    projectId: "chat-e2232",
    storageBucket: "chat-e2232.appspot.com",
    messagingSenderId: "350307264120",
    appId: "1:350307264120:web:cb5e3a4584cb2a153d2f8d",
    measurementId: "G-8MS4TN693Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
export const db = getFirestore(app);