import { useEffect } from "react";
import UserContext from "contexts/UserContext";
import { useContext } from "react";

const LogOut = () => {
  const { setIsAuth } = useContext(UserContext);

  useEffect(() => {
    sessionStorage.removeItem("accessToken");
    setIsAuth(false);
  }, [setIsAuth]);

  return <div>You are now logged out</div>;
};

export default LogOut;
