// import Dashboard from "../components/Dashboard/Dashboard";
import GameLayout from "../components/GameLayout/GameLayout";
import { getTournaments } from "../services/APIservices";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GameInfo() {
  const location = useLocation();
  const data = location.state;
  // console.log("location is", location);
  useEffect(() => {
    // console.log("the game is", data);
    async function getGamedata() {
      const result = await getTournaments(data);
      // console.log(result);
      if (result.error) {
        //display user friendly error
      } else {
        //display result.data in some way (using state? pass to gamelayout?)
      }
    }
    getGamedata();
  }, [data]);
  return <GameLayout />;
}

export default GameInfo;
