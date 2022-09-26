import Header from "../Header/Header.jsx";
import "./GameLayout.css";
import TwitchEmbed from "../TwitchEmbed/TwitchEmbed.jsx";

export default function GameLayout() {
  return (
    <div id="dashboard" style={{ margin: "auto" }}>
      <Header />
      <TwitchEmbed />
    </div>
  );
}
