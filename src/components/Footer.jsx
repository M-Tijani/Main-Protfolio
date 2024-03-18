// Logo
import Logo_Light from "../assets/Logo_Light.png";
import Logo_Dark from "../assets/Logo_Dark.png";
// Custom Hooks
import { useDarkMode } from "../hooks/useDarkmode";
// Animation
import { Link, animateScroll as scroll } from "react-scroll";
// Hooks
import { useState } from "react";
export default function Footer() {
  const [logoMode, setLogoMode] = useDarkMode();
  return (
    <>
      <div className="mt-10 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-3">
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
                <img className="img" src={Logo_Dark} alt="" />
              </Link>
            )}
          </div>
          <div className="ml-2">
            <h1 className="font-semibold text-xl normal-style">CREDITS</h1>
            <h1 className="normal-style">M-Tijani</h1>
          </div>
        </div>
        <div className="text-center text-sm normal-style">
          <h1>© 2023/2024 | M-Tijani</h1>
        </div>
      </div>
    </>
  );
}
