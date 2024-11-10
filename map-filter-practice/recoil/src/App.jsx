import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterAtom, evenSelector } from "./hooks/useCounter";

const App = () => {
  return (
    <div>
      <Buttons />
      <Counter />
      <IsEven />
    </div>
  );
};

function Buttons() {
  const [count, setCount] = useRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div className="">
      <button onClick={increase}>{count}Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const counter = useRecoilValue(counterAtom);
  return <div className="">{counter}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div className="">{even ? "Even" : "Odd"}</div>;
}

export default App;
