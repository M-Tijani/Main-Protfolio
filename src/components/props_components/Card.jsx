// Icons
import { FaGithub } from "react-icons/fa6";
import { Globe } from "lucide-react";
// Slider
import Slider from "../Slider";

export default function Card(props) {
  return (
    <>
      <section>
        <div className="flex items-center  gap-2">
          <div className="box_holder py-4 px-6">
            <div className="flex items-center justify-between ">
              <h1>{props.title}</h1>
              <div className="flex items-center justify-center gap-2">
                <a href={props.link_git} target="new">
                  <FaGithub size={20} />
                </a>
                <a href={props.link_web} target="new">
                  <Globe size={20} />
                </a>
              </div>
            </div>
            <p className="text-sm text-justify">{props.description}</p>
            <Slider image1={props.image1} image2={props.image2} />
            <div className="grid grid-cols-2 gap-2">
              {props.tubeload.map((item, index) => {
                return (
                  <span key={index} className="box_btn">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
