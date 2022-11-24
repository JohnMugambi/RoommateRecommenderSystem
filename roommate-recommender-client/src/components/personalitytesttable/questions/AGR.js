import { useState } from "react";
const AGR = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [agr1, setAgr1] = useState(0);
  const [agr2, setAgr2] = useState(0);
  const [agr3, setAgr3] = useState(0);
  const [agr4, setAgr4] = useState(0);
  const [agr5, setAgr5] = useState(0);
  const [agr6, setAgr6] = useState(0);
  const [agr7, setAgr7] = useState(0);
  const [agr8, setAgr8] = useState(0);
  const [agr9, setAgr9] = useState(0);
  const [agr10, setAgr10] = useState(0);

  //   console.log("est1", agr1);
  //   console.log("est2", agr2);
  //   console.log("est3", agr3);
  //   console.log("est4", agr4);
  //   console.log("est5", agr5);
  //   console.log("est6", agr6);
  //   console.log("est7", agr7);
  //   console.log("est8", agr8);
  //   console.log("est9", agr9);
  //   console.log("est10", agr10);

  return (
    <>
      {/* agr1 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr1"
              name="agr1"
              value="1"
              checked={agr1 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr1"
              name="agr1"
              value="2"
              checked={agr1 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr1"
              name="agr1"
              value="3"
              checked={agr1 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr1"
              name="agr1"
              value="4"
              checked={agr1 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr1"
              name="agr1"
              value="5"
              checked={agr1 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr1(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr2 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr2"
              name="agr2"
              value="1"
              checked={agr2 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr2"
              name="agr2"
              value="2"
              checked={agr2 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr2"
              name="agr2"
              value="3"
              checked={agr2 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr2"
              name="agr2"
              value="4"
              checked={agr2 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr2"
              name="agr2"
              value="5"
              checked={agr2 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr2(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr3 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr3"
              name="agr3"
              value="1"
              checked={agr3 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr3"
              name="agr3"
              value="2"
              checked={agr3 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr3"
              name="agr3"
              value="3"
              checked={agr3 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr3"
              name="agr3"
              value="4"
              checked={agr3 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr3"
              name="agr3"
              value="5"
              checked={agr3 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr3(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr4 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr4"
              name="agr4"
              value="1"
              checked={agr4 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr4"
              name="agr4"
              value="2"
              checked={agr4 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr4"
              name="agr4"
              value="3"
              checked={agr4 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr4"
              name="agr4"
              value="4"
              checked={agr4 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr4"
              name="agr4"
              value="5"
              checked={agr4 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr4(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr5 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr5"
              name="agr5"
              value="1"
              checked={agr5 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr5"
              name="agr5"
              value="2"
              checked={agr5 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr5"
              name="agr5"
              value="3"
              checked={agr5 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr5"
              name="agr5"
              value="4"
              checked={agr5 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr5"
              name="agr5"
              value="5"
              checked={agr5 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr5(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr6 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr6"
              name="agr6"
              value="1"
              checked={agr6 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr6"
              name="agr6"
              value="2"
              checked={agr6 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr6"
              name="agr6"
              value="3"
              checked={agr6 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr6"
              name="agr6"
              value="4"
              checked={agr6 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr6"
              name="agr6"
              value="5"
              checked={agr6 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr6(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr7 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr7"
              name="agr7"
              value="1"
              checked={agr7 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr7"
              name="agr7"
              value="2"
              checked={agr7 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr7"
              name="agr7"
              value="3"
              checked={agr7 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr7"
              name="agr7"
              value="4"
              checked={agr7 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr7"
              name="agr7"
              value="5"
              checked={agr7 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr7(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr8 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr8"
              name="agr8"
              value="1"
              checked={agr8 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr8"
              name="agr8"
              value="2"
              checked={agr8 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr8"
              name="agr8"
              value="3"
              checked={agr8 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr8"
              name="agr8"
              value="4"
              checked={agr8 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr8"
              name="agr8"
              value="5"
              checked={agr8 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr8(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr9 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr9"
              name="agr9"
              value="1"
              checked={agr9 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr9"
              name="agr9"
              value="2"
              checked={agr9 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr9"
              name="agr9"
              value="3"
              checked={agr9 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr9"
              name="agr9"
              value="4"
              checked={agr9 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr9"
              name="agr9"
              value="5"
              checked={agr9 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr9(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* agr10 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="agr10"
              name="agr10"
              value="1"
              checked={agr10 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr10"
              name="agr10"
              value="2"
              checked={agr10 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr10"
              name="agr10"
              value="3"
              checked={agr10 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr10"
              name="agr10"
              value="4"
              checked={agr10 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="agr10"
              name="agr10"
              value="5"
              checked={agr10 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setAgr10(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AGR;
