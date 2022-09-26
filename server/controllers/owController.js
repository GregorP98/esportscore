import { options, rootUrl } from APIcontroller

const recentOWTournaments = await fetch(`${rootUrl}ow/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
options
)   .then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

const ongoingOWTournaments = await fetch(
    `${rootUrl}ow/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingOWTournaments = await fetch(
    `${rootUrl}ow/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { recentOWTournaments, ongoingOWTournaments, upcomingOWTournaments}