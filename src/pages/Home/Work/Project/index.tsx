import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../../constants/pallete";
import "./index.css";

const Project = () => {
  const [hoverTitle, setHoverTitle] = useState<boolean>(false);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        onMouseEnter={() => setHoverTitle(true)}
        onMouseLeave={() => setHoverTitle(false)}
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
            transition: "all 0.6s ease-in",
          }}
          color={hoverTitle ? Colors.WHITE : Colors.WHITE_SMUDGE}
        >
          PROJECT &#x2022; 03
        </Typography>
        <div
          className={`gradient-transition ${hoverTitle ? "active" : ""}`}
          style={{
            height: "2px",
            width: "150px",

            background: `linear-gradient(90deg, ${Colors.BLUE_TRANSPARENT} 0%, ${Colors.BLACKISH} 100%)`,
          }}
        />
      </div>
      <Grid container mt="20px">
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
            fontSize="13px"
            color={Colors.WHITE_SMUDGE}
            fontFamily="Termina"
            style={{ lineHeight: "28px" }}
            mt="20px"
          >
            The most invaluable experince a reader can have is to live through
            the books the experience, the writer intended to pass. What would be
            more fantastic than dive into a full experience of a digital book,
            where the images, animations and text would interact with the reader
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
