import useTextHighlighter from "../hooks/useTextHighLighter";
import { useRef } from "react";
import { useEffect } from "react";
import Skills from "./Skills";
export default function About() {
  const textref = useRef(null);
  const scrollHandler = useTextHighlighter(textref);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return (
    <>
      <div id="about" className="flex flex-col gap-3">
        <h1 className="normal-style font-bold text-xl mb-4">
          .About(“<span className="text-style">me</span>”)
        </h1>
        <div
          ref={textref}
          className="normal-style flex flex-col gap-4 text-justify"
        >
          <p>
            At the ripe age of 13, I fell head over heels in love with video
            games and everything related to them. That love sparked a journey of
            self-discovery and learning that continues to shape my career today.
          </p>
          <p>
            Without a formal degree, I've charted my own course, teaching myself
            the ropes of design and development. It all began with Photoshop and
            Illustrator, where I honed my skills in creating visually stunning
            graphics. From there, I ventured into the world of video editing
            with After Effects and Premiere Pro, adding motion and life to my
            creations.
          </p>
          <p>
            But my journey didn't stop there. I felt a calling to delve deeper
            into the realm of user experience and interface design. It was a
            challenging yet rewarding path, but one that ultimately led me to
            where I am today.
          </p>
          <p>
            My passion for creating immersive experiences led me to game
            development, where I dabbled in C# and crafted games using the Unity
            engine. However, I soon realized that my true calling lay in web
            development. There's something about the fluidity and dynamism of
            the web that resonated with me like nothing else.
          </p>
          <p>
            I started with the basics of HTML and CSS, gradually incorporating
            frameworks like Tailwind CSS and Bootstrap to streamline my
            workflow. As my skills evolved, so did my ambitions. I delved into
            the world of JavaScript and React.js, mastering the art of frontend
            development.
          </p>
          <p>
            But I didn't stop there. I hungered for more knowledge and
            challenged myself to explore the backend with Node.js and
            Express.js. With each new skill mastered, I found a deeper sense of
            fulfillment and purpose in my work.
          </p>
          <p>
            Today, I stand as a testament to the power of passion and
            perseverance. My journey may have been unconventional, but it's
            shaped me into the adaptable, resourceful developer and designer
            that I am today. And I'm just getting started.
          </p>
          <p>
            I primarily use the following technologies, tools and libraries, but
            always open to pick up more:
          </p>
          <Skills />
        </div>
      </div>
    </>
  );
}
