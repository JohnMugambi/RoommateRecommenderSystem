import { Navigate } from "react-router-dom";
import UserContext from "contexts/UserContext";
import { useContext } from "react";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const { isAuth } = useContext(UserContext);
  isLoggedIn = isAuth;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

//check how <Outlet /> is used
