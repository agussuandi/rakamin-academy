import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const isAuthenticated = window.localStorage.getItem("token")

  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute