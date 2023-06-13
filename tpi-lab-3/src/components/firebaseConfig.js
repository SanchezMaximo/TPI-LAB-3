// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZEgxfpNRei3IJU12gRRghrlXlX5aH99s",
  authDomain: "cafeteria-usuario-api.firebaseapp.com",
  projectId: "cafeteria-usuario-api",
  storageBucket: "cafeteria-usuario-api.appspot.com",
  messagingSenderId: "631571693002",
  appId: "1:631571693002:web:638999ded51d6cce69a333",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
