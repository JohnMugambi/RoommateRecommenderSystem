import { Route, Routes } from "react-router-dom";
import SideNav from "components/common/SideNav";
import profileImage from "assets/images/profile-image.jpg";
import { useApiGetRequest } from "api/useApiGetRequest";
import Preference from "./Preferences";
import { useState } from "react";

const Profile = () => {
  const { data, error, isLoaded } = useApiGetRequest("/profile");

  const [email, setEmail] = useState(data.email);
  const [dob, setDOB] = useState(data.dob);

  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSubmitEditedProfile = () => {
    setIsEditable(false);
    console.log("You can tedit the profile now");
  };

  // console.log(isLoaded);
  return (
    <div className="w-full h-full px-4  flex flex-col relative">
      <div className="pt-3 pl-10">
        <p className="text-2xl font-medium ml-5">Profile</p>
      </div>
      <p>{error}</p>
      <div className="flex pr-10 relative">
        <div className="sticky top-10 h-screen w-80  p-5 pt-0 ">
          <SideNav />
        </div>
        <div className="  flex-1  pt-5 p-5">
          {!isLoaded && <div>Loading..</div>}
          <div className=" w-full h-40 bg-primary-blue rounded-tl-[50px]"></div>
          <div className=" flex flex-row border-b pb-4">
            <div className="h-28 w-32 border-4 border-white rounded-full overflow-hidden -mt-12 ml-6">
              <img className="object-cover h-full" src={profileImage} alt="" />
            </div>
            <div className=" ml-4 flex items-center justify-between w-full ">
              <p className="text-2xl">
                {data.firstname} {data.lastname}
              </p>
              {!isEditable && (
                <button
                  className="mr-5 w-24 bg-primary-blue text-primary-white py-2 px-8 rounded"
                  onClick={() => {
                    handleEdit();
                  }}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="mt-10">
            <div className=" my-3 flex items-center">
              <p className="w-64">Email:</p>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                value={isEditable ? email : data.email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditable}
              />
            </div>
            <div className="my-9 flex items-center">
              <p className="w-64">Date of Birth:</p>
              <input
                type="date"
                name="dob"
                id="dob"
                className="bg-gray-50  shadow text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="doe"
                required=""
                value={isEditable ? dob : data.dob}
                onChange={(e) => setDOB(e.target.value)}
                disabled={!isEditable}
              />
            </div>
            {isEditable && (
              <button
                type="submit"
                className="mr-5 w-24 bg-primary-blue text-primary-white py-2 px-8 rounded"
                onClick={() => {
                  handleSubmitEditedProfile();
                }}
              >
                Save
              </button>
            )}
          </div>
          <div>
            <Routes>
              <Route path="preferences" element={<Preference />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
