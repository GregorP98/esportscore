// import Dashboard from "../components/Dashboard/Dashboard";
// import GameLayout from "../components/GameLayout/GameLayout";
import { getTournaments } from "../services/APIservices";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
// import "./GameLayout.css";
// import TwitchEmbed from "../TwitchEmbed/TwitchEmbed.jsx";
// import Box from "@mui/material";
import { Box, Grid, Card } from "@mui/material";
import RecentCard from "../components/TournamentCards/RecentCard";
import OngoingCard from "../components/TournamentCards/OngoingCard";
import UpcomingCard from "../components/TournamentCards/UpcomingCard";
import ReactPlayer from "react-player";
import { useState } from "react";

function GameInfo() {
  const location = useLocation();
  const data = location.state;
  console.log("location is", location);
  const [result, setResult] = useState({});
  let [newUrl, setNewUrl] = useState("");
  let [recentTournaments, setRecentTournaments] = useState([]);
  let [ongoingTournaments, setOngoingTournaments] = useState([]);
  let [upcomingTournaments, setUpcomingTournaments] = useState([]);
  useEffect(() => {
    console.log("the game is", data);
    async function getGamedata() {
      const tournaments = await getTournaments(data);
      const tournamentUrl = getUrl(tournaments);
      const pastTournaments = getRecentTournaments(tournaments);
      const currentTournaments = getOngoingTournaments(tournaments);
      const futureTournaments = getUpcomingTournaments(tournaments);
      setResult(tournaments);
      setNewUrl(tournamentUrl);
      setRecentTournaments(pastTournaments);
      setOngoingTournaments(currentTournaments);
      setUpcomingTournaments(futureTournaments);
      console.log("useeffect result", result);
      if (result.error) {
        //display user friendly error
      } else {
        //display result.data in some way (using state? pass to gamelayout?)
        return (
          <div id="dashboard" style={{ margin: "auto" }}>
            <Header />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs>
                  {newUrl ? (
                    <ReactPlayer
                      style={{
                        paddingBottom: 10,
                        paddingLeft: 10,
                      }}
                      url={newUrl}
                    />
                  ) : (
                    <Card>
                      <h1>Sorry, no video available right now. </h1>
                    </Card>
                  )}
                </Grid>
                <Grid item xs>
                  <RecentCard recent={recentTournaments} />
                </Grid>
                <Grid item xs>
                  <OngoingCard ongoing={ongoingTournaments} />
                </Grid>
                <Grid item xs>
                  <UpcomingCard
                    upcoming={upcomingTournaments}
                    style={{ paddingRight: 10 }}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        );
      }
    }
    getGamedata();
  }, []);

  function getUrl(result) {
    let newUrl = "";
    console.log("what i want", result);
    if (result.Info) {
      if (result.Info.current.length > 0) {
        newUrl = result.Info.current[0].matches[0].official_stream_url;
      } else if (result.Info.recent.length > 0) {
        newUrl = result.Info.recent[0].matches[0].official_stream_url;
      } else if (result.Info.upcoming.length > 0) {
        newUrl = result.Info.upcoming[0].matches[0].official_stream_url;
      }
      console.log("new newUrl", newUrl);
      return newUrl;
    }
  }

  function getRecentTournaments(result) {
    let recentTournaments = "";
    if (result.Info.recent) {
      recentTournaments = result.Info.recent;
    }
    console.log("recent tourns", recentTournaments);
    return recentTournaments;
  }
  function getOngoingTournaments(result) {
    let ongoingTournaments = "";
    if (result.Info.ongoing) {
      ongoingTournaments = result.Info.ongoing;
    }
    console.log("ongoing tourns", ongoingTournaments);
    return ongoingTournaments;
  }

  function getUpcomingTournaments(result) {
    let upcomingTournaments = "";
    if (result.Info.upcoming) {
      upcomingTournaments = result.Info.upcoming;
    }
    console.log("upcoming tourns", upcomingTournaments);
    return upcomingTournaments;
  }
  // a few things to fix - would appear youtube links not loading
  //                     - CSGO has recent[0] with link, but displays no vid. Might happen elsewhere.
  // make something that checks from dashboard if a stream is live, and shows "live now"
  // when loading more than 1 card's data, wont reach useeffect therefore gets no data
  // return (
  //   <div id="dashboard" style={{ margin: "auto" }}>
  //     <Header />
  //     <Box sx={{ flexGrow: 1 }}>
  //       <Grid container spacing={1}>
  //         <Grid item xs>
  //           {newUrl ? (
  //             <ReactPlayer
  //               style={{
  //                 paddingBottom: 10,
  //                 paddingLeft: 10,
  //               }}
  //               url={newUrl}
  //             />
  //           ) : (
  //             <Card>
  //               <h1>Sorry, no video available right now. </h1>
  //             </Card>
  //           )}
  //         </Grid>
  //         <Grid item xs>
  //           <RecentCard recent={recentTournaments} />
  //         </Grid>
  //         <Grid item xs>
  //           <OngoingCard />
  //         </Grid>
  //         <Grid item xs>
  //           <UpcomingCard
  //             upcoming={upcomingTournaments}
  //             style={{ paddingRight: 10 }}
  //           />
  //         </Grid>
  //       </Grid>
  //     </Box>
  //   </div>
  // );
}

export default GameInfo;
