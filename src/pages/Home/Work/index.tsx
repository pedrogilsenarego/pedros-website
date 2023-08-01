import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import audio from "../../../assets/sounds/sound.wav";
import { Colors } from "../../../constants/pallete";
import { State } from "../../../slicer/types";
import Project from "./Project";
import "./index.css";
import { WorkSource, workSource } from "./workSource";

const Work = () => {
  const scrollToL = useSelector<State, string>(
    (state) => state.general.scrollTo
  );
  const worksRef = useRef<HTMLDivElement>(null);

  const [openAccordionIndex, setOpenAccordionIndex] = useState<number>(-1);
  const PlayAudio = new Audio(audio);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleScrollToContacts = () => {
    if (null !== worksRef.current) {
      window.scrollTo({
        top: worksRef.current.offsetTop - (mobile ? 70 : 0),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollToL === "Work") {
      handleScrollToContacts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToL]);
  return (
    <div
      ref={worksRef}
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
