import { options, rootUrl } from APIcontroller

const recentFIFATournaments = await fetch(`${rootUrl}fifa/tournaments/past?search[tier]=s&page=1&per_page=10&sort=-begin_at`,
options
)   .then((response) => response.json())
.then((response) => console.log(response))
.catch((err) => console.error(err));

const ongoingFIFATournaments = await fetch(
    `${rootUrl}fifa/tournaments/running?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  
  const upcomingFIFATournaments = await fetch(
    `${rootUrl}fifa/tournaments/upcoming?search[tier]=s&sort=&page=1&per_page=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    module.exports = { recentFIFATournaments, ongoingFIFATournaments, upcomingFIFATournaments}