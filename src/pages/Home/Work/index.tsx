import { Container, Grid } from "@mui/material";
import GlowingTiles from "../../../components/GlowingTiles";
import { Colors } from "../../../constants/pallete";
import Project from "./Project";
import { IProject, listProjects } from "./constants";

const Work = () => {
  return (
    <div
      style={{
        display: "flex",

        justifyContent: "end",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container maxWidth="xl">
        <span
          style={{
            fontSize: "50px",
            color: Colors.WHITE_SMUDGE,
            textAlign: "center",
            fontFamily: "Termina",
          }}
        >
          Helping brands to stand out in the digital era
        </span>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          {listProjects.map((project: IProject, index: number) => {
            return <Project index={index} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default Work;
