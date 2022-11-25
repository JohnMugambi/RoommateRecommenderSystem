import { useState } from "react";
const OPN = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [opn1, setOpn1] = useState(0);
  const [opn2, setOpn2] = useState(0);
  const [opn3, setOpn3] = useState(0);
  const [opn4, setOpn4] = useState(0);
  const [opn5, setOpn5] = useState(0);
  const [opn6, setOpn6] = useState(0);
  const [opn7, setOpn7] = useState(0);
  const [opn8, setOpn8] = useState(0);
  const [opn9, setOpn9] = useState(0);
  const [opn10, setOpn10] = useState(0);

  //   console.log("est1", opn1);
  //   console.log("est2", opn2);
  //   console.log("est3", opn3);
  //   console.log("est4", opn4);
  //   console.log("est5", opn5);
  //   console.log("est6", opn6);
  //   console.log("est7", opn7);
  //   console.log("est8", opn8);
  //   console.log("est9", opn9);
  //   console.log("est10", opn10);

  return (
    <>
      {/* opn1 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn1"
              name="opn1"
              value="1"
              checked={opn1 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn1"
              name="opn1"
              value="2"
              checked={opn1 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn1"
              name="opn1"
              value="3"
              checked={opn1 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn1"
              name="opn1"
              value="4"
              checked={opn1 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn1"
              name="opn1"
              value="5"
              checked={opn1 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn1(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn2 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn2"
              name="opn2"
              value="1"
              checked={opn2 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn2"
              name="opn2"
              value="2"
              checked={opn2 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn2"
              name="opn2"
              value="3"
              checked={opn2 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn2"
              name="opn2"
              value="4"
              checked={opn2 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn2"
              name="opn2"
              value="5"
              checked={opn2 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn2(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn3 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn3"
              name="opn3"
              value="1"
              checked={opn3 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn3"
              name="opn3"
              value="2"
              checked={opn3 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn3"
              name="opn3"
              value="3"
              checked={opn3 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn3"
              name="opn3"
              value="4"
              checked={opn3 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn3"
              name="opn3"
              value="5"
              checked={opn3 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn3(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn4 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn4"
              name="opn4"
              value="1"
              checked={opn4 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn4"
              name="opn4"
              value="2"
              checked={opn4 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn4"
              name="opn4"
              value="3"
              checked={opn4 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn4"
              name="opn4"
              value="4"
              checked={opn4 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn4"
              name="opn4"
              value="5"
              checked={opn4 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn4(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn5 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn5"
              name="opn5"
              value="1"
              checked={opn5 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn5"
              name="opn5"
              value="2"
              checked={opn5 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn5"
              name="opn5"
              value="3"
              checked={opn5 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn5"
              name="opn5"
              value="4"
              checked={opn5 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn5"
              name="opn5"
              value="5"
              checked={opn5 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn5(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn6 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn6"
              name="opn6"
              value="1"
              checked={opn6 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn6"
              name="opn6"
              value="2"
              checked={opn6 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn6"
              name="opn6"
              value="3"
              checked={opn6 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn6"
              name="opn6"
              value="4"
              checked={opn6 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn6"
              name="opn6"
              value="5"
              checked={opn6 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn6(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn7 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn7"
              name="opn7"
              value="1"
              checked={opn7 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn7"
              name="opn7"
              value="2"
              checked={opn7 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn7"
              name="opn7"
              value="3"
              checked={opn7 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn7"
              name="opn7"
              value="4"
              checked={opn7 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn7"
              name="opn7"
              value="5"
              checked={opn7 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn7(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn8 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn8"
              name="opn8"
              value="1"
              checked={opn8 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn8"
              name="opn8"
              value="2"
              checked={opn8 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn8"
              name="opn8"
              value="3"
              checked={opn8 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn8"
              name="opn8"
              value="4"
              checked={opn8 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn8"
              name="opn8"
              value="5"
              checked={opn8 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn8(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn9 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn9"
              name="opn9"
              value="1"
              checked={opn9 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn9"
              name="opn9"
              value="2"
              checked={opn9 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn9"
              name="opn9"
              value="3"
              checked={opn9 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn9"
              name="opn9"
              value="4"
              checked={opn9 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn9"
              name="opn9"
              value="5"
              checked={opn9 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn9(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* opn10 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="opn10"
              name="opn10"
              value="1"
              checked={opn10 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn10"
              name="opn10"
              value="2"
              checked={opn10 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn10"
              name="opn10"
              value="3"
              checked={opn10 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn10"
              name="opn10"
              value="4"
              checked={opn10 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="opn10"
              name="opn10"
              value="5"
              checked={opn10 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setOpn10(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OPN;
