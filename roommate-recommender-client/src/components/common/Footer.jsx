import UserContext from "contexts/UserContext";
import { useContext } from "react";
const Footer = () => {
  const { isAuth } = useContext(UserContext);
  return (
    <footer className="text-center text-primary-white bg-[#164e63] mt-4">
      <div className="p-6 pt-0 w-full ">
        <div
          className={
            isAuth ? "hidden" : "flex justify-center items-center w-full pt-6"
          }
        >
          <p className="mr-4">Register for free</p>
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-white  font-medium text-xs 
            leading-tight uppercase rounded-full hover:bg-white hover:bg-opacity-5 
            focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Sign up!
          </button>
        </div>
      </div>
      <div className="text-center pb-4">© 2022 Copyright:</div>
    </footer>
  );
};

export default Footer;
