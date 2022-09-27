//for each game:
//recent tournaments
//current tournaments --> results+matches in said tournament
//upcoming tournaments --> matches in said tournament
// import GAMES from "../utils/Games.json";
const rootUrl = "http://localhost:3001";

export async function getTournaments(data) {
  try {
    const info = await fetch(`${rootUrl}/${data}`);
    // console.log("data is", info);
    const fetchedInfo = await info.json();
    // console.log("fetched is", fetchedInfo);
    // return fetchedData;
    // console.log("recent tournaments", fetchedInfo.recent);
    return { error: null, Info: fetchedInfo };
  } catch (e) {
    // console.log("getTournaments", e);
    return { error: e, data: null };
  }
}

// export async function getVALTournaments(game) {
//   try {
//     const data = await fetch(`${rootUrl}/valorant`);
//     console.log("data is", data);
//     const fetchedData = await data.json();
//     console.log("fetched data is", fetchedData);
//     // return fetchedData;
//     console.log("recent tournaments", fetchedData.recent);
//     return { error: null, data: fetchedData };
//   } catch (e) {
//     console.log("getVALTournaments", e);
//     return { error: e, data: null };
//   }
// }
