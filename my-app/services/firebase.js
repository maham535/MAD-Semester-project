// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp-61G_xYr4uqEupxRgLIK_IRcsfHHmWY",
  authDomain: "cake-app-b5cd7.firebaseapp.com",
  databaseURL: "https://cake-app-b5cd7-default-rtdb.firebaseio.com",
  projectId: "cake-app-b5cd7",
  storageBucket: "cake-app-b5cd7.firebasestorage.app",
  messagingSenderId: "276784346040",
  appId: "1:276784346040:web:b488af322bb06e6855154d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const FIREBASE_API_KEY = firebaseConfig.apiKey;