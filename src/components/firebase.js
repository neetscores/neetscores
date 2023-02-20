import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/storage';
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBZCHPpZdPlgPd_S8K_INDwrubvZZGUYbQ",
    authDomain: "neetpredict-a1fa7.firebaseapp.com",
    projectId: "neetpredict-a1fa7",
    storageBucket: "neetpredict-a1fa7.appspot.com",
    messagingSenderId: "1048878357114",
    appId: "1:1048878357114:web:bad1eb43abcb813fd839c3"
  //   apiKey: "AIzaSyDrijAHNOT8NE15xZ_hEF7az5Kx0Jx9mRs",
  // authDomain: "neet-ddbdd.firebaseapp.com",
  // projectId: "neet-ddbdd",
  // storageBucket: "neet-ddbdd.appspot.com",
  // messagingSenderId: "370141495563",
  // appId: "1:370141495563:web:6e38ba28751824c862a20e"
});

export const auth = app.auth();

export default app;

export const db = getFirestore(app);
export const storage = getStorage(app); 
