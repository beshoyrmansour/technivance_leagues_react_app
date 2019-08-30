import React from "react";
import LeagueCardComp from "../components/LeagueCardComp";
const LeaguesPage = () => {
    
  return (
    <div>
      <p className="display-4">
        Football Leagues
        <p className="lead">All Leagues</p>
      </p>
      <div className="container">
        <LeagueCardComp />
      </div>
    </div>
  );
};

export default LeaguesPage;
