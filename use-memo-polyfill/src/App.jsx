import { useState, useMemo } from "react";
import "./App.css";
import { useCustomMemo } from "./hooks/use-cutom-memo";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive calculation.....");

    return counter * counter;
  };

  const memoSqValues = useCustomMemo(squaredValue, [counter]);

  return (
    <div className="content">
      <h2>Counter : {counter}</h2>
      <h2>Squared Counter : {memoSqValues}</h2>
      <button onClick={() => setCounter(counter + 1)} className="button">
        Increment
      </button>

      <h2>Counter2 : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)} className="button">
        Deccrement
      </button>
    </div>
  );
};

export default App;
