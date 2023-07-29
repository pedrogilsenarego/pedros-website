import { Container } from "@mui/material";
import { Colors } from "../../../constants/pallete";
import Project from "./Project";
import { IProject, listProjects } from "./constants";

const Work = () => {
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
          return <Project index={index} />;
        })}
      </div>
    </div>
  );
};

export default Work;
