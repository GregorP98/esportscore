import React from "react";
import ReactPlayer from "react-player";

export default function TwitchEmbed() {
  return (
    <ReactPlayer
      url="https://www.twitch.tv/valorant"
      style={{ paddingLeft: 20 }}
    />
  );
}
