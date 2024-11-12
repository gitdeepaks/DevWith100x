import { createContext, useContext } from "react";

const Themecontext = createContext("dark");

export const useTheme = () => {
  return useContext(Themecontext);
};
