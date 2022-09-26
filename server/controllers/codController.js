import { options, rootUrl } from APIcontroller

const recentCODTournaments = await fetch(`${rootUrl}codmw/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
options
)   .then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

const ongoingCODTournaments = await fetch(
    `${rootUrl}codmw/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingCODTournaments = await fetch(
    `${rootUrl}codmw/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { recentCODTournaments, ongoingCODTournaments, upcomingCODTournaments}