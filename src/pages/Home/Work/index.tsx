import { Container, Grid } from "@mui/material";
import GlowingTiles from "../../../components/GlowingTiles";

const Work = () => {
  return (
    <div
      style={{
        display: "flex",

        justifyContent: "end",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <Container>
        <Grid container spacing={"20px"}>
          <Grid item xs={9}>
            <GlowingTiles />
          </Grid>
          <Grid item xs={3}>
            <span style={{ fontSize: "40px", color: "white" }}>
              Helping brands to stand out in the digital era.
            </span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Work;
