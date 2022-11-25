import { useState } from "react";
const EXT = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [ext1, setExt1] = useState(0);
  const [ext2, setExt2] = useState(0);
  const [ext3, setExt3] = useState(0);
  const [ext4, setExt4] = useState(0);
  const [ext5, setExt5] = useState(0);
  const [ext6, setExt6] = useState(0);
  const [ext7, setExt7] = useState(0);
  const [ext8, setExt8] = useState(0);
  const [ext9, setExt9] = useState(0);
  const [ext10, setExt10] = useState(0);

  //   console.log("est1", ext1);
  //   console.log("est2", ext2);
  //   console.log("est3", ext3);
  //   console.log("est4", ext4);
  //   console.log("est5", ext5);
  //   console.log("est6", ext6);
  //   console.log("est7", ext7);
  //   console.log("est8", ext8);
  //   console.log("est9", ext9);
  //   console.log("est10", ext10);

  return (
    <>
      {/* ext1 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext1"
              name="ext1"
              value="1"
              checked={ext1 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext1"
              name="ext1"
              value="2"
              checked={ext1 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext1"
              name="ext1"
              value="3"
              checked={ext1 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext1"
              name="ext1"
              value="4"
              checked={ext1 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt1(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext1"
              name="ext1"
              value="5"
              checked={ext1 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt1(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext2 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext2"
              name="ext2"
              value="1"
              checked={ext2 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext2"
              name="ext2"
              value="2"
              checked={ext2 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext2"
              name="ext2"
              value="3"
              checked={ext2 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext2"
              name="ext2"
              value="4"
              checked={ext2 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt2(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext2"
              name="ext2"
              value="5"
              checked={ext2 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt2(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext3 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext3"
              name="ext3"
              value="1"
              checked={ext3 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext3"
              name="ext3"
              value="2"
              checked={ext3 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext3"
              name="ext3"
              value="3"
              checked={ext3 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext3"
              name="ext3"
              value="4"
              checked={ext3 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt3(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext3"
              name="ext3"
              value="5"
              checked={ext3 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt3(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext4 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext4"
              name="ext4"
              value="1"
              checked={ext4 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext4"
              name="ext4"
              value="2"
              checked={ext4 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext4"
              name="ext4"
              value="3"
              checked={ext4 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext4"
              name="ext4"
              value="4"
              checked={ext4 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt4(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext4"
              name="ext4"
              value="5"
              checked={ext4 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt4(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext5 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext5"
              name="ext5"
              value="1"
              checked={ext5 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext5"
              name="ext5"
              value="2"
              checked={ext5 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext5"
              name="ext5"
              value="3"
              checked={ext5 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext5"
              name="ext5"
              value="4"
              checked={ext5 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt5(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext5"
              name="ext5"
              value="5"
              checked={ext5 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt5(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext6 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext6"
              name="ext6"
              value="1"
              checked={ext6 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext6"
              name="ext6"
              value="2"
              checked={ext6 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext6"
              name="ext6"
              value="3"
              checked={ext6 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext6"
              name="ext6"
              value="4"
              checked={ext6 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt6(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext6"
              name="ext6"
              value="5"
              checked={ext6 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt6(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext7 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext7"
              name="ext7"
              value="1"
              checked={ext7 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext7"
              name="ext7"
              value="2"
              checked={ext7 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext7"
              name="ext7"
              value="3"
              checked={ext7 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext7"
              name="ext7"
              value="4"
              checked={ext7 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt7(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext7"
              name="ext7"
              value="5"
              checked={ext7 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt7(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext8 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext8"
              name="ext8"
              value="1"
              checked={ext8 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext8"
              name="ext8"
              value="2"
              checked={ext8 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext8"
              name="ext8"
              value="3"
              checked={ext8 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext8"
              name="ext8"
              value="4"
              checked={ext8 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt8(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext8"
              name="ext8"
              value="5"
              checked={ext8 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt8(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext9 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext9"
              name="ext9"
              value="1"
              checked={ext9 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext9"
              name="ext9"
              value="2"
              checked={ext9 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext9"
              name="ext9"
              value="3"
              checked={ext9 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext9"
              name="ext9"
              value="4"
              checked={ext9 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt9(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext9"
              name="ext9"
              value="5"
              checked={ext9 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt9(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      {/* ext10 */}
      <div
        className="py-3 px-5
       flex w-full"
      >
        <div className=" w-11/12">
          <p>I am the life of the party.</p>
        </div>
        <div className=" w-full flex justify-between">
          <div>
            <input
              type="radio"
              id="ext10"
              name="ext10"
              value="1"
              checked={ext10 === "1" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext10"
              name="ext10"
              value="2"
              checked={ext10 === "2" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext10"
              name="ext10"
              value="3"
              checked={ext10 === "3" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext10"
              name="ext10"
              value="4"
              checked={ext10 === "4" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt10(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="ext10"
              name="ext10"
              value="5"
              checked={ext10 === "5" ? true : false}
              disabled={!isEditable}
              onChange={(e) => {
                setExt10(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EXT;
