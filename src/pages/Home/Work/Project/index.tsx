import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import imageLaptop from "../../../../assets/images/projects/abolina/laptop.svg";
import imageMobile from "../../../../assets/images/projects/abolina/mobile.svg";

import { Colors } from "../../../../constants/pallete";
import { WorkSource } from "../workSource";
import BottomButton from "./BottomButton";
import "./index.css";

interface Props {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  project: WorkSource;
  PlayAudio: HTMLAudioElement;
}

const Project = ({ index, isOpen, onToggle, project, PlayAudio }: Props) => {
  const [hoverTitle, setHoverTitle] = useState<boolean>(false);
  const [hoverLink, setHoverLink] = useState<boolean>(false);
  const [hoverMobile, setHoverMobile] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const play = () => {
    PlayAudio.play();
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Accordion
        expanded={isOpen}
        onChange={() => onToggle()}
        onMouseEnter={() => setHoverTitle(true)}
        onMouseLeave={() => setHoverTitle(false)}
        sx={{
          background: `linear-gradient(15deg, ${Colors.BLACKISH_TRANSPARENT} 0%, ${Colors.WHITE_TRANSPARENT} 100%)`,
          //background: Colors.BLACKISH_TRANSPARENT,
          transition: "border 1s ease-in-out",
          boxShadow: "2px 2px 10px black",
          border:
            isOpen || hoverTitle
              ? `solid 2px ${Colors.WHITE_TRANSPARENT}`
              : `solid 2px ${Colors.WHITE_ULTRA_TRANSPARENT}`,
        }}
      >
        <AccordionSummary
          onClick={() => play()}
          expandIcon={false}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              onClick={() => setOpen(!open)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                columnGap: "20px",
              }}
            >
              <Typography
                style={{
                  fontSize: "15px",
                  fontFamily: "Termina",
                  letterSpacing: "1px",
                  textShadow: hoverTitle
                    ? `0 0 8px ${Colors.WHITE_SMUDGE}, 0 0 12px ${Colors.WHITE_SMUDGE}, 0 0 18px ${Colors.WHITE_SMUDGE}`
                    : "none",
                  transition: "all 0.5s ease-in",
                }}
                color={hoverTitle ? Colors.WHITE : Colors.WHITE_SMUDGE}
              >
                &#128900; {index < 9 && "0"}
                {index + 1}
              </Typography>
              <div
                style={{
                  height: "2px",
                  width: "150px",
                  transition: "opacity 1s ease-in-out",
                  opacity: hoverTitle ? 1 : 0.5,
                  background: `linear-gradient(90deg, ${Colors.BLUE_TRANSPARENT_MID} 0%, ${Colors.BLACKISH_TRANSPARENT} 100%)`,
                }}
              />
            </div>
            <div
              style={{
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={project.logo}
                alt=""
                height={project.logoHeight || "35px"}
                style={{
                  opacity: hoverTitle ? 0.7 : 0.2,
                  transition: "all 0.5s ease-in",
                }}
              />
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container mt="20px" mb="20px">
            <Grid item xs={6}>
              <Typography
                className="gradient-text2"
                fontSize="35px"
                fontFamily="Termina"
                textTransform="uppercase"
              >
                {project.title}
              </Typography>
              <Typography
                fontSize="12px"
                color={Colors.WHITE_SMUDGE}
                fontFamily="Termina"
                style={{ lineHeight: "20px" }}
                mt="20px"
              >
                Nothing compares to the invaluable experience of immersing
                oneself in the original sensations the writer intended during
                the creation process of their work. Imagine a digital book that
                goes beyond the traditional reading experience, where images,
                animations, and text interact seamlessly with the reader.
                <br />
                <br /> Step into a world where the pages of digital books turn
                like those in reality, while captivating animations and
                interactive elements breathe life into every word. Central to
                this endeavor is providing readers with an experience that
                aligns with the author's original vision. Engaging page-turning
                animations and interactive words draw readers into the heart of
                the narrative, ensuring that they feel an exhilarating
                connection to the content. Spectacular animations will enrich
                the visual storytelling, transforming illustrations into living
                artwork that resonates with the reader's emotions.
                <br />
                <br /> This symphony of technology and creativity creates an
                unparalleled reading adventure, one that leaves a lasting
                impression on anyone who embarks on it. Our goal is simple—to
                redefine the way readers connect with literature.
              </Typography>
              <Typography
                onClick={() => {
                  window.open(`https://${project.url}`, "_blank");
                }}
                onMouseEnter={() => setHoverLink(true)}
                onMouseLeave={() => setHoverLink(false)}
                fontSize="12px"
                color={Colors.WHITE}
                fontFamily="Termina"
                style={{
                  cursor: "pointer",

                  textShadow: hoverLink
                    ? `0 0 8px ${Colors.WHITE_SMUDGE}, 0 0 12px ${Colors.WHITE_SMUDGE}, 0 0 18px ${Colors.WHITE_SMUDGE}`
                    : "none",
                  transition: "all 0.5s ease-in",
                }}
                mt="20px"
              >
                {project.url}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              style={{
                display: "relative",

                transform: "translate(-20px, 0px)",
              }}
            >
              <img src={imageLaptop} alt="" width="85%" />
              <img
                onMouseEnter={() => setHoverMobile(true)}
                onMouseLeave={() => setHoverMobile(false)}
                src={imageMobile}
                alt=""
                width="200px"
                height="200px"
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 25,
                  cursor: "pointer",
                  transition: "all 1s ease-in-out",
                  transformStyle: "preserve-3d", // Preserve the 3D perspective
                  transform: hoverMobile
                    ? `scale(1.6) translate(-60px, -40px) `
                    : `scale(1) `,
                }}
              />
            </Grid>
          </Grid>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              padding: "10px 30px 0px 0px",
              gap: "10px",
            }}
          >
            <BottomButton isActive={true} />
            <BottomButton isActive={false} />
            <BottomButton isActive={false} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Project;
