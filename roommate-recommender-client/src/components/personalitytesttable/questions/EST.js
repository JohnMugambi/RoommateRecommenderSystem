import { useState } from "react";
const EST = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [est1, setEst1] = useState(0);
  const [est2, setEst2] = useState(0);
  const [est3, setEst3] = useState(0);
  const [est4, setEst4] = useState(0);
  const [est5, setEst5] = useState(0);
  const [est6, setEst6] = useState(0);
  const [est7, setEst7] = useState(0);
  const [est8, setEst8] = useState(0);
  const [est9, setEst9] = useState(0);
  const [est10, setEst10] = useState(0);

  //   console.log("est1", est1);
  //   console.log("est2", est2);
  //   console.log("est3", est3);
  //   console.log("est4", est4);
  //   console.log("est5", est5);
  //   console.log("est6", est6);
  //   console.log("est7", est7);
  //   console.log("est8", est8);
  //   console.log("est9", est9);
  //   console.log("est10", est10);

  return (
    <>
      {/* est1 */}
      <div className="py-3 px-5 bg-primary-black flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est1"
              name="est1"
              value="1"
              checked={est1 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est1"
              name="est1"
              value="2"
              checked={est1 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est1"
              name="est1"
              value="3"
              checked={est1 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est1"
              name="est1"
              value="4"
              checked={est1 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est1"
              name="est1"
              value="5"
              checked={est1 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst1(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est2 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est2"
              name="est2"
              value="1"
              checked={est2 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est2"
              name="est2"
              value="2"
              checked={est2 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est2"
              name="est2"
              value="3"
              checked={est2 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est2"
              name="est2"
              value="4"
              checked={est2 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est2"
              name="est2"
              value="5"
              checked={est2 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst2(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est3 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est3"
              name="est3"
              value="1"
              checked={est3 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est3"
              name="est3"
              value="2"
              checked={est3 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est3"
              name="est3"
              value="3"
              checked={est3 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est3"
              name="est3"
              value="4"
              checked={est3 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est3"
              name="est3"
              value="5"
              checked={est3 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst3(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est4 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est4"
              name="est4"
              value="1"
              checked={est4 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est4"
              name="est4"
              value="2"
              checked={est4 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est4"
              name="est4"
              value="3"
              checked={est4 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est4"
              name="est4"
              value="4"
              checked={est4 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est4"
              name="est4"
              value="5"
              checked={est4 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst4(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est5 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est5"
              name="est5"
              value="1"
              checked={est5 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est5"
              name="est5"
              value="2"
              checked={est5 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est5"
              name="est5"
              value="3"
              checked={est5 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est5"
              name="est5"
              value="4"
              checked={est5 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est5"
              name="est5"
              value="5"
              checked={est5 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst5(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est6 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est6"
              name="est6"
              value="1"
              checked={est6 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est6"
              name="est6"
              value="2"
              checked={est6 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est6"
              name="est6"
              value="3"
              checked={est6 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est6"
              name="est6"
              value="4"
              checked={est6 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est6"
              name="est6"
              value="5"
              checked={est6 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst6(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est7 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est7"
              name="est7"
              value="1"
              checked={est7 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est7"
              name="est7"
              value="2"
              checked={est7 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est7"
              name="est7"
              value="3"
              checked={est7 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est7"
              name="est7"
              value="4"
              checked={est7 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est7"
              name="est7"
              value="5"
              checked={est7 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst7(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est8 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est8"
              name="est8"
              value="1"
              checked={est8 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est8"
              name="est8"
              value="2"
              checked={est8 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est8"
              name="est8"
              value="3"
              checked={est8 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est8"
              name="est8"
              value="4"
              checked={est8 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est8"
              name="est8"
              value="5"
              checked={est8 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst8(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est9 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est9"
              name="est9"
              value="1"
              checked={est9 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est9"
              name="est9"
              value="2"
              checked={est9 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est9"
              name="est9"
              value="3"
              checked={est9 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est9"
              name="est9"
              value="4"
              checked={est9 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est9"
              name="est9"
              value="5"
              checked={est9 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst9(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* est10 */}
      <div className="py-3 px-5 flex w-full">
        <div className="  w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="est10"
              name="est10"
              value="1"
              checked={est10 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est10"
              name="est10"
              value="2"
              checked={est10 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est10"
              name="est10"
              value="3"
              checked={est10 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est10"
              name="est10"
              value="4"
              checked={est10 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="est10"
              name="est10"
              value="5"
              checked={est10 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setEst10(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EST;
