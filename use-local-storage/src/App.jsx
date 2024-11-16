import "./App.css";
import { useLocalStorage } from "./hooks/use-localstorage";

const App = () => {
  const handleLogout = () => {
    remove();
    set("");
  };
  const [value, set, remove] = useLocalStorage("username", "Guest");

  return (
    <div className="content">
      <h3>Hello Name</h3>
      <input
        type="text"
        placeholder="Enter the name"
        value={value}
        onChange={(e) => e.target.value}
      />
      <button onClick={handleLogout} className="btn">
        Logout
      </button>
    </div>
  );
};

export default App;
