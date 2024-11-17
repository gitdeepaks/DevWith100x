import { useMemo, useRef } from "react";
import "./App.css";
import { useIntersectionObserver } from "./hooks/use-intersection-observer";

const App = () => {
  const ref = useRef(null);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    []
  );

  const intersectionEntry = useIntersectionObserver(ref, options);
  console.log("isIntersecting", intersectionEntry?.isIntersecting);
  console.log("Intersection Ratio", intersectionEntry?.intersectionRatio);

  return (
    <div
      style={{
        height: "400vh",
        background: intersectionEntry?.isIntersecting ? "green" : "grey",
      }}
      className="content"
    >
      <div ref={ref} style={{ height: "50vh", background: "lightblue" }}>
        Intersection observer
      </div>
    </div>
  );
};

export default App;
