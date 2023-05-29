// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1ozXD3bSvCQjHMyiQn97RBpKQRxxiOes",
  authDomain: "ppt-generator-eadbd.firebaseapp.com",
  projectId: "ppt-generator-eadbd",
  storageBucket: "ppt-generator-eadbd.appspot.com",
  messagingSenderId: "280322430014",
  appId: "1:280322430014:web:18b89133fdf6301ee22d6f",
  measurementId: "G-L895SE6NVM"
}; 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth= new getAuth();

export{auth,provider}