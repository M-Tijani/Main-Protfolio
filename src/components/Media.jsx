// icons
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// State
import { useState } from "react";
export default function Media() {
  const [text, setText] = useState("mahditijani1@gmail.com");
  return (
    <>
      <div>
        <div className="fixed bottom-6 left-[20px] md:left-[20px] lg:left-[20px] xl:left-[150px] duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="relative flex flex-col items-center justify-center gap-[115px]">
            <h1 className="absolute bottom-[215px] -rotate-90 text-dark dark:text-light">
              {text}
            </h1>
            <span className="w-2 h-[100px] flex bg-dark  dark:bg-light rounded-full"></span>
          </div>
        </div>
      </div>
      <div>
        <div className="fixed bottom-6 right-[10px] md:right-[20px] lg:right-[20px] xl:right-[150px] duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <div className="flex flex-col gap-5 items-center justify-center text-dark dark:text-light">
              <a href="https://twitter.com/mtijani2274450" target="new">
                <FaXTwitter
                  size={25}
                  className="cursor-pointer hover:text-primary_glow
                   duration-200"
                />
              </a>
              <a href="https://github.com/M-Tijani/" target="new">
                <FaGithub
                  size={25}
                  className="cursor-pointer hover:text-primary_glow
                   duration-200"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mahdi-tijani-52a9b4258/"
                target="new"
              >
                <FaLinkedin
                  size={25}
                  className="cursor-pointer hover:text-primary_glow
                   duration-200"
                />
              </a>
            </div>
            <span className="w-2 h-[100px] flex bg-dark  dark:bg-light rounded-full"></span>
          </div>
        </div>
      </div>
    </>
  );
}
