import { Link, Navigate } from "react-router-dom";
import { useScrollPosition } from "hooks/useScrollPosition";
import { useGetLocation } from "hooks/useGetLocation";
import { useContext, useState } from "react";
import UserContext from "contexts/UserContext";
import { TiUser } from "react-icons/ti";
function Nav() {
  const scrollPosition = useScrollPosition();
  let location = useGetLocation();

  const { isAuth } = useContext(UserContext);
  const [isUserIconOpen, setIsUserIconOpen] = useState(false);

  function navClassNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav
      className={navClassNames(
        // scrollPosition > 100 && location !== "/"
        //   ? "shadow bg-white"
        //   : "shadow-none",
        // "transition-colors sticky top-0 flex justify-between items-center p-4 z-50 w-full "
        location === "/"
          ? scrollPosition > 100
            ? "shadow bg-white"
            : "shadow-none"
          : "shadow bg-white",
        " transition-colors sticky top-0 flex justify-between items-center p-4 z-50 w-full "
      )}
    >
      <div className="text-primary-blue ml-10">
        <Link to="/">
          <p className="text-xl md:text-3xl font-semibold ml-5">Roomi</p>
        </Link>
      </div>
      <div
        className={navClassNames(
          // scrollPosition > 100 ? "text-primary-black" : "text-primary-black",
          // "mr-16 "
          location === "/"
            ? scrollPosition > 100
              ? "text-primary-black flex"
              : "text-primary-white flex"
            : "text-primary-black flex"
        )}
      >
        <span className="mx-6 flex justify-between items-center hover:text-gray-300 ease-in-out duration-200">
          <Link to="about">About</Link>
        </span>
        <span className="mx-6 flex justify-between items-center hover:text-gray-300 ease-in-out duration-200">
          <Link to="contact">Contact</Link>
        </span>
        {!isAuth && (
          <Link
            to="login"
            className="w-24 bg-primary-blue text-primary-white py-2 px-4 rounded-full
                 hover:text-gray-300 text-center"
          >
            Sign in
          </Link>
        )}
        {/* Profile and logout button popup */}
        <span className="mx-6 flex flex justify-between items-center">
          {isAuth && (
            <div
              onMouseEnter={() => setIsUserIconOpen((prev) => !prev)}
              onMouseLeave={() => setIsUserIconOpen((prev) => !prev)}
            >
              <TiUser
                size="30px"
                className="text-primary-blue cursor-pointer"
              />
              <div
                className={
                  isUserIconOpen
                    ? "border bg-white shadow-md absolute ml-[-100px] mt-0 text-primary-black"
                    : "hidden"
                }
              >
                <div className="px-10 py-3 hover:text-gray-300 ease-in-out duration-200">
                  <Link to="profile">Profile</Link>
                </div>
                <div className="px-10 py-3 hover:text-gray-300 ease-in-out duration-200">
                  <Link to="logout">Logout</Link>
                </div>
              </div>
            </div>
          )}
        </span>
      </div>
    </nav>
  );
}

export default Nav;
