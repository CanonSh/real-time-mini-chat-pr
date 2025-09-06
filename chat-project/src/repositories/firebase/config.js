// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm7oJHHLhEDwy2T_RdMGEzMWLdR00A6I4",
  authDomain: "real-time-chat-4c75c.firebaseapp.com",
  projectId: "real-time-chat-4c75c",
  storageBucket: "real-time-chat-4c75c.firebasestorage.app",
  messagingSenderId: "772566329713",
  appId: "1:772566329713:web:d28abdc901d93a97e7eed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);