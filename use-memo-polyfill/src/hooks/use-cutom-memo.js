import { useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }
  return true;
};

export const useCustomMemo = (callBack, dependencyArr) => {
  // /variable or state
  const memoRef = useRef(null);
  //   change in dependency Array

  if (
    !memoRef.current ||
    !areEqual(memoRef.current.dependencyArr, dependencyArr)
  ) {
    memoRef.current = {
      value: callBack(),
      dependencyArr,
    };
  }

  //   cleanup logic
  useEffect(() => {
    return () => {
      memoRef.current == null;
    };
  }, []);
  //return memoized value
  return memoRef.current.value;
};
