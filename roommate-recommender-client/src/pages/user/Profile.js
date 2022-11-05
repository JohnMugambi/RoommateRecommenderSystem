import { Route, Routes } from "react-router-dom";
import SideNav from "components/common/SideNav";
import profileImage from "assets/images/profile-image.jpg";
import { useApiGetRequest } from "api/useApiGetRequest";
import Preference from "./Preferences";

const Profile = () => {
  const { data, error, isLoaded } = useApiGetRequest("/profile");
  console.log(isLoaded);
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
              <button className="mr-5 w-24 bg-primary-blue text-primary-white py-2 px-8 rounded">
                Edit
              </button>
            </div>
          </div>
          <div className="mt-10">
            <div className=" my-3 flex items-center">
              <p className="w-64">Email:</p>
              <p className="shadow p-3 w-[40vw] rounded">{data.email}</p>
            </div>
            <div className="my-9 flex items-center">
              <p className="w-64">Date of Birth:</p>
              <p className="shadow p-3 w-[40vw]  rounded">{data.dob}</p>
            </div>
          </div>
          <div>
            <Routes>
              <Route path="preferences" element={<Preference />}></Route>
            </Routes>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
