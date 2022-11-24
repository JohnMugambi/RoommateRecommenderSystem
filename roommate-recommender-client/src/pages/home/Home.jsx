import image1 from "assets/images/room-with-beds.jpg";
import image2 from "assets/images/elegant-room.jpg";
//import image3 from "assets/images/room-with-beds-chair.jpg";
import { GiBrain } from "react-icons/gi";
import { RiStarSmileLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UserContext from "contexts/UserContext";
import { useContext } from "react";

function Home() {
  let navigate = useNavigate();

  const { isAuth } = useContext(UserContext);
  console.log("Auth state : ", isAuth);
  const routeChange = (url) => {
    let path = url;
    navigate(path);
  };

  return (
    <div className=" pt-5 w-full h-full">
      {/* Hero section */}
      <div className="flex -mt-[5.5rem] px-4">
        {/* Hero text*/}
        <div className="flex flex-1 items-center justify-center align-middle">
          <div>
            <h3 className="text-[50px] font-bold">
              Find <span className="text-primary-blue ">Roommates</span> <br />
              You'll Love & <br />
              <span className="text-primary-blue ">Like You</span>
            </h3>
            <div className="flex mt-8">
              {!isAuth && (
                <>
                  <button
                    type="button"
                    className="w-36 bg-primary-blue text-primary-white py-2 px-8 rounded-full
                 hover:text-gray-300"
                    onClick={() => {
                      let path = "login";
                      routeChange(path);
                    }}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="border border-primary-blue w-36 py-2 px-8 ml-4 rounded-full
                hover:border-bg-footer-blue hover:text-bg-footer-blue"
                    onClick={() => {
                      let path = "register";
                      routeChange(path);
                    }}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex-1 w-full pt-1">
          <div className="overflow-hidden h-[80vh] flex justify-end bg-blend-darken">
            <div className="w-9/12 rounded-bl-[200px] overflow-hidden relative">
              <div className="absolute w-full h-full object-fit bg-black opacity-30"></div>

              <img
                src={image1}
                alt="Room with beds"
                className=" object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About us section */}
      <div className="flex mt-16 mb-10 px-24">
        <div className="h-3/5 flex-1 overflow-hidden mx-auto">
          <img
            src={image2}
            alt=""
            className="rounded-tr-[200px] object-cover h-[100vh] w-full"
          />
        </div>
        <div className="flex-1 pl-10 flex  items-center">
          <div className="flex flex-col space-y-10">
            <div>
              <p className="text-[2rem]">
                Why choose Roomi to find the perfect Roommate for you
              </p>
            </div>
            <div className="flex items-center">
              <RiStarSmileLine size="100px" />
              <div className="ml-4">
                <p className="text-[1.5rem] font-bold">Quality</p>
                <p className="leading-8 font-light">
                  Inspite of huge web traffic,a nd complex computations, our
                  solutions balance between smooth running website and timely
                  response times.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <GiBrain size="130px" />
              <div className="ml-4">
                <p className="text-[1.5rem] font-bold">Innovation</p>
                <p className="leading-8 font-light">
                  To find the best Roommate matches, we at Roomie have employed
                  the latest techniques in technology to find the most
                  compatible matches, using our tried and tested matching
                  algorithms.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MdOutlineSupportAgent size="100px" />
              <div className="ml-4">
                <p className="text-[1.5rem] font-bold">Support</p>
                <p className="leading-8 font-light">
                  Our team is always available to attend to any problems arising
                  during the use of this product, aiming to provide the best
                  experience for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Message Section
      <div className="mt-10">
        <img src={image3} alt="" />
        <div>this is the message</div>
      </div> */}
    </div>
  );
}

export default Home;
