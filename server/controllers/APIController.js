const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const PAT = process.env.PAT;

const options = {
  method: "GET",
  headers: { accept: "application/json", authorization: `Bearer ${PAT}` },
};

const rootUrl = "https://api.pandascore.co/";

//for each game:
//twitch embed?
//current tournaments --> results+matches in said tournament
//upcoming tournaments --> matches in said tournament

//I want something like current{game}Tournaments
//eg.
// const recentCODTournaments = await fetch(
//   `${rootUrl}${apiGames.slug}/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

module.exports = { options, rootUrl };
