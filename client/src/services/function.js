function getUrl(result) {
  let newUrl = "";
  if (result.Info.upcoming[0]) {
    newUrl = result.Info.upcoming.find("official_stream_url");
  } else if (result.Info.recent[0]) {
    newUrl = result.Info.recent.find("official_stream_url");
  } else if (result.Info.current[0]) {
    newUrl = result.Info.current.find("official_stream_url");
  }
  return newUrl;
}
getUrl();
console.log("newUrl is", newUrl);
