import { options, rootUrl } from APIcontroller

const recentRLTournaments = await fetch(`${rootUrl}rl/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
options
)   .then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

const ongoingRLTournaments = await fetch(
    `${rootUrl}rl/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingRLTournaments = await fetch(
    `${rootUrl}rl/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { recentRLTournaments, ongoingRLTournaments, upcomingRLTournaments}