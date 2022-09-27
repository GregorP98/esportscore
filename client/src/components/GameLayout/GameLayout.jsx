import Header from "../Header/Header.jsx";
import "./GameLayout.css";
import TwitchEmbed from "../TwitchEmbed/TwitchEmbed.jsx";
import TournamentCard from "../TournamentsCard/TournamentsCard.jsx";
import { Grid } from "@mui/material";

export default function GameLayout() {
  return (
    <div id="dashboard" style={{ margin: "auto" }}>
      <Header />
      <Grid
        container
        justifyContent="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={1}
      >
        <Grid item xs={6} height="38vh">
          <TwitchEmbed />
        </Grid>
        <Grid item xs={6} height="38vh">
          <TournamentCard />
        </Grid>
        <Grid item xs={6} height="38vh">
          <TournamentCard />
        </Grid>
        <Grid item xs={6} height="38vh">
          <TournamentCard />
        </Grid>
      </Grid>
    </div>
  );
}
