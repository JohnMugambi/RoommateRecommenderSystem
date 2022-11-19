import SideNav from "components/common/SideNav";
import PersnalityTestTable from "components/personalitytesttable/PersonalityTable";

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
          <div className=" border flex-1  pt-5 p-5 w-full">
            {/* Openness, Conscientiousness, Extroversion, 
            Agreeableness, and Neuroticism */}

            <PersnalityTestTable />
            <form action="">
              <div>
                <label htmlFor="xt"></label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
