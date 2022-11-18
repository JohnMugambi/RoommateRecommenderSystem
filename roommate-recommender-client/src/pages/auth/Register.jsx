import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "contexts/UserContext";

const Register = () => {
  const { setIsAuth, setUser } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/auth/register", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          dob: dob,
          password: password,
          confPassword: confPassword,
        })
        .then((response) => {
          if (response.data.msg) {
            setMsg(response.data.msg);
          } else {
            sessionStorage.setItem("accessToken", response.data);
            setMsg("Registered Successfully.");
            setIsAuth(true);
            setUser(email);
            navigate("/profile");
          }
        });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <section className="mt-4 mb-10">
        <div className="flex flex-col items-center justify-center mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow p-10">
            <div className="p-16 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-primary-black">
                Register an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleRegister}
              >
                <p className="has-text-centered">{msg}</p>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-black">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john"
                    required=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-black">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="doe"
                    required=""
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-black">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-black">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="doe"
                    required=""
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
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
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-primary-black">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confpassword"
                    id="confpassword"
                    placeholder="••••••••"
                    className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white hover:bg-primary-blue bg-bg-footer-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-700 dark:text-gray-600">
                  Have an account?
                  <Link to="/login">
                    <span className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
                      Sign in
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

export default Register;
