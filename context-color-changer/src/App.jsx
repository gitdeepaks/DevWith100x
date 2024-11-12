import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componenets/home";
import About from "./componenets/about";
import Blog from "./componenets/blog";
import NavBar from "./componenets/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
