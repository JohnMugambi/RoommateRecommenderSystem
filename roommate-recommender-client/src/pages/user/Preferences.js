import UserContext from "contexts/UserContext";
import { useApiGetRequest } from "api/useApiGetRequest";

import axios from "axios";
import { useState, useContext, useEffect } from "react";

const Preference = () => {
  //Get users preferences if he exists

  const { data, error, isLoaded } = useApiGetRequest("/preferences");

  const { user } = useContext(UserContext);
  const [isEditable, setIsEditable] = useState(false);

  //form states data === null
  // ? data.gender === "male"
  //   ? "male"
  //   : data.gender === "female"
  //   ? "female"
  //   : "test2"
  // : "test1"
  const [gender, setGender] = useState("mimi");
  console.log("gender", gender);
  const [foodpref, setFoodpref] = useState("");
  const [culinaryskills, setCulinarySkills] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [smoking, setSmoking] = useState("");
  const [pets, setPets] = useState("");
  const [sleepPatterns, setSleepPatterns] = useState("");

  // const loadRadios = () => {
  //   setGender(data.gender);
  //   setFoodpref(data.foodpref);
  //   setCulinarySkills(data.culinaryskills);
  //   setAlcohol(data.alcohol);
  //   setSmoking(data.smoking);
  //   setPets(data.pets);
  //   setSleepPatterns(data.sleeppatterns);
  // };
  useEffect(() => {
    if (data !== null) {
      setIsEditable(false);

      setGender(data.gender);
      setFoodpref(data.foodpref);
      setCulinarySkills(data.culinaryskills);
      setAlcohol(data.alcohol);
      setSmoking(data.smoking);
      setPets(data.pets);
      setSleepPatterns(data.sleeppatterns);
    } else {
      setIsEditable(true);
    }
  }, [data]);

  const [msg, setMsg] = useState("");

  const handleEdit = () => {
    //this enable all edit field
    setIsEditable(true);
  };
  //handle sumiting of prefernces
  const handlePreferencesSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("/preferences/preferences", {
          email: user,
          gender,
          foodpref,
          culinaryskills,
          alcohol,
          smoking,
          pets,
          sleepPatterns,
        })
        .then((response) => {
          if (response.data.msg) {
            setMsg(response.data.msg);
            setIsEditable(false);
          }
        });
    } catch (error) {
      console.log("The error is : ", error);
    }
  };

  return (
    <div className=" w-full h-full  flex flex-col relative">
      {!isLoaded && <div>Loading..</div>}
      <div className="pt-3">
        <p className="text-2xl font-medium">Preference List</p>
      </div>
      <div className="mt-5 shadow-lg border shadow-gray-200 rounded py-4 px-10">
        <p>{msg}</p>

        <div className=" flex items-center justify-between w-full ">
          <p className="text-2sm">Select your Roommate Preference</p>
          {!isEditable && (
            <button
              className=" w-24 bg-primary-blue text-primary-white py-2 px-8 rounded"
              onClick={() => {
                handleEdit();
              }}
            >
              Edit
            </button>
          )}
        </div>
        <form onSubmit={handlePreferencesSubmit}>
          {/*---------------- Gender Preference------------- */}
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Gender</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  disabled={!isEditable}
                  checked={gender === "male" ? true : false}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                 <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                 <label htmlFor="female">Female</label>
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
                  checked={foodpref === "vegan" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setFoodpref(e.target.value);
                  }}
                />
                  <label htmlFor="vegan">Vegan</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="nonvegan"
                  name="foodpreference"
                  value="nonvegan"
                  checked={foodpref === "nonvegan" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setFoodpref(e.target.value);
                  }}
                />
                 <label htmlFor="nonvegan">Non-Vegan</label>
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
                  checked={culinaryskills === "average" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setCulinarySkills(e.target.value);
                  }}
                />
                  <label htmlFor="culinaryskills">Average</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="culinaryskills-excellent"
                  name="culinaryskills"
                  value="excellent"
                  checked={culinaryskills === "excellent" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setCulinarySkills(e.target.value);
                  }}
                />
                 <label htmlFor="female">excellent</label>
              </div>
            </div>
          </div>
          {/* ---------------------------Alcohol -------------------- */}
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
                  checked={alcohol === "yes" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setAlcohol(e.target.value);
                  }}
                />
                  <label htmlFor="drinks-alcohol">Drinks alcohol</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="no-alcohol"
                  name="alcohol"
                  value="no"
                  checked={alcohol === "no" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setAlcohol(e.target.value);
                  }}
                />
                 <label htmlFor="no-alcohol">Does not drink alcohol</label>
              </div>
            </div>
          </div>
          {/* -----------------------smoking ------------------- */}
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Smoking</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input
                  type="radio"
                  id="smoker"
                  name="smoking"
                  value="yes"
                  checked={smoking === "yes" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setSmoking(e.target.value);
                  }}
                />
                 <label htmlFor="smoker">Smoker</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="non-smoker"
                  name="smoking"
                  value="no"
                  checked={smoking === "no" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setSmoking(e.target.value);
                  }}
                />
                 <label htmlFor="non-smoker">Non-Smoker</label>
              </div>
            </div>
          </div>
          {/* ------------------pets ----------------- */}
          <div className="border-b flex p-6">
            <div className="flex-1">
              <p>Pets</p>
            </div>
            <div className="flex flex-1 space-y-2 flex-col">
              <div className="flex items-center  space-x-2">
                <input
                  type="radio"
                  id="pets-no"
                  name="pets"
                  value="yes"
                  checked={pets === "yes" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setPets(e.target.value);
                  }}
                />
                 <label htmlFor="pets-no">Pets Allowed</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="pets-yes"
                  name="pets"
                  value="no"
                  checked={pets === "no" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setPets(e.target.value);
                  }}
                />
                 <label htmlFor="pets-yes">Pets not allowed</label>
              </div>
            </div>
          </div>
          {/* -------------------------sleep patterns------ */}
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
                  checked={sleepPatterns === "early bird" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setSleepPatterns(e.target.value);
                  }}
                />
                  <label htmlFor="early-bird">Early bird</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="night-owl"
                  name="sleeppatterns"
                  value="night owl"
                  checked={sleepPatterns === "night owl" ? true : false}
                  disabled={!isEditable}
                  onChange={(e) => {
                    setSleepPatterns(e.target.value);
                  }}
                />
                 <label htmlFor="night-owl">Night owl</label>
              </div>
            </div>
          </div>
          {isEditable && (
            <button
              type="submit"
              className="mr-5 w-24 bg-primary-blue text-primary-white py-2 px-8 rounded"
              onClick={handlePreferencesSubmit}
            >
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Preference;
