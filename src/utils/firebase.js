// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmNDbLeaZvwN4tf6XEloRyLggQKpThecY",
  authDomain: "netflixgpt-6119e.firebaseapp.com",
  projectId: "netflixgpt-6119e",
  storageBucket: "netflixgpt-6119e.firebasestorage.app",
  messagingSenderId: "897692558861",
  appId: "1:897692558861:web:cb75c5440324e2a1d39744",
  measurementId: "G-KYNH946ZWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();