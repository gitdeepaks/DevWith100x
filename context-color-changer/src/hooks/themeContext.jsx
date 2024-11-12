import { useEffect, useState } from "react";
import { createContext } from "react";

const Themecontext = createContext("dark");

// export const useTheme = () => {
//   return useContext(Themecontext);
// };

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((prevState) => !prevState);
  };

  const theme = isLightMode ? "light" : "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isLightMode, theme]);
  return (
    <Themecontext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </Themecontext.Provider>
  );
};
