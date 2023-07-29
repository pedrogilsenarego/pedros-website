import { useState } from "react";
import { Colors } from "../../../constants/pallete";
import Project from "./Project";
import { IProject, listProjects } from "./constants";

const Work = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number>(-1);

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
        style={{
          fontSize: "45px",
          color: Colors.WHITE_SMUDGE,
          textAlign: "end",
          fontFamily: "Termina",
          width: "100%",
        }}
      >
        Helping brands to stand out in the digital era
      </span>

      <div
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {listProjects.map((project: IProject, index: number) => {
          return (
            <Project
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
