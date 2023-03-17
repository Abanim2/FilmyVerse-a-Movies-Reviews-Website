import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOikI-st41yC0UL6Fu1jUunjjt2yYkpNA",
  authDomain: "filmyverse-f7a82.firebaseapp.com",
  projectId: "filmyverse-f7a82",
  storageBucket: "filmyverse-f7a82.appspot.com",
  messagingSenderId: "772746167913",
  appId: "1:772746167913:web:b2333744c794f567d8c4f8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;