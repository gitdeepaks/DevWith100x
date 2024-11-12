import { useRef } from "react";

export const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const previousDeps = useRef([]);

  // first Render

  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  //   Deps changes and no Deps Array

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(previousDeps.current)
    : true;

  if (depsChanged) {
    const cleanup = effect();

    //   cleanup functions

    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }

  previousDeps.current = deps || [];
};
