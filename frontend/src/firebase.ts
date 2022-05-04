// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";

import {getAnalytics} from "firebase/analytics";

//Firebase configure
const firebaseConfig = {
  apiKey: "AIzaSyDPhRNLkUtfdNlI__6CAmjmnFv8t_7Adkg",

  authDomain: "ecommerce-5d8a7.firebaseapp.com",

  projectId: "ecommerce-5d8a7",

  storageBucket: "ecommerce-5d8a7.appspot.com",

  messagingSenderId: "213660064079",

  appId: "1:213660064079:web:9fcde5cb4b5d59525bcd3a",

  measurementId: "G-V2CJSHM9P0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
