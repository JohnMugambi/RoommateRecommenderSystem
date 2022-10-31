import "./App.css";
import { Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <div className="w-full text-gray-800">
      <Nav />
      <div className="mx-auto py-2 z-0 pt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="logout" element={<LogOut />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
