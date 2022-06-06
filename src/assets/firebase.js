// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBE6RXCVYT6SG2a6VRRO_TuNMAV32t_tE",
  authDomain: "photobook-aa751.firebaseapp.com",
  projectId: "photobook-aa751",
  storageBucket: "photobook-aa751.appspot.com",
  messagingSenderId: "235245500228",
  appId: "1:235245500228:web:bece7a9c49305ef3f04911",
  measurementId: "G-N5EV3HF4DT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
