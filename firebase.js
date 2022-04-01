// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA6or8Gnz9e5NBKsPYT9ZGb6XdRMnBJaU",
  authDomain: "fruitte-clone.firebaseapp.com",
  projectId: "fruitte-clone",
  storageBucket: "fruitte-clone.appspot.com",
  messagingSenderId: "28173144524",
  appId: "1:28173144524:web:dbca41303dca9f73514d69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
