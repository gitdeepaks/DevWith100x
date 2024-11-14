import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>custom hooks</h2>
      <Counter />
    </div>
  );
}

export default App;
