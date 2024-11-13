import { forwardRef, useImperativeHandle, useRef } from "react";
import "./App.css";

const App = () => {
  const childRef = useRef(null);
  return (
    <div className="content">
      <p>Use Imarative Handle</p>
      <button onClick={() => childRef.current.focusInput()}>
        Focus on input
      </button>
      <ChildComponenet ref={childRef} />
    </div>
  );
};

const ChildComponenet = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });

  return <input type="text" name="" id="" ref={inputRef} />;
});

export default App;
