import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

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

//Context
import { UserContextProvider } from "contexts/UserContext";

function App() {
  //Check is user is authenticated/valid toke and not random token
  // useEffect(() => {
  //   axios.get("auth/auth").then((response) => {
  //     if (response.data.error) {
  //       console.log("SetAuth(false)");
  //     } else {
  //       console.log("SetAuth(true)");
  //     }
  //   });
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

          <Route path="profile/*" element={<Profile />}></Route>
          <Route path="notifications" element={<Notification />}></Route>
          <Route
            path="personality-details"
            element={<PersonalityTest />}
          ></Route>
          <Route path="recommendations" element={<Recommendations />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
