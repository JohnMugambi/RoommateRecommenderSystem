import SideNav from "components/common/SideNav";
const PersonalityTest = () => {
  return (
    <div>
      <div className="w-full h-full px-4  flex flex-col relative">
        <div className="pt-3 pl-10">
          <p className="text-2xl font-medium ml-5">Personality Details</p>
        </div>
        <div className="flex pr-10 relative">
          <div className="sticky top-10 h-[60vh] w-80  p-5 pt-0 ">
            <SideNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
