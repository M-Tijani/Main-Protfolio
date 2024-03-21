"use client";
// Icons
import { FaGithub } from "react-icons/fa6";
import { Globe } from "lucide-react";
// Slider
import Slider from "./Slider";
export default function Projects() {
  return (
    <>
      <div id="projects" className="mt-10">
        <h1 className="normal-style font-bold text-xl mb-4">
          .Projects(“<span className="text-style">i made</span>”)
        </h1>

        <div className="flex items-center  gap-2">
          <div className="box_holder py-4 px-6">
            <div className="flex items-center justify-between ">
              <h1>Tubeload</h1>
              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://github.com/M-Tijani/Youtube_Downloader"
                  target="new"
                >
                  <FaGithub size={20} />
                </a>
                <a href="https://jazzy-llama-a2f52f.netlify.app/" target="new">
                  <Globe size={20} />
                </a>
              </div>
            </div>
            <p className="text-sm text-justify">
              It’s platform for downloading videos from social media platforms
              like, Instagram, Facebook, Twitter, YouTube
            </p>
            <Slider />
            <div className="grid grid-cols-2 gap-2">
              <span className="box_btn">React js</span>
              <span className="box_btn">Node js</span>
              <span className="box_btn">Typescripts</span>
              <span className="box_btn">Tailwind css</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
