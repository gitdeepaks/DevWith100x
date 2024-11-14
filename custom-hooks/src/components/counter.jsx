import React from "react";
import { useCounter } from "../hooks/use-ciunter";

const Counter = () => {
  const { count, decrement, increment, reset } = useCounter(0, 10);
  return (
    <div>
      <p>Counter : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
