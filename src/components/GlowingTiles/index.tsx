import { Grid } from "@mui/material";
import { useEffect } from "react";
import "./styles.css";

const GlowingTiles = () => {
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const cards = Array.from(document.getElementsByClassName("card"));

      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsElement = document.getElementById("cards");
    cardsElement?.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardsElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const Tile = () => {
    return (
      <Grid item xs={4}>
        <div className="card"></div>
      </Grid>
    );
  };
  return (
    <Grid
      container
      spacing="8px"
      style={{ display: "flex" }}
      className="cards"
      id="cards"
    >
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Grid>
  );
};

export default GlowingTiles;
