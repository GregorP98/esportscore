import * as React from "react";
import Card from "@mui/material/Card";
import ReactPlayer from "react-player";

// export default function TwitchEmbed() {
//   return (
//     <ReactPlayer
//       url="https://www.twitch.tv/valorant"
//       style={{ paddingLeft: 20 }}
//     />
//   );
// }

export default function TwitchEmbed() {
  return (
    <Card style={{ backgroundColor: "#03989e" }}>
      <ReactPlayer
        style={{
          objectFit: "cover",
          display: "inline-block",
          gridColumnStart: "2",
          gridColumnEnd: "5",
          gridRow: "3",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        url="https://www.twitch.tv/valorant"
      />
    </Card>
  );
}
