import { useState } from "react";
import SideNav from "components/common/SideNav";
import PersnalityTestForm from "components/personalitytest/PersonalityTestForm";

const PersonalityTest = () => {
  const [isEditable, setIsEditable] = useState(false);
  const handleEdit = () => {
    //this enable all edit field
    setIsEditable(true);
  };
  const handleCloseEdit = (edit) => {
    //disables editing
    setIsEditable(edit);
  };

  return (
    <div>
      <div className="w-full h-full px-4  flex flex-col relative">
        <div className="pt-3 pl-10">
          <p className="text-2xl font-medium ml-5">Personality Details</p>
        </div>
        <div className="flex relative">
          <div className="sticky top-10 h-[60vh] w-80  p-5 pt-0 ">
            <SideNav />
          </div>
          <div className="w-[70%] flex-row justify-end items-end">
            {/* Openness, Conscientiousness, Extroversion, 
            Agreeableness, and Neuroticism */}

            <div className="mb-5 flex justify-end">
              {!isEditable && (
                <button
                  className="w-24 bg-primary-blue text-primary-white py-2 px-8 rounded"
                  onClick={() => {
                    handleEdit();
                  }}
                >
                  Edit
                </button>
              )}
            </div>
            <div className=" border shadow-lg border shadow-gray-100 rounded flex-1  pt-5 p-5 w-full">
              <PersnalityTestForm
                canEdit={isEditable}
                closeEditing={handleCloseEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
