// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCExIM2EfWgguBAmLKigGHvaaLikdKosH0",
  authDomain: "again-store.firebaseapp.com",
  projectId: "again-store",
  storageBucket: "again-store.appspot.com",
  messagingSenderId: "273376363823",
  appId: "1:273376363823:web:ea8c044a983369a3b04dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;