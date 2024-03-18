import ThemeSwitcher from "./ThemeSwitcher";
// Icons
import { Menu } from "lucide-react";
import { X } from "lucide-react";
// Custom Fanctions
import OutsideClickHandler from "react-outside-click-handler";
// Animtion
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
// Logos
import Logo_Light from "../assets/Logo_Light.png";
import Logo_Dark from "../assets/Logo_Dark.png";
// Hooks
import { useState } from "react";
// Custom Hooks
import { useDarkMode } from "../hooks/useDarkmode";
export default function Navbar_Mobile() {
  const [logoMode, setLogoMode] = useDarkMode();
  const [navMode, setNavMode] = useDarkMode();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {navMode ? (
        <div>
          <div className="Navbar container mx-auto max-w-[360px] md:max-w-[700px]">
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
            <div className="flex gap-2">
              <ThemeSwitcher />
              <div>
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {menuOpen ? (
                    <div onClick={handleMenu} className="Navbar-Menu">
                      <X size={25} className="text-light" />
                    </div>
                  ) : (
                    <div onClick={handleMenu} className="Navbar-Menu">
                      <Menu size={25} className="text-light" />
                    </div>
                  )}
                  {menuOpen && (
                    <motion.div
                      initial={{ translateX: -100 }}
                      animate={{ translateX: 0.1, delay: 1 }}
                      exit={{ translateX: -100 }}
                      className="menu_box"
                    >
                      {/* Menu Items */}
                      <ul className="w-full flex justify-center my-6">
                        <li className="w-full mx-6 text-center flex flex-col gap-4">
                          <Link
                            className="list-style"
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                          >
                            -Home();
                          </Link>
                          <Link
                            className="list-style"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                          >
                            -About();
                          </Link>
                          <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="list-style"
                          >
                            -Projects();
                          </Link>
                          <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="list-style"
                            href=""
                          >
                            -Contact();
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </OutsideClickHandler>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-light Navbar">
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
            <div className="flex gap-2">
              <ThemeSwitcher />
              <div>
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {menuOpen ? (
                    <div onClick={handleMenu} className="Navbar-Menu">
                      <X size={25} className="text-light" />
                    </div>
                  ) : (
                    <div onClick={handleMenu} className="Navbar-Menu">
                      <Menu size={25} className="text-light" />
                    </div>
                  )}
                  {menuOpen && (
                    <motion.div
                      initial={{ translateX: -100 }}
                      animate={{ translateX: 0.1, delay: 1 }}
                      exit={{ translateX: -100 }}
                      className="menu_box"
                    >
                      {/* Menu Items */}
                      <ul className="w-full flex justify-center my-6">
                        <li className="w-full mx-6 text-center flex flex-col gap-4">
                          <Link
                            className="list-style"
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                          >
                            -Home();
                          </Link>
                          <Link
                            className="list-style"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                          >
                            -About();
                          </Link>
                          <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="list-style"
                          >
                            -Projects();
                          </Link>
                          <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="list-style"
                            href=""
                          >
                            -Contact();
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </OutsideClickHandler>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
