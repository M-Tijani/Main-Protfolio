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
      <section className="grid grid-cols-2 items-start justify-start gap-4 md:grid md:grid-cols-3 md:gap-4">
        <div className="flex items-center justify-start gap-2">
          <a href="https://www.javascript.com/" target="new">
            <IoLogoJavascript className="icon_style text-light" size={25} />
          </a>
          <h1>Javascript</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <a href="https://git-scm.com/" target="new">
            <FaGitAlt className="icon_style text-light" size={25} />
          </a>
          <h1>Git</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <a href="https://github.com/" target="new">
            <FaGithub className="icon_style text-light" size={25} />
          </a>
          <h1>Github</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <a href="https://react.dev/" target="new">
            <RiReactjsFill className="icon_style text-light" size={25} />
          </a>
          <h1>React JS</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <a href="https://nodejs.org/en" target="new">
            <FaNodeJs className="icon_style text-light" size={25} />
          </a>
          <h1>Node JS</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <a href="https://tailwindcss.com" target="new">
            <SiTailwindcss className="icon_style text-light" size={25} />
          </a>
          <h1>Tailwind css</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <a href="https://getbootstrap.com/" target="new">
            <FaBootstrap className="icon_style text-light" size={25} />
          </a>
          <h1>Bootstrap</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <a href="https://www.mongodb.com/" target="new">
            <SiMongodb className="icon_style text-light" size={25} />
          </a>
          <h1>Mongodb</h1>
        </div>
      </section>
      <h1 className="normal-style">Let's create something amazing together.</h1>
    </>
  );
}
