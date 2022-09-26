// import { options, rootUrl } from APIcontroller
// const fetch = require("node-fetch");
const { options, rootUrl } = require("./APIController");

const recentR6STournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}r6siege/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
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

const ongoingR6STournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}r6siege/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
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

const upcomingR6STournaments = async function (req, res) {
  try {
    const body = await fetch(
      `${rootUrl}r6siege/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
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

function getR6STournaments() {
  recentR6STournaments();
  ongoingR6STournaments();
  upcomingR6STournaments();
}

module.exports = { getR6STournaments };
