import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const inputRef = useRef(null);
  console.log(inputRef.current);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <p>{ref.current}</p>
      <button
        onClick={() => {
          ref.current += 1;
          setCount(count + 1);
        }}
      >
        increment
      </button>

      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = 5;
        }}
      >
        Set Focus
      </button>
    </>
  );
}

export default App;
