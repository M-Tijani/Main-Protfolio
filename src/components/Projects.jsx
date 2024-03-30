"use client";
// Components
import Card from "./props_components/Card";
// Hooks
import { useState } from "react";

// Images
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
export default function Projects() {
  const [description, setDescription] = useState(
    "It’s platform for downloading videos from social media platforms like, Instagram, Facebook, Twitter, YouTube"
  );
  const [tubeload, setTubeload] = useState([
    "React js",
    "Node js",
    "Typescript",
    "Tailwind",
  ]);
  return (
    <>
      <div id="projects" className="mt-10">
        <h1 className="text-title mb-4">
          .Projects(“<span className="sub-title">i made</span>”)
        </h1>

        <Card
          title="Tubeload"
          description={description}
          image1={Img1}
          image2={Img2}
          tubeload={tubeload}
          link_git="https://github.com/M-Tijani/Youtube_Downloader"
          link_web="https://jazzy-llama-a2f52f.netlify.app/"
        />
      </div>
    </>
  );
}
