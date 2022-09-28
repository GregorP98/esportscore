import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TournamentList from "../TournamentList/TournamentList";

export default function RecentCard(recent) {
  console.log("recentList is", recent.recent[1]);
  return (
    <Card>
      <CardHeader style={{ marginTop: "10" }} title="Recent Tournaments" />
      {/* <CardMedia component="" height="" image="" alt="tournament image" /> */}
      <CardContent>
        <TournamentList input={recent.recent[0]} />
        <TournamentList input={recent.recent[1]} />
        <TournamentList input={recent.recent[2]} />
      </CardContent>
    </Card>
  );
}
