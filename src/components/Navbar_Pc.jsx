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
  const [navMode, setNavMode] = useDarkMode();

  return (
    <>
      {navMode ? (
        <div className="Navbar_PC container mx-auto max-w-[980px]">
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
          <div>
            <ul>
              <li className="Navbar_PC_Menu">
                <Link
                  className="Navbar_PC_Menu_item"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -Home();
                </Link>
                <Link
                  className="Navbar_PC_Menu_item"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -About();
                </Link>
                <Link
                  className="Navbar_PC_Menu_item"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -Projects();
                </Link>
                <Link
                  className="Navbar_PC_Menu_item"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -Contact();
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      ) : (
        <div className="Navbar_PC bg-light container mx-auto max-w-[980px]">
          <div>
            {logoMode ? (
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img className="img" src={Logo_Dark} alt="" />
              </Link>
            ) : (
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img className="img" src={Logo_Dark} alt="" />
              </Link>
            )}
          </div>
          <div>
            <ul>
              <li className="Navbar_PC_Menu">
                <Link
                  className="Navbar_PC_Menu_item"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -Home();
                </Link>
                <Link
                  className="Navbar_PC_Menu_item"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -About();
                </Link>
                <Link
                  className="Navbar_PC_Menu_item"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -Projects();
                </Link>
                <Link
                  className="Navbar_PC_Menu_item"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  -Contact();
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </>
  );
}
