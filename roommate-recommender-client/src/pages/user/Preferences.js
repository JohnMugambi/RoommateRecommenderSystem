import SideNav from "components/common/SideNav";
import profileImage from "assets/images/profile-image.jpg";
import { useApiGetRequest } from "api/useApiGetRequest";

const Preference = () => {
  const isLoaded = true;
  return (
    <div className=" w-full h-full  flex flex-col relative">
      {!isLoaded && <div>Loading..</div>}
      <div className="pt-3">
        <p className="text-2xl font-medium">Preference List</p>
      </div>
      <div className="mt-5 shadow-lg border shadow-gray-200 rounded py-4 px-10">
        <div className=" flex items-center justify-between w-full ">
          <p className="text-2sm">Select your Roommate Preference</p>
          <button className=" w-24 bg-primary-blue text-primary-white py-2 px-8 rounded">
            Edit
          </button>
        </div>
        <form action="">
          {/*---------------- Gender Preference------------- */}
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Gender</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input type="radio" id="male" name="gender" value="male" /> {" "}
                <label for="male">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="female" name="gender" value="female" /> 
                <label for="female">Female</label>
              </div>
            </div>
          </div>
          {/* ----------------Food preference ----------------*/}
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Food Preference</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input
                  type="radio"
                  id="vegan"
                  name="foodpreference"
                  value="vegan"
                />
                  <label for="vegan">Vegan</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="nonvegan"
                  name="foodpreference"
                  value="nonvegan"
                />
                 <label for="nonvegan">Non-Vegan</label>
              </div>
            </div>
          </div>
          {/* ----------------Culinary Skills Prefernce */}
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Culinary Skills</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input
                  type="radio"
                  id="culinaryskills-average"
                  name="culinaryskills"
                  value="average"
                />
                  <label for="culinaryskills">Average</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="culinaryskills-excellent"
                  name="culinaryskills"
                  value="excellent"
                />
                 <label for="female">excellent</label>
              </div>
            </div>
          </div>
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Alcohol</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input
                  type="radio"
                  id="drinks-alcohol"
                  name="alcohol"
                  value="yes"
                />
                  <label for="drinks-alcohol">Drinks alcohol</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="no-alcohol" name="alcohol" value="no" />
                 <label for="no-alcohol">Does not drink alcohol</label>
              </div>
            </div>
          </div>
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Smoking</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input type="radio" id="smoker" name="smoking" value="yes" /> {" "}
                <label for="smoker">Smoker</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="non-smoker" name="smoking" value="no" />
                 <label for="non-smoker">Non-Smoker</label>
              </div>
            </div>
          </div>
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Pets</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input type="radio" id="pets-no" name="pets" value="yes" /> {" "}
                <label for="pets-no">Pets Allowed</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="pets-yes" name="pets" value="no" /> 
                <label for="pets-yes">Pets not allowed</label>
              </div>
            </div>
          </div>
          <div className="flex p-6">
            <div className="flex-1">
              <p>Sleep Patterns</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input
                  type="radio"
                  id="early-bird"
                  name="sleeppatterns"
                  value="early bird"
                />
                  <label for="early-bird">Early bird</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="night-owl"
                  name="sleeppatterns"
                  value="night owl"
                />
                 <label for="night-owl">Night owl</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preference;
