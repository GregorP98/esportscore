const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const PAT = process.env.PAT;
const { options, rootUrl } = require("./APIController");

const getCSGOTournaments = async function (req, res) {
  let finalResponse = {};
  try {
    console.log("getting tournaments");
    const recentBody = await fetch(
      `${rootUrl}csgo/tournaments/past?search[tier]=a&page=1&per_page=3&sort=-begin_at`,
      options
    );
    const recentData = await recentBody.json();
    finalResponse.recent = recentData;
    const currentBody = await fetch(
      `${rootUrl}csgo/tournaments/running?search[tier]=a&sort=&page=1&per_page=3`,
      options
    );
    const currentData = await currentBody.json();
    finalResponse.current = currentData;
    const upcomingBody = await fetch(
      `${rootUrl}csgo/tournaments/upcoming?search[tier]=a&sort=&page=1&per_page=3`,
      options
    );
    const upcomingData = await upcomingBody.json();
    finalResponse.upcoming = upcomingData;
    console.log("here", finalResponse.upcoming);
    res.status(200);
    res.send(finalResponse);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};
module.exports = { getCSGOTournaments };
