import { useState } from "react";
import audio from "../../../assets/sounds/sound.wav";
import { Colors } from "../../../constants/pallete";
import Project from "./Project";
import "./index.css";
import { WorkSource, workSource } from "./workSource";

const Work = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number>(-1);
  const PlayAudio = new Audio(audio);
  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10vh 10vw",
        justifyContent: "end",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <span
        className="gradient-text"
        style={{
          fontSize: "55px",
          color: Colors.WHITE_SMUDGE,
          textAlign: "center",
          paddingRight: "35px",
          fontFamily: "Termina",
          letterSpacing: "4px",
          width: "100%",
        }}
      >
        Case Studies
      </span>
      <span
        className="gradient-text"
        style={{
          marginTop: "-15px",
          fontSize: "30px",
          color: Colors.WHITE_SMUDGE,
          textAlign: "center",
          paddingRight: "35px",
          fontFamily: "Termina",
          width: "100%",
        }}
      >
        &#x2022; Helping brands to stand out in the digital era &#x2022;
      </span>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {workSource.map((project: WorkSource, index: number) => {
          return (
            <Project
              PlayAudio={PlayAudio}
              project={project}
              key={index}
              index={index}
              isOpen={openAccordionIndex === index}
              onToggle={() => handleAccordionToggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
