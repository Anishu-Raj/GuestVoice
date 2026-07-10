import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [firebaseUser, setFirebaseUser] = useState(null);

  const [dbUser, setDbUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

      setFirebaseUser(currentUser);

      if (currentUser) {

        try {

          const response = await axios.post(
            "http://localhost:5000/api/auth/google",
            {
              name: currentUser.displayName,
              email: currentUser.email,
              photo: currentUser.photoURL,
              uid: currentUser.uid,
            }
          );

          setDbUser(response.data);

        } catch (err) {

          console.log(err);

        }

      }

      else{

        setDbUser(null);

      }

      setLoading(false);

    });

    return unsubscribe;

  }, []);

  const loginWithGoogle = async () => {

    await signInWithPopup(auth, googleProvider);

  };

  const logout = async () => {

    await signOut(auth);

  };

  return (

    <AuthContext.Provider

      value={{

        firebaseUser,

        dbUser,

        loading,

        loginWithGoogle,

        logout,

        isLoggedIn: !!firebaseUser,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}

export const useAuth = () => useContext(AuthContext);