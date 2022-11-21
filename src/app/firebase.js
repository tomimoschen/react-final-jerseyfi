import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNX9I9MyI3dtEKamH1XHexW6j1xybSciE",
    authDomain: "jerseyfi-final.firebaseapp.com",
    projectId: "jerseyfi-final",
    storageBucket: "jerseyfi-final.appspot.com",
    messagingSenderId: "212751255560",
    appId: "1:212751255560:web:ad9b9e09ad1447bec0e9bd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
