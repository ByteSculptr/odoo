
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "helpdeck-qgy3e",
  "appId": "1:583536869895:web:0f13da120e4ee518b020a2",
  "storageBucket": "helpdeck-qgy3e.firebasestorage.app",
  "apiKey": "AIzaSyBtizN7dyeaFeYYqxsQhIRme79Zz1XgFjY",
  "authDomain": "helpdeck-qgy3e.firebaseapp.com",
  "messagingSenderId": "583536869895"
};


// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);

let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { app, analytics };
