import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); //maintains users state
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    axios
      .get("auth/auth", {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setIsAuth(false);
          console.log("User is not logged in -Context is false");
        } else {
          setIsAuth(true);
          console.log("SetAuth(true) User is not logged in -Context is tru");
        }
      });
  }, []);

  //function to handle login
  const login = (user) => {
    setUser(user);
    setIsAuth(true);
  };

  //function to handle logout
  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// export const useAuth = () => {
//   return useContext(UserContext);
// };

export default UserContext;
