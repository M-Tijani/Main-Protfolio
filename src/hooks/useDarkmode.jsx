import { useContext } from "react";
import { DarkmodeContext } from "../contexts/Darkmode";

export const useDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkmodeContext);

  return [darkMode, setDarkMode];
};
