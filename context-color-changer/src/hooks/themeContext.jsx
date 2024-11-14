import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

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
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
