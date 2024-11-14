import { Link } from "react-router-dom";
import { useTheme } from "../hooks/themeContext";

const NavBar = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <nav className="navbar">
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="mode-swith">
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "light"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
