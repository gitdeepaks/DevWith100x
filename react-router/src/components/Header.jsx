import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
        // className={({ isActive, isPending, isTransitioning }) =>
        //   [
        //     isPending ? "pending" : "",
        //     isActive ? "active" : "",
        //     isTransitioning ? "transisionong" : "",
        //   ].join("")
        // }
        to="/"
      >
        Home
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </header>
  );
};

export default Header;
