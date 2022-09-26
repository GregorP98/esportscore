// import { options, rootUrl } from APIcontroller
// const fetch = require("node-fetch");
const { options, rootUrl } = require("./APIController");

const recentOWTournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}ow/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
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

const ongoingOWTournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}ow/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
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

const upcomingOWTournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}ow/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
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

function getOWTournaments() {
  recentOWTournaments();
  ongoingOWTournaments();
  upcomingOWTournaments();
}

module.exports = { getOWTournaments };
