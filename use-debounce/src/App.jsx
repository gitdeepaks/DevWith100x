import { useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/use-debounce";

const App = () => {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 1000, () => {
    console.log("function call");
  });

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="content">
      <input
        type="text"
        value={input}
        placeholder="Type in the box"
        onChange={handleInputChange}
      />
      <p>Text: {debouncedValue}</p>
    </div>
  );
};

export default App;
