import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase";
import API from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [firebaseUser, setFirebaseUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {

        setFirebaseUser(currentUser);

        if (currentUser) {

          // Signed in with Google
          try {

            const response = await API.post("/auth/google", {
              name: currentUser.displayName,
              email: currentUser.email,
              photo: currentUser.photoURL,
              uid: currentUser.uid,
            });

            localStorage.setItem("token", response.data.token);
            setDbUser(response.data.user);

          } catch (error) {

            console.log(error);
            setDbUser(null);

          }

        } else {

          // No Google session — but they may have an email/password
          // session from an earlier visit, saved as a JWT in localStorage.
          const token = localStorage.getItem("token");

          if (token) {

            try {

              const response = await API.get("/auth/me");
              setDbUser(response.data);

            } catch (error) {

              // token expired/invalid
              localStorage.removeItem("token");
              setDbUser(null);

            }

          } else {

            setDbUser(null);

          }

        }

        setLoading(false);

      }
    );

    return unsubscribe;

  }, []);

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const loginWithEmail = async (email, password) => {

    const response = await API.post("/auth/login", { email, password });

    localStorage.setItem("token", response.data.token);
    setDbUser(response.data.user);

  };

  const registerWithEmail = async (name, email, password) => {

    const response = await API.post("/auth/register", {
      name,
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);
    setDbUser(response.data.user);

  };

  const logout = async () => {

    localStorage.removeItem("token");
    setDbUser(null);

    if (firebaseUser) {
      await signOut(auth);
    }

  };

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        dbUser,
        loading,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        logout,
        isLoggedIn: !!dbUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
