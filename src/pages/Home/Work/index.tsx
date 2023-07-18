import { Container, Grid } from "@mui/material";
import GlowingTiles from "../../../components/GlowingTiles";
import { Colors } from "../../../constants/pallete";
import Project from "./Project";

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
        <div style={{ marginTop: "50px" }}>
          <Project />
        </div>
      </Container>
    </div>
  );
};

export default Work;
