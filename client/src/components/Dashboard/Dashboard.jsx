import Grid from "@mui/material/Grid";
import Header from "../Header/Header.jsx";
import GameCard from "../GameCard/GameCard.jsx";
import "./Dashboard.css";
import GAMES from "../../utils/Games.json";

export default function Dashboard() {
  return (
    <div id="dashboard" style={{ margin: "auto" }}>
      <Header />
      <Grid container justifyContent="center" columns={17} spacing={2}>
        {GAMES.map((game) => {
          return (
            <Grid item md={4} height="38vh">
              <GameCard game={game} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
