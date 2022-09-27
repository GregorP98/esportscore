// import Dashboard from "../components/Dashboard/Dashboard";
import GameLayout from "../components/GameLayout/GameLayout";
import { getVALTournaments } from "../services/APIservices";
import { useEffect } from "react";

function MockInfo() {
  useEffect(() => {
    async function getGamedata() {
      const result = await getVALTournaments(game);
      console.log(result);
      if (result.error) {
        //display user friendly error
      } else {
        //display result.data in some way (using state? pass to gamelayout?)
      }
    }
    getGamedata();
  }, []);
  return <GameLayout />;
}

export default MockInfo;
