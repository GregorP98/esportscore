import { options, rootUrl } from APIcontroller

const ongoingCSGOTournaments = await fetch(
    `${rootUrl}csgo/tournaments/running?search[tier]=a&sort=&page=1&per_page=50`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingCSGOTournaments = await fetch(
    `${rootUrl}/csgo/tournaments/upcoming`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { ongoingCSGOTournaments, upcomingCSGOTournaments}