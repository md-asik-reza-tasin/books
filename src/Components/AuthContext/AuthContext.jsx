import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

export const BooksContext = createContext();

export default function AuthContext({ children }) {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user);
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  const info = { createUser, logIn, userId, logOut, loading };

  return <BooksContext.Provider value={info}>{children}</BooksContext.Provider>;
}
