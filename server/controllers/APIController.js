const path = require("path");
require("dotenv").config({ path: path.resolve(_dirname, "../../.env") });
const PAT = process.env.PAT;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${PAT}`);
var options = {
  method: "GET",
  headers: myHeaders,
};

const rootUrl = "https://api.pandascore.co/";
//for each game:
//twitch embed?
//current tournaments --> results+matches in said tournament
//upcoming tournaments --> matches in said tournament

//I want something like current{game}Tournaments

module.exports = { options, rootUrl };
