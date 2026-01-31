import { useState, type ReactNode } from "react";
export interface valueProps {
  Theme: string;
  isDark: boolean;
  ToogleTheme: () => void
}

import { ThemeContext } from "./ThemeContext";
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    console.log("Hello");
    
  const [Theme, setTheme] = useState("light");


  const ToogleTheme = () => {
    setTheme((prevT) => (prevT==="light" ? "dark": "light"));
    
  };

  const value: valueProps = {
    Theme,
    ToogleTheme,
    isDark: Theme === "dark"
  };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
};

