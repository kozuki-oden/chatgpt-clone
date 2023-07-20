import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4dm0PDm2Qr2LVe_a3rs0X5COU4-7ofhg",
  authDomain: "chatgpt-clone-1.firebaseapp.com",
  projectId: "chatgpt-clone-1",
  storageBucket: "chatgpt-clone-1.appspot.com",
  messagingSenderId: "26748875357",
  appId: "1:26748875357:web:6bf3158c4ba7e2c94f13b4"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };