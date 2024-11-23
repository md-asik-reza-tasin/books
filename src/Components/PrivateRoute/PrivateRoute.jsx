import { useContext } from "react";
import { BooksContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { userId, loading } = useContext(BooksContext);
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  } else if (userId) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/signin"></Navigate>;
  }
}
