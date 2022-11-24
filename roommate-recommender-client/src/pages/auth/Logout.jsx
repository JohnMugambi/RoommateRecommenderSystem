import { useEffect } from "react";
import UserContext from "contexts/UserContext";
import { useContext } from "react";

const LogOut = () => {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    sessionStorage.removeItem("accessToken");
    logout();
  }, []);

  return <div>You are now logged out</div>;
};

export default LogOut;
