import { useState } from "react";

// To output a dispatch within this file, the useDispatch hook must be imported.
// To access a state, the useSelector hook must be imported.
import { useSelector, useDispatch } from "react-redux";

// All those reducers that you want to have access to for a dispatch must first be imported from the corresponding slices:
import {
  addiere1,
  subtrahiere1,
  multipliziereMitAction,
} from "./features/numberSlice";
import { addActivity, changeActivity } from "./features/activitySlice";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [activityNameInput, setActivityNameInput] = useState("");
  const [activitySpaßInput, setActivitySpaßInput] = useState(0);

  // To output a dispatch, the useDispatch hook must be accessed, which comes from react-redux.
  const dispatch = useDispatch();

  // The useSelector hook can be used to access the slices that are stored in the store. The current states are linked to that.
  const numberState = useSelector((state) => state.numberReducers.value);
  const activityState = useSelector((state) => state.activityReducers.value);

  const addActivityFunction = () => {
    if (activityNameInput == "") {
      alert("Name der Aktivität fehlt!");
      return;
    }

    // A dispatch is issued here, where we refer to with the "addActivity" reducer. As soon as this dispatch has gone out, the associated state (activitySlice) is adjusted.
    dispatch(
      addActivity({
        // To ensure a more usable ID, I use the current date in seconds here - this is also not recommended, but is sufficient in this case.
        id: `${activityNameInput} ${new Date().getSeconds()}`,
        name: activityNameInput,
        spaßLevel: activitySpaßInput,
      })
    );
  };

  return (
    <div style={{ fontSize: "125px" }}>
      {numberState}
      <button onClick={() => dispatch(addiere1())}>Addiere 1</button>
      <button onClick={() => dispatch(subtrahiere1())}>Subtrahiere 1</button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(multipliziereMitAction(inputValue))}>
        Multipliziere mit {inputValue}
      </button>

      <div>
        <input
          type="text"
          value={activityNameInput}
          onChange={(e) => setActivityNameInput(e.target.value)}
        />
        <input
          type="number"
          value={activitySpaßInput}
          onChange={(e) => setActivitySpaßInput(e.target.value)}
        />
        <button onClick={addActivityFunction}>
          Jetzt Aktivität hinzufügen
        </button>
      </div>

      <div>
        {activityState.map((activity) => {
          return (
            <ul key={activity.id}>
              <li>
                <b>Id:</b>
                {activity.id}
              </li>
              <li>
                <b>Name:</b>
                {activity.name}
              </li>
              <li>
                <b>Spaß-Level:</b>
                {activity.spaßLevel}
                <button onClick={() => dispatch(changeActivity(activity.id))}>
                  Spaß-Level erhöhen
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
