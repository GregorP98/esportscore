const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const PAT = process.env.PAT;

const options = {
  method: "GET",
  headers: { accept: "application/json", authorization: `Bearer ${PAT}` },
};

const rootUrl = "https://api.pandascore.co/";

module.exports = { options, rootUrl };
