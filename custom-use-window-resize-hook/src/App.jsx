import "./App.css";
import { useWindowResize } from "./hooks/use-window-resize";

const App = () => {
  const { width, height } = useWindowResize();
  return (
    <div className="content">
      <h2>use-window-resize</h2>
      <p>width : {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default App;
