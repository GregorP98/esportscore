const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const PAT = process.env.PAT;
const { options, rootUrl } = require("./APIController");

const getFIFATournaments = async function (req, res) {
  let finalResponse = {};
  try {
    console.log("getting tournaments");
    const recentBody = await fetch(
      `${rootUrl}fifa/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
      options
    );
    const recentData = await recentBody.json();
    finalResponse.recent = recentData;
    const currentBody = await fetch(
      `${rootUrl}fifa/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
      options
    );
    const currentData = await currentBody.json();
    finalResponse.current = currentData;
    const upcomingBody = await fetch(
      `${rootUrl}fifa/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
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

module.exports = { getFIFATournaments };
