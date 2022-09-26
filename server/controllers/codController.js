// import { options, rootUrl } from APIcontroller
const { error } = require("console");
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const PAT = process.env.PAT;
// const { options, rootUrl } = require("./APIController");

const options = {
  method: "GET",
  headers: { accept: "application/json", authorization: `Bearer ${PAT}` },
};

const rootUrl = "https://api.pandascore.co/";

const recentCODTournaments = async function (req, res) {
  try {
    console.log("getting tournaments");
    const body = await fetch(
      `${rootUrl}codmw/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
      options
    )
      .then((response) => response.json())
      // .then((response) => console.log("response is", response))
      .catch((error) => console.log("error", error));
    console.log("here", body);
    res.status(201);
    res.send(body);
  } catch (error) {
    console.log("Could not get ", error);
    res.status(500);
  }
};

// const ongoingCODTournaments = async function (req, res) {
//   try {
//     const body = await fetch(
//       `${rootUrl}codmw/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => console.log(response))
//       .catch((err) => console.error(err));
//     res.status = 200;
//     res.send(body);
//   } catch (error) {
//     res.status = 500;
//   }
// };

// const upcomingCODTournaments = async function (req, res) {
//   try {
//     const body = await fetch(
//       `${rootUrl}codmw/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => console.log(response))
//       .catch((err) => console.error(err));
//     res.status = 200;
//     res.send(body);
//   } catch (error) {
//     res.status = 500;
//   }
// };

function getCODTournaments() {
  recentCODTournaments();
  // ongoingCODTournaments();
  // upcomingCODTournaments();
}

module.exports = { getCODTournaments };
