
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCkB2D6VulY3IwVw9hLT22WilmgGhUx_sE",
    authDomain: "reels-43c2e.firebaseapp.com",
    projectId: "reels-43c2e",
    storageBucket: "reels-43c2e.appspot.com",
    messagingSenderId: "983649164426",
    appId: "1:983649164426:web:ec21a82b8236f39d716173",
    measurementId: "G-SL2VPQ4R46"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export default db;