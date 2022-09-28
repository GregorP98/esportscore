import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TournamentList from "../TournamentList/TournamentList";

export default function UpcomingCard(upcoming) {
  console.log("upcomingList is", upcoming[1]);
  return (
    <Card>
      <CardHeader style={{ marginTop: "10" }} title="Upcoming Tournaments" />
      {/* <CardMedia component="" height="" image="" alt="tournament image" /> */}
      <CardContent>
        {/* <TournamentList input={upcoming.upcoming[0]} />
        <TournamentList input={upcoming.upcoming[1]} />
        <TournamentList input={upcoming.upcoming[2]} /> */}
        {/* for video purposes: */}
        <TournamentList input={upcoming.upcoming[0]} />
        <TournamentList input={upcoming.upcoming[1]} />
        <TournamentList input={upcoming.upcoming[2]} />
      </CardContent>
    </Card>
  );
}
