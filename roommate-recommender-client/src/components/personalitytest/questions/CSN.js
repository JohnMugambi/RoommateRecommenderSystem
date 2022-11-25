import { useState } from "react";
const CSN = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [csn1, setCsn1] = useState(0);
  const [csn2, setCsn2] = useState(0);
  const [csn3, setCsn3] = useState(0);
  const [csn4, setCsn4] = useState(0);
  const [csn5, setCsn5] = useState(0);
  const [csn6, setCsn6] = useState(0);
  const [csn7, setCsn7] = useState(0);
  const [csn8, setCsn8] = useState(0);
  const [csn9, setCsn9] = useState(0);
  const [csn10, setCsn10] = useState(0);

  //   console.log("est1", csn1);
  //   console.log("est2", csn2);
  //   console.log("est3", csn3);
  //   console.log("est4", csn4);
  //   console.log("est5", csn5);
  //   console.log("est6", csn6);
  //   console.log("est7", csn7);
  //   console.log("est8", csn8);
  //   console.log("est9", csn9);
  //   console.log("est10", csn10);

  return (
    <>
      {/* csn1 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn1"
              name="csn1"
              value="1"
              checked={csn1 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn1"
              name="csn1"
              value="2"
              checked={csn1 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn1"
              name="csn1"
              value="3"
              checked={csn1 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn1"
              name="csn1"
              value="4"
              checked={csn1 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn1"
              name="csn1"
              value="5"
              checked={csn1 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn1(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn2 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn2"
              name="csn2"
              value="1"
              checked={csn2 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn2"
              name="csn2"
              value="2"
              checked={csn2 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn2"
              name="csn2"
              value="3"
              checked={csn2 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn2"
              name="csn2"
              value="4"
              checked={csn2 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn2"
              name="csn2"
              value="5"
              checked={csn2 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn2(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn3 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn3"
              name="csn3"
              value="1"
              checked={csn3 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn3"
              name="csn3"
              value="2"
              checked={csn3 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn3"
              name="csn3"
              value="3"
              checked={csn3 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn3"
              name="csn3"
              value="4"
              checked={csn3 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn3"
              name="csn3"
              value="5"
              checked={csn3 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn3(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn4 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn4"
              name="csn4"
              value="1"
              checked={csn4 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn4"
              name="csn4"
              value="2"
              checked={csn4 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn4"
              name="csn4"
              value="3"
              checked={csn4 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn4"
              name="csn4"
              value="4"
              checked={csn4 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn4"
              name="csn4"
              value="5"
              checked={csn4 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn4(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn5 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn5"
              name="csn5"
              value="1"
              checked={csn5 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn5"
              name="csn5"
              value="2"
              checked={csn5 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn5"
              name="csn5"
              value="3"
              checked={csn5 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn5"
              name="csn5"
              value="4"
              checked={csn5 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn5"
              name="csn5"
              value="5"
              checked={csn5 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn5(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn6 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn6"
              name="csn6"
              value="1"
              checked={csn6 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn6"
              name="csn6"
              value="2"
              checked={csn6 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn6"
              name="csn6"
              value="3"
              checked={csn6 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn6"
              name="csn6"
              value="4"
              checked={csn6 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn6"
              name="csn6"
              value="5"
              checked={csn6 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn6(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn7 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn7"
              name="csn7"
              value="1"
              checked={csn7 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn7"
              name="csn7"
              value="2"
              checked={csn7 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn7"
              name="csn7"
              value="3"
              checked={csn7 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn7"
              name="csn7"
              value="4"
              checked={csn7 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn7"
              name="csn7"
              value="5"
              checked={csn7 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn7(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn8 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn8"
              name="csn8"
              value="1"
              checked={csn8 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn8"
              name="csn8"
              value="2"
              checked={csn8 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn8"
              name="csn8"
              value="3"
              checked={csn8 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn8"
              name="csn8"
              value="4"
              checked={csn8 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn8"
              name="csn8"
              value="5"
              checked={csn8 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn8(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn9 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn9"
              name="csn9"
              value="1"
              checked={csn9 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn9"
              name="csn9"
              value="2"
              checked={csn9 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn9"
              name="csn9"
              value="3"
              checked={csn9 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn9"
              name="csn9"
              value="4"
              checked={csn9 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn9"
              name="csn9"
              value="5"
              checked={csn9 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn9(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* csn10 */}
      <div className="py-3 px-5 flex w-full">
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="csn10"
              name="csn10"
              value="1"
              checked={csn10 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn10"
              name="csn10"
              value="2"
              checked={csn10 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn10"
              name="csn10"
              value="3"
              checked={csn10 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn10"
              name="csn10"
              value="4"
              checked={csn10 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="csn10"
              name="csn10"
              value="5"
              checked={csn10 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setCsn10(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CSN;
