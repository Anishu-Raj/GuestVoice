import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPtv4Pt_TMSjglwYPpQDujn1kwdY35np4",
  authDomain: "guestvoice-a18b0.firebaseapp.com",
  projectId: "guestvoice-a18b0",
  storageBucket: "guestvoice-a18b0.firebasestorage.app",
  messagingSenderId: "803617111534",
  appId: "1:803617111534:web:e6df5d1ccd906bfd4162ff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();