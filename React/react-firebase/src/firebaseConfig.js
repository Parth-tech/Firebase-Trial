// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBuBrLmM_CNopoaeED3Zpw6A1SEXWtPuE",
  authDomain: "radicalx-mockup.firebaseapp.com",
  projectId: "radicalx-mockup",
  storageBucket: "radicalx-mockup.appspot.com",
  messagingSenderId: "464710965388",
  appId: "1:464710965388:web:6071b9e9feb2919b20c3a9",
  measurementId: "G-CL7Z8RHZB4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);