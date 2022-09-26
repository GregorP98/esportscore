import { options, rootUrl } from APIcontroller

const recentValTournaments = await fetch(`${rootUrl}valorant/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
options
)   .then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

const ongoingValTournaments = await fetch(
    `${rootUvalorant}valorant/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingValTournaments = await fetch(
    `${rootUrl}rl/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { recentValTournaments, ongoingValTournaments, upcomingValTournaments}