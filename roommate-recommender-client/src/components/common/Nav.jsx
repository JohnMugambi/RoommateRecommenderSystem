import { Link } from "react-router-dom";
import { useScrollPosition } from "hooks/useScrollPosition";
import { useGetLocation } from "hooks/useGetLocation";
import { useContext } from "react";
import UserContext from "contexts/UserContext";
function Nav() {
  const scrollPosition = useScrollPosition();
  let location = useGetLocation();

  //const { isAuth } = useContext(UserContext);

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
              ? "text-primary-black"
              : "text-primary-white"
            : "text-primary-black"
        )}
      >
        <span className="mx-6">
          <Link to="/">Home</Link>
        </span>
        <span className="mx-6">
          <Link to="about">About</Link>
        </span>
        <span className="mx-6">
          <Link to="contact">Contact</Link>
        </span>
      </div>
    </nav>
  );
}

export default Nav;
