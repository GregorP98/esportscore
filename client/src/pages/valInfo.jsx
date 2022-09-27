// import Dashboard from "../components/Dashboard/Dashboard";
import GameLayout from "../components/GameLayout/GameLayout";
import { getVALTournaments } from "../services/APIservices";
import { useEffect } from "react";

function ValInfo() {
  useEffect(() => {
    async function getVALdata() {
      const result = await getVALTournaments();
      console.log(result);
      if (result.error) {
        //display user friendly error
      } else {
        //display result.data in some way (using state? pass to gamelayout?)
      }
    }
    getVALdata();
  }, []);
  return <GameLayout />;
}

export default ValInfo;
