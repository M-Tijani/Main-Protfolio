// Icons
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-8 gap-4">
        <a href="https://www.javascript.com/" target="new">
          <IoLogoJavascript className="icon_style text-light" size={25} />
        </a>
        <a href="https://git-scm.com/" target="new">
          <FaGitAlt className="icon_style text-light" size={25} />
        </a>
        <a href="https://github.com/" target="new">
          <FaGithub className="icon_style text-light" size={25} />
        </a>
        <a href="https://react.dev/" target="new">
          <RiReactjsFill className="icon_style text-light" size={25} />
        </a>
        <a href="https://nodejs.org/en" target="new">
          <FaNodeJs className="icon_style text-light" size={25} />
        </a>
        <a href="https://tailwindcss.com" target="new">
          <SiTailwindcss className="icon_style text-light" size={25} />
        </a>
        <a href="https://getbootstrap.com/" target="new">
          <FaBootstrap className="icon_style text-light" size={25} />
        </a>
        <a href="https://www.mongodb.com/" target="new">
          <SiMongodb className="icon_style text-light" size={25} />
        </a>
      </div>
      <h1 className="normal-style">Let's create something amazing together.</h1>
    </>
  );
}
