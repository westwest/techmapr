import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "techmapr.firebaseapp.com",
  projectId: "techmapr",
  storageBucket: "techmapr.appspot.com",
  messagingSenderId: "1075418423290",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-T6F47FXVZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Let's wait with this one for now
// const analytics = getAnalytics(app);