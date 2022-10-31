import { useLocation } from "react-router-dom";

export const useGetLocation = () => {
  const location = useLocation();
  //   console.log("hash", location.hash);
  //   console.log("pathname", location.pathname);
  //   console.log("search", location.search);
  return location.pathname;
};
