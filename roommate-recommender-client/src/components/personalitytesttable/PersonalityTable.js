import EXT from "./questions/EXT";
import EST from "./questions/EST";
import OPN from "./questions/OPN";
import CSN from "./questions/CSN";
import AGR from "./questions/AGR";

const PersnalityTestTable = () => {
  const personalityQuestions = [
    "I am the life of the party.",
    "I feel little concern for others.",
    "I am always prepared.",
    "I get stressed out easily. ",
    "I have a rich vocabulary. ",
    "I don't talk a lot. 		",
    "I am interested in people.",
    "I leave my belongings around. ",
    "I am relaxed most of the time. ",
    "I have difficulty understanding abstract ideas. ",
    "I feel comfortable around people. ",
    "I insult people. ",
    "I pay attention to details. ",
    "I worry about things. 	",
    "I have a vivid imagination. ",
    "I keep in the background. ",
    "I sympathize with others' feelings. ",
    "I make a mess of things.",
    "I seldom feel blue. ",
    "I am not interested in abstract ideas. ",
    "I start conversations.",
    "I am not interested in other people's problems.",
    "I get chores done right away.",
    "I am easily disturbed. ",
    "I have excellent ideas. ",
    "I have little to say. ",
    "I have a soft heart.",
    "I often forget to put things back in their proper place. ",
    "I get upset easily. ",
    "I do not have a good imagination.",
    "I talk to a lot of different people at parties. ",
    "I am not really interested in others. ",
    "I like order. ",
    "I change my mood a lot.",
    "I am quick to understand things.",
    "I don't like to draw attention to myself.",
    "I take time out for others. ",
    "I shirk my duties. ",
    "I have frequent mood swings. ",
    "I use difficult words.",
    "I don't mind being the center of attention. ",
    "I feel others' emotions. ",
    "I follow a schedule. ",
    "I get irritated easily. ",
    "I spend time reflecting on things.",
    "I am quiet around strangers. ",
    "I make people feel at ease. ",
    "I am exacting in my work. ",
    "I often feel blue.",
    "I am full of ideas.",
  ];

  // const EXTRowItem = (props) => {
  //   return (
  //     <tr>
  //       <td className="py-3">
  //         <p>{props.value}</p>
  //       </td>
  //       <td className="text-center">
  //         <input type="radio" id="ext1" name="ext1" value="1" />
  //       </td>
  //       <td className="text-center">
  //         <input type="radio" id="ext1" name="ext1" value="2" />
  //       </td>
  //       <td className="text-center">
  //         <input type="radio" id="ext1" name="ext1" value="3" />
  //       </td>
  //       <td className="text-center">
  //         <input type="radio" id="ext1" name="ext1" value="4" />
  //       </td>
  //       <td className="text-center">
  //         <input type="radio" id="ext1" name="ext1" value="5" />
  //       </td>
  //     </tr>
  //   );
  // };

  // const TableList = (props) => {
  //   const personalityQns = props.personalityQns;
  //   const tableListItems = personalityQns.map((item) => (
  //     <EXTRowItem key={item} value={item} />
  //   ));
  //   return <>{tableListItems}</>;
  // };
  return (
    <>
      <div className="border">
        <form>
          <div className="border border-yellow-600 flex w-full mb-1">
            <div className="border border-indigo-400 w-11/12">
              {/* <p>I often forget to put things back in their proper place.</p> */}
            </div>
            <div className=" border w-full flex justify-between">
              <div>Disagree</div>
              <div>Neutral</div>
              <div>Agree</div>
            </div>
          </div>
          {/* ext1 */}
          <EXT />
          <EST />
          <AGR />
          <CSN />
          <OPN />
        </form>
      </div>
    </>
  );
};

export default PersnalityTestTable;
