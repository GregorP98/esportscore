//for each game:
//current tournaments --> results+matches in said tournament
//upcoming tournaments --> matches in said tournament
const rootUrl = "http://localhost:3001";

export async function getVALTournaments() {
  try {
    const data = await fetch(`${rootUrl}/valorant`);
    console.log("data is", data);
    const fetchedData = await data.json();
    console.log("fetched data is", fetchedData);
    // return fetchedData;
    console.log("recent tournaments", fetchedData.recent);
    return { error: null, data: fetchedData };
  } catch (e) {
    console.log("getVALTournaments", e);
    return { error: e, data: null };
  }
}
