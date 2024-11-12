import { createContext } from "react";
import "./App.css";
import { useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext("dark");
const UserContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <UserContext.Provider value={{ isLoggedin: false }}>
        <div>
          <h3>
            <u>useContext Hook</u>
          </h3>

          <h5>Question 1: What is useContext in React?</h5>
          {/*
        - Used to consume values ( like data or functions ) from a context created by 
        `createContext()`.
        - It allows functional components to access context values without prop drilling.
        - In scenarios where passing props through multiple levels of components is impractical.
       */}
          <GrandparentComponent data={"light"} />

          <h5>Question 2: Create an app to change theme in React JS?</h5>
          {/* Discussed in next lesson */}

          <h5>
            Question 3: Can you have multiple contexts in a single component?
          </h5>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

// Prop Drilling
// GrandparentComponent
const GrandparentComponent = ({ data }) => {
  return <ParentComponent data={data} />;
};

// ParentComponent
const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

// ChildComponent
const ChildComponent = ({ data }) => {
  return <GrandchildComponent data={data} />;
};

// GrandchildComponent
const GrandchildComponent = ({ data }) => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { isLoggedin } = useContext(UserContext);

  return (
    <div>
      <p>{data}</p>
      <p>value from context : {theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
      <p>{isLoggedin ? "User is Loggen in" : "User is not logged in"}</p>
    </div>
  );
};

export default App;
