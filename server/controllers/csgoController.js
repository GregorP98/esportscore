// import { options, rootUrl } from APIcontroller
// const fetch = require("node-fetch");
const { options, rootUrl } = require("./APIController");

const recentCSGOTournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}csgo/tournaments/past?search[tier]=a&page=1&per_page=10&sort=-begin_at`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    res.status = 200;
    res.send(body);
  } catch (error) {
    res.status = 500;
  }
};

const ongoingCSGOTournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}csgo/tournaments/running?search[tier]=a&sort=&page=1&per_page=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    res.status = 200;
    res.send(body);
  } catch (error) {
    res.status = 500;
  }
};

const upcomingCSGOTournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}csgo/tournaments/upcoming?search[tier]=a&sort=&page=1&per_page=10`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    res.status = 200;
    res.send(body);
  } catch (error) {
    res.status = 500;
  }
};

function getCSGOTournaments() {
  recentCSGOTournaments();
  ongoingCSGOTournaments();
  upcomingCSGOTournaments();
}

module.exports = { getCSGOTournaments };
