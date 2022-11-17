import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

//Lit of pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Register from "./pages/auth/Register";
import LogOut from "./pages/auth/Logout";
import Login from "./pages/auth/Login";
import Profile from "./pages/user/Profile";
import Notification from "pages/user/Notifications";
import PersonalityTest from "pages/user/PersonalityTest";
import Recommendations from "pages/user/Recommendations";

//Protected routes components
import ProtectedRoute from "components/protectedroutes/Protected";

import axios from "axios";

//Context
import { UserContextProvider } from "contexts/UserContext";

function App() {
  //Check is user is authenticated/valid token and not random token
  // useEffect(() => {
  //   axios
  //     .get("auth/auth", {
  //       headers: {
  //         accessToken: sessionStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         console.log("SetAuth(false) in App");
  //         console.log(response.data.error);
  //       } else {
  //         console.log("SetAuth(true) in App");
  //       }
  //     });
  // }, []);

  return (
    <div className="w-full text-gray-800">
      <UserContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="logout" element={<LogOut />}></Route>

          <Route
            path="profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="notifications"
            element={
              <ProtectedRoute>
                <Notification />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="personality-details"
            element={
              <ProtectedRoute>
                <PersonalityTest />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="recommendations"
            element={
              <ProtectedRoute>
                <Recommendations />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
