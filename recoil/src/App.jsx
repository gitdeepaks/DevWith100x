import "./App.css";
import { CounterAtom } from "./hooks/useCounter";
import { useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  return (
    <div className="">
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(CounterAtom);

  return <div className="">{count}</div>;
}

function Decrease() {
  const setCount = useSetRecoilState(CounterAtom);
  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div className="">
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(CounterAtom);

  function increase() {
    setCount((c) => c + 1);
  }
  return (
    <div className="">
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
