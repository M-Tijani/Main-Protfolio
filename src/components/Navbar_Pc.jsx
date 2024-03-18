// Components
import ThemeSwitcher from "./ThemeSwitcher";
// Rouuts/ Animtion
import { Link, animateScroll as scroll } from "react-scroll";
// Logos
import Logo_Light from "../assets/Logo_Light.png";
import Logo_Dark from "../assets/Logo_Dark.png";
// Hooks
import { useState } from "react";
// Custom Hooks
import { useDarkMode } from "../hooks/useDarkmode";

export default function Navbar_Pc() {
  const [logoMode, setLogoMode] = useDarkMode();
  return (
    <>
      <div className="Navbar">
        <div>
          {logoMode ? (
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <img className="img" src={Logo_Light} alt="" />
            </Link>
          ) : (
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <img className="img" src={Logo_Light} alt="" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
