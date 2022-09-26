import Grid from "@mui/material/Grid";
import Header from "../Header/Header.jsx";
import GameCard from "../LoLCard/GameCard.jsx";
import "./Dashboard.css";

const GAMES = [
  {
    title: "CSGO",
    body: "Counter-Strike: Global Offensive is a 2012 multiplayer first-person shooter developed by Valve and Hidden Path Entertainment",
    image: "https://1000logos.net/wp-content/uploads/2017/12/CSGO-Symbol.jpg",
    imageAlt: "CSGO logo",
  },
  {
    title: "Call of Duty",
    body: "Call of Duty is a first-person shooter video game franchise published by Activision.",
    image:
      "https://logos-world.net/wp-content/uploads/2021/02/Call-of-Duty-Logo-700x394.png",
    imageAlt: "CoD logo",
  },
  {
    title: "FIFA",
    body: "FIFA, also known as FIFA Football and set to be known as EA Sports FC from 2023, is a series of association football video games developed and released annually by Electronic Arts under the EA Sports label.",
    image:
      "https://www.kindpng.com/picc/m/540-5401028_ea-sports-fifa-logo-png-ea-sports-transparent.png",
    imageAlt: "FIFA logo",
  },
  {
    title: "League of Legends",
    body: "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games.",
    image:
      "https://logos-world.net/wp-content/uploads/2020/11/League-of-Legends-Logo-700x394.png",
    imageAlt: "LoL logo",
  },
  {
    title: "Overwatch",
    body: "Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment.",
    image:
      "https://1000logos.net/wp-content/uploads/2018/03/Overwatch-Logo-768x480.png",
    imageAlt: "Overwatch logo",
  },

  {
    title: "Tom Clancy's Rainbow Six Siege",
    body: "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft.",
    image:
      "https://logos-world.net/wp-content/uploads/2021/02/Rainbow-Six-Logo-700x394.png",
    imageAlt: "R6S logo",
  },
  {
    title: "Rocket League",
    body: "Rocket League is a vehicular soccer video game developed and published by Psyonix.",
    image:
      "https://logos-world.net/wp-content/uploads/2020/11/Rocket-League-Emblem.png",
    imageAlt: "RL logo",
  },
  {
    title: "Valorant",
    body: "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows.",
    image:
      "https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png",
    imageAlt: "Valorant logo",
  },
];
export default function Dashboard() {
  return (
    <div id="dashboard" style={{ margin: "auto" }}>
      <Header />
      <Grid container justifyContent="center" columns={17} spacing={2}>
        {GAMES.map((game) => {
          return (
            <Grid item md={4} height="42vh">
              <GameCard game={game} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
