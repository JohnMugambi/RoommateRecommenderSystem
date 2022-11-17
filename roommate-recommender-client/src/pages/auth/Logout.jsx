import { useEffect } from "react";
import UserContext from "contexts/UserContext";
import { useContext } from "react";

const LogOut = () => {
  const { setIsAuth } = useContext(UserContext);
  setIsAuth(false);

  useEffect(() => {
    sessionStorage.removeItem("accessToken");
  }, []);

  return <div>You are now logged out</div>;
};

export default LogOut;
