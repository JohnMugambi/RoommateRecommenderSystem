import { useState, useContext, useEffect } from "react";
import UserContext from "contexts/UserContext";
import axios from "axios";
import { useApiGetRequest } from "api/useApiGetRequest";

// import EXT from "./questions/EXT";
// import EST from "./questions/EST";
// import OPN from "./questions/OPN";
// import CSN from "./questions/CSN";
// import AGR from "./questions/AGR";

const PersnalityTest = () => {
  // const personalityQuestions = [
  //   "I am the life of the party.",
  //   "I feel little concern for others.",
  //   "I am always prepared.",
  //   "I get stressed out easily. ",
  //   "I have a rich vocabulary. ",
  //   "I don't talk a lot. 		",
  //   "I am interested in people.",
  //   "I leave my belongings around. ",
  //   "I am relaxed most of the time. ",
  //   "I have difficulty understanding abstract ideas. ",
  //   "I feel comfortable around people. ",
  //   "I insult people. ",
  //   "I pay attention to details. ",
  //   "I worry about things. 	",
  //   "I have a vivid imagination. ",
  //   "I keep in the background. ",
  //   "I sympathize with others' feelings. ",
  //   "I make a mess of things.",
  //   "I seldom feel blue. ",
  //   "I am not interested in abstract ideas. ",
  //   "I start conversations.",
  //   "I am not interested in other people's problems.",
  //   "I get chores done right away.",
  //   "I am easily disturbed. ",
  //   "I have excellent ideas. ",
  //   "I have little to say. ",
  //   "I have a soft heart.",
  //   "I often forget to put things back in their proper place. ",
  //   "I get upset easily. ",
  //   "I do not have a good imagination.",
  //   "I talk to a lot of different people at parties. ",
  //   "I am not really interested in others. ",
  //   "I like order. ",
  //   "I change my mood a lot.",
  //   "I am quick to understand things.",
  //   "I don't like to draw attention to myself.",
  //   "I take time out for others. ",
  //   "I shirk my duties. ",
  //   "I have frequent mood swings. ",
  //   "I use difficult words.",
  //   "I don't mind being the center of attention. ",
  //   "I feel others' emotions. ",
  //   "I follow a schedule. ",
  //   "I get irritated easily. ",
  //   "I spend time reflecting on things.",
  //   "I am quiet around strangers. ",
  //   "I make people feel at ease. ",
  //   "I am exacting in my work. ",
  //   "I often feel blue.",
  //   "I am full of ideas.",
  // ];
  //get user filled form

  const { data, error, isLoaded } = useApiGetRequest("/preferences");

  // const { data, error, isLoaded } = useApiGetRequest("/personality");
  // console.log(data);

  const { user } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const [isEditable, setIsEditable] = useState(true);

  //Extroversion
  const [ext1, setExt1] = useState("");
  const [ext2, setExt2] = useState("");
  const [ext3, setExt3] = useState("");
  const [ext4, setExt4] = useState("");
  const [ext5, setExt5] = useState("");
  const [ext6, setExt6] = useState("");
  const [ext7, setExt7] = useState("");
  const [ext8, setExt8] = useState("");
  const [ext9, setExt9] = useState("");
  const [ext10, setExt10] = useState("");
  //est
  const [est1, setEst1] = useState("");
  const [est2, setEst2] = useState("");
  const [est3, setEst3] = useState("");
  const [est4, setEst4] = useState("");
  const [est5, setEst5] = useState("");
  const [est6, setEst6] = useState("");
  const [est7, setEst7] = useState("");
  const [est8, setEst8] = useState("");
  const [est9, setEst9] = useState("");
  const [est10, setEst10] = useState("");
  //Openness
  const [opn1, setOpn1] = useState("");
  const [opn2, setOpn2] = useState("");
  const [opn3, setOpn3] = useState("");
  const [opn4, setOpn4] = useState("");
  const [opn5, setOpn5] = useState("");
  const [opn6, setOpn6] = useState("");
  const [opn7, setOpn7] = useState("");
  const [opn8, setOpn8] = useState("");
  const [opn9, setOpn9] = useState("");
  const [opn10, setOpn10] = useState("");
  //Consientiousness
  const [csn1, setCsn1] = useState("");
  const [csn2, setCsn2] = useState("");
  const [csn3, setCsn3] = useState("");
  const [csn4, setCsn4] = useState("");
  const [csn5, setCsn5] = useState("");
  const [csn6, setCsn6] = useState("");
  const [csn7, setCsn7] = useState("");
  const [csn8, setCsn8] = useState("");
  const [csn9, setCsn9] = useState("");
  const [csn10, setCsn10] = useState("");
  //Agreeablness
  const [agr1, setAgr1] = useState("");
  const [agr2, setAgr2] = useState("");
  const [agr3, setAgr3] = useState("");
  const [agr4, setAgr4] = useState("");
  const [agr5, setAgr5] = useState("");
  const [agr6, setAgr6] = useState("");
  const [agr7, setAgr7] = useState("");
  const [agr8, setAgr8] = useState("");
  const [agr9, setAgr9] = useState("");
  const [agr10, setAgr10] = useState("");

  //
  useEffect(() => {
    if (data !== null) {
      setIsEditable(false);

      setExt1(ext1);
      setExt2(ext2);
      setExt3(ext3);
      setExt4(ext4);
      setExt5(ext5);
      setExt6(ext6);
      setExt7(ext7);
      setExt8(ext8);
      setExt9(ext9);
      setExt10(ext10);
      setEst1(est1);
      setEst2(est2);
      setEst3(est3);
      setEst4(est4);
      setEst5(est5);
      setEst6(est6);
      setEst7(est7);
      setEst8(est8);
      setEst9(est9);
      setEst10(est10);
      setOpn1(opn1);
      setOpn2(opn2);
      setOpn3(opn3);
      setOpn4(opn4);
      setOpn5(opn5);
      setOpn6(opn6);
      setOpn7(opn7);
      setOpn8(opn8);
      setOpn9(opn9);
      setOpn10(opn10);
      setCsn1(csn1);
      setCsn2(csn2);
      setCsn3(csn3);
      setCsn4(csn4);
      setCsn5(csn5);
      setCsn6(csn6);
      setCsn7(csn7);
      setCsn8(csn8);
      setCsn9(csn9);
      setCsn10(csn10);
      setAgr1(agr1);
      setAgr2(agr2);
      setAgr3(agr3);
      setAgr4(agr4);
      setAgr5(agr5);
      setAgr6(agr6);
      setAgr7(agr7);
      setAgr8(agr8);
      setAgr9(agr9);
      setAgr10(agr10);
    } else {
      setIsEditable(true);
    }
  }, [data]);

  //Form submission
  const handlePersonalityQnsSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      await axios
        .post("/personality/personality-questions", {
          email: user,
          ext1: ext1,
          ext2: ext2,
          ext3: ext3,
          ext4: ext4,
          ext5: ext5,
          ext6: ext6,
          ext7: ext7,
          ext8: ext8,
          ext9: ext9,
          ext10: ext10,
          est1: est1,
          est2: est2,
          est3: est3,
          est4: est4,
          est5: est5,
          est6: est6,
          est7: est7,
          est8: est8,
          est9: est9,
          est10: est10,
          agr1: agr1,
          agr2: agr2,
          agr3: agr3,
          agr4: agr4,
          agr5: agr5,
          agr6: agr6,
          agr7: agr7,
          agr8: agr8,
          agr9: agr9,
          agr10: agr10,
          csn1: csn1,
          csn2: csn2,
          csn3: csn3,
          csn4: csn4,
          csn5: csn5,
          csn6: csn6,
          csn7: csn7,
          csn8: csn8,
          csn9: csn9,
          csn10: csn10,
          opn1: opn1,
          opn2: opn2,
          opn3: opn3,
          opn4: opn4,
          opn5: opn5,
          opn6: opn6,
          opn7: opn7,
          opn8: opn8,
          opn9: opn9,
          opn10: opn10,
        })
        .then((response) => {
          if (response.data.msg) {
            setMsg(response.data.msg);
          } else {
            setMsg("Profile preferences update successfully");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="">
        {msg}
              {!isLoaded && <div>Loading..</div>}

        <form onSubmit={handlePersonalityQnsSubmit}>
          <div className="flex w-full mb-1">
            <div className=" w-11/12">
              {/* <p>I often forget to put things back in their proper place.</p> */}
            </div>
            <div className="w-full flex justify-between">
              <div className="-ml-5">Disagree</div>
              <div className="-ml-2">Neutral</div>
              <div>Agree</div>
            </div>
          </div>
          <div>
            {/* --------------------------------------<EXT /> -------------------------------------------------*/}
            <>
              {/* ext1 */}
              <div
                className="bg-gray-100 py-3 px-5
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
                  <p>I don't talk a lot.</p>
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
                className=" bg-gray-100 py-3 px-5
       flex w-full"
              >
                <div className=" w-11/12">
                  <p>I feel comfortable around people..</p>
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
                  <p>I keep in the background.</p>
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
                className=" bg-gray-100 py-3 px-5
       flex w-full"
              >
                <div className=" w-11/12">
                  <p>I start conversations.</p>
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
                  <p>I have little to say.</p>
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
                className=" bg-gray-100 py-3 px-5
       flex w-full"
              >
                <div className=" w-11/12">
                  <p>I talk to a lot of different people at parties.</p>
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
                  <p>I don't like to draw attention to myself.</p>
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
                className="  bg-gray-100 py-3 px-5
       flex w-full"
              >
                <div className=" w-11/12">
                  <p>I don't mind being the center of attention.</p>
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
                  <p>I am quiet around strangers.</p>
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
            {/*---------------------------------------<EST />------------------------------------------------- */}
            <>
              {/* est1 */}
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className="  w-11/12">
                  <p>I get stressed out easily.</p>
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
                  <p>I am relaxed most of the time.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className="  w-11/12">
                  <p>I worry about things.</p>
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
                  <p>I seldom feel blue.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className="  w-11/12">
                  <p>I am easily disturbed.</p>
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
                  <p>I get upset easily.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className="  w-11/12">
                  <p>I change my mood a lot.</p>
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
                  <p>I have frequent mood swings.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className="  w-11/12">
                  <p>I get irritated easily.</p>
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
                  <p>I often feel blue.</p>
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
            {/*---------------------------------------<AGR />------------------------------------------------ */}
            <>
              {/* agr1 */}
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I feel little concern for others.</p>
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
                  <p>I am interested in people.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I insult people.</p>
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
                  <p>I sympathize with others' feelings</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I am not interested in other people's problems.</p>
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
                  <p>I have a soft heart.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I am not really interested in others.</p>
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
                  <p>I take time out for others.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I feel others' emotions.</p>
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
                  <p>I make people feel at ease.</p>
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
            {/* ---------------------------------------<CSN />---------------------------------------------- */}
            <>
              {/* csn1 */}
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I am always prepared.</p>
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
                  <p>I leave my belongings around.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I pay attention to details.</p>
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
                  <p>I make a mess of things.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I get chores done right away.</p>
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
                  <p>
                    I often forget to put things back in their proper place.
                  </p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I like order.</p>
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
                  <p>I shirk my duties.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I follow a schedule.</p>
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
                  <p>I am exacting in my work.</p>
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
            {/*----------------------------------------<OPN />--------------------------------------------- */}
            <>
              {/* opn1 */}
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I have a rich vocabulary.</p>
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
                  <p>I have difficulty understanding abstract ideas.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I have a vivid imagination.</p>
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
                  <p>I am not interested in abstract ideas.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I have excellent ideas.</p>
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
                  <p>I do not have a good imagination.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I am quick to understand things.</p>
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
                  <p>I use difficult words.</p>
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
              <div className=" bg-gray-100 py-3 px-5 flex w-full">
                <div className=" w-11/12">
                  <p>I spend time reflecting on things.</p>
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
                  <p>I am full of ideas.</p>
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
          </div>
          {isEditable && (
            <button
              type="submit"
              className="mr-5 mt-5 text-center w-full bg-primary-blue hover:bg-gray-200 hover:text-black ease-in-out duration-100 text-primary-white py-2 px-8 rounded"
              onClick={handlePersonalityQnsSubmit}
            >
              Submit
            </button>
          )}
        </form>
        {/* <form onSubmit={handleTestSubmit}>
          <input
            type="text"
            value="Jon"
            name="john"
            onChange={(e) => seteamit(e.target.value)}
          />

          <button
            type="submit"
            className="mr-5 mt-5 text-center w-full bg-primary-blue hover:bg-gray-200 hover:text-black ease-in-out duration-100 text-primary-white py-2 px-8 rounded"
            onClick={() => {
              handleTestSubmit();
            }}
          >
            Submit
          </button>
        </form> */}
      </div>
    </>
  );
};

export default PersnalityTest;
