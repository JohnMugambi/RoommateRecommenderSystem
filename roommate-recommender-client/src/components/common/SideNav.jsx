import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sticky top-9 mx-10 mt-7 h-full border-r flex space-y-5 flex-col ">
      <div className="my-3"></div>
      <div className="my-3">
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "shadow py-2 pl-3 pr-5 rounded bg-gray-100" : "p-3 pr-5"
          }
        >
          Notifications
        </NavLink>
      </div>
      <div className="my-3">
        <NavLink
          to="/profile/preferences"
          className={({ isActive }) =>
            isActive ? "shadow py-2 pl-3 pr-5 rounded bg-gray-100" : "p-3 pr-5"
          }
        >
          My Preferences
        </NavLink>
      </div>
      <div className="my-3">
        <NavLink
          to="/personality-details"
          className={({ isActive }) =>
            isActive ? "shadow py-2 pl-3 pr-5 rounded bg-gray-100" : "p-3 pr-5"
          }
        >
          Personality Details
        </NavLink>
      </div>
      <div className="my-3">
        <NavLink
          to="/recommendations"
          className={({ isActive }) =>
            isActive ? "shadow py-2 pl-3 pr-5 rounded bg-gray-100" : "p-3 pr-5"
          }
        >
          Recommendations
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
