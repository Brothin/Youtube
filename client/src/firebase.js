import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "fir-d5cec.firebaseapp.com",
  projectId: "fir-d5cec",
  storageBucket: "fir-d5cec.appspot.com",
  messagingSenderId: "1065880367016",
  appId: "1:1065880367016:web:f49c4a8429e4e0c3f5779d",
  measurementId: "G-8PNRSYVHQ2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
