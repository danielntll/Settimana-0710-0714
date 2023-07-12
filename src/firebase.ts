// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbWRgVFvqMALs-_-PaQdjCEi4u48hF_2o",
  authDomain: "instagram-clone-cf623.firebaseapp.com",
  projectId: "instagram-clone-cf623",
  storageBucket: "instagram-clone-cf623.appspot.com",
  messagingSenderId: "315960914586",
  appId: "1:315960914586:web:d62aa18e38eaa58fab6523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();
