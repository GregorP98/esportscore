import { options, rootUrl } from APIcontroller

const recentR6STournaments = await fetch(`${rootUrl}r6siege/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
options
)   .then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

const ongoingR6STournaments = await fetch(
    `${rootUrl}r6siege/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingR6STournaments = await fetch(
    `${rootUrl}r6siege/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { recentR6STournaments, ongoingR6STournaments, upcomingR6STournaments}