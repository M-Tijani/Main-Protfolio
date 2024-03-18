import React, { useState, useEffect, useContext } from "react";
// Icons
import { Lightbulb } from "lucide-react";
import { LightbulbOff } from "lucide-react";
// Context
import { DarkmodeContext } from "../contexts/Darkmode";
import { useDarkMode } from "../hooks/useDarkmode";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={` Navbar-Menu ${darkMode ? "" : ""} ${
        darkMode ? "text-white" : "text-white"
      } transition-colors duration-200`}
    >
      {darkMode ? <LightbulbOff /> : <Lightbulb />}
    </button>
  );
};

export default ThemeSwitcher;
