import { options, rootUrl } from APIcontroller

const recentCSGOTournaments = await fetch(`${rootUrl}csgo/tournaments/past?search[tier]=a&page=1&per_page=10&sort=-begin_at`,
options
)   .then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

const ongoingCSGOTournaments = await fetch(
    `${rootUrl}csgo/tournaments/running?search[tier]=a&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingCSGOTournaments = await fetch(
    `${rootUrl}csgo/tournaments/upcoming?search[tier]=a&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { recentCSGOTournaments, ongoingCSGOTournaments, upcomingCSGOTournaments}