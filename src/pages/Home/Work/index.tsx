import { Container, Grid } from "@mui/material";
import GlowingTiles from "../../../components/GlowingTiles";
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
        <Grid container spacing={"20px"}>
          <Grid item xs={9}>
            <GlowingTiles />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                color: "white",
                textAlign: "center",
              }}
            >
              Helping brands to stand out in the digital era.
            </span>
          </Grid>
        </Grid>

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
