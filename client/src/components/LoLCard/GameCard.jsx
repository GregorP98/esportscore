import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function GameCard({ game }) {
  return (
    <a href="https://google.com" style={{ textDecoration: "none" }} to="/">
      <Card>
        <CardMedia
          style={{
            objectFit: "cover",
            display: "inline-block",
            gridColumn: "3",
            gridRow: "2",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          component="img"
          image={game.image}
          alt={game.imageAlt}
        />
        <CardContent
          style={{ gridColumnStart: "2", gridColumnEnd: "5", gridRow: "3" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {game.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game.body}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}
