import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import imageLaptop from "../../../../assets/images/projects/abolina/laptop.svg";
import logoSite from "../../../../assets/images/projects/abolina/logoSite.svg";
import imageMobile from "../../../../assets/images/projects/abolina/mobile.svg";
import { Colors } from "../../../../constants/pallete";
import "./index.css";

interface Props {
  index: number;
}

const Project = ({ index }: Props) => {
  const [hoverTitle, setHoverTitle] = useState<boolean>(false);
  const [hoverLink, setHoverLink] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Accordion
        onMouseEnter={() => setHoverTitle(true)}
        onMouseLeave={() => setHoverTitle(false)}
        sx={{ background: "transparent" }}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
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
                PROJECT &#x2022; 0{index + 1}
              </Typography>
              <div
                style={{
                  height: "2px",
                  width: "150px",
                  transition: "opacity 1s ease-in-out",
                  opacity: hoverTitle ? 1 : 0.5,
                  background: `linear-gradient(90deg, ${Colors.BLUE_TRANSPARENT_MID} 0%, ${Colors.BLACKISH} 100%)`,
                }}
              />
            </div>
            <img
              src={logoSite}
              alt=""
              height="35px"
              style={{
                opacity: hoverTitle ? 0.7 : 0.2,
                transition: "all 0.5s ease-in",
              }}
            />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container mt="20px" mb="20px" columnSpacing="30px">
            <Grid item xs={6}>
              <Typography
                className="gradient-text"
                fontSize="35px"
                fontFamily="Termina"
                textTransform="uppercase"
              >
                Àbolina - Book store
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
                www.Abolina.com
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" columnGap="20px">
              <img src={imageLaptop} alt="" width="500px" height="500px" />
              <img
                src={imageMobile}
                alt=""
                width="200px"
                height="500px"
                style={{}}
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
            <div
              style={{
                height: "22px",
                width: "22px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#ffffff66",
              }}
            />
            <div
              style={{
                height: "22px",
                width: "22px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#ffffff66",
              }}
            />
            <div
              style={{
                height: "22px",
                width: "22px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: "#ffffff66",
              }}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Project;
