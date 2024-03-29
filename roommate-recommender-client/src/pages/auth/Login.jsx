import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { setIsAuth, setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    await axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.msg) {
          setMsg(response.data.msg);
        } else {
          sessionStorage.setItem("accessToken", response.data);
          setMsg("Logged In Successfully.");
          setIsAuth(true);
          setUser(email);
          navigate("/profile");
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response) {
            setMsg(error.response.data.msg);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error :", error.message);
          }
          setMsg(error.response.data.msg);
        }
      });
  };
  return (
    <div>
      <section className="mt-4 mb-10">
        <div className="flex flex-col items-center justify-center mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow p-10">
            <div className="p-16 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-primary-black">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <p>{msg}</p>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-black">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-black">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-00 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-700 dark:text-gray-400">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to=""
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white hover:bg-primary-blue bg-bg-footer-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-700 dark:text-gray-600">
                  Don’t have an account yet?
                  <Link to="/register">
                    <span className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
                      Register
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
