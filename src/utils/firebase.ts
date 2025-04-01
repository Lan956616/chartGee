import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSUoMMfWk_JOZ8RFZuRGfn3-jJ6eZ1kXc",
  authDomain: "chart-gee.firebaseapp.com",
  projectId: "chart-gee",
  storageBucket: "chart-gee.firebasestorage.app",
  messagingSenderId: "23783322357",
  appId: "1:23783322357:web:0995ac399d6890b7080bbc",
  measurementId: "G-TDW0W104WF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
