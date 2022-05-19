// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyAb8BLSr9ou_2gKMwLRv2ut7Aqq30aHY9c",
//     authDomain: "agrion-5190a.firebaseapp.com",
//     projectId: "agrion-5190a",
//     storageBucket: "agrion-5190a.appspot.com",
//     messagingSenderId: "783065696814",
//     appId: "1:783065696814:web:4b00438e23bc367a152dbf",
//     measurementId: "G-C370L83E9X"
//   };
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
//14.2.22
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAb8BLSr9ou_2gKMwLRv2ut7Aqq30aHY9c",
    authDomain: "agrion-5190a.firebaseapp.com",
    projectId: "agrion-5190a",
    storageBucket: "agrion-5190a.appspot.com",
    messagingSenderId: "783065696814",
    appId: "1:783065696814:web:4b00438e23bc367a152dbf",
    measurementId: "G-C370L83E9X"
  };
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const db = getFirestore();

export function signUp(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
}
export { auth, provider};
export default db;