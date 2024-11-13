import { useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive calculations....", counter2);
    return counter * counter;
  };

  const squaredValueUseMeme = useMemo(squaredValue, [counter]);
  const squaredValueCallBack = useCallback(squaredValue, []);

  return (
    <div>
      <p>UseMemo and UseCallback hooks</p>
      <h2>Squared Counter : {squaredValueUseMeme}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <h2>Squared Counter : {counter2}</h2>
      <button
        onClick={() => {
          setCounter2(counter2 - 1);
        }}
      >
        Decrement counter2
      </button>

      <h2>Squared Counter : {squaredValueCallBack()}</h2>
    </div>
  );
}

export default App;
