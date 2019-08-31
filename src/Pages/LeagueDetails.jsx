import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS, API_TOKEN } from "../configs/APIs";
import TeamCardComp from "../components/TeamCardComp";
import TeamCardCompPlaceholder from "../components/TeamCardCompPlaceholder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LeaguesActions from "../redux/actions/LeaguesActions";
import * as TeamsActions from "../redux/actions/TeamsActions";
import { withRouter } from "react-router-dom";

const LeagueDetails = props => {
  const { league_id } = props.match.params;
  // const { handle } = this.props.match.params

  useEffect(() => {
    if (!props.selectedLeague.hasOwnProperty("id")) props.SetSelectedLeague({ id: league_id });
    props.GetLeaguesTeams(league_id);
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div>
      <div className="display-4">
        Football Leagues
        {props.selectedLeague.hasOwnProperty("name") ? (
          <p className="lead">{props.selectedLeague.name}</p>
        ) : (
          <p className="d-block mt-3 animated_background" style={{ width: "180px", height: "40px" }}></p>
        )}
      </div>
      <div className="d-flex  flex-column flex-md-row justify-content-between">
        {props.selectedLeague.hasOwnProperty("area") ? (
          <p className="lead">{props.selectedLeague.area.name}</p>
        ) : (
          <p className="d-block mt-3 animated_background" style={{ width: "120px", height: "40px" }}></p>
        )}
        {props.selectedLeague.hasOwnProperty("currentSeason") ? (
          <p className="lead">
            Current Season: {props.selectedLeague.currentSeason.startDate} - {props.selectedLeague.currentSeason.endDate}
          </p>
        ) : (
          <p className="d-block mt-3 animated_background" style={{ width: "400px", height: "40px" }}></p>
        )}
      </div>
      <div className="mt-5 row">
        {props.selectedleagueTeams.length > 0 ? (
          props.selectedleagueTeams.map(team => (
            <div className="col-12 col-md-4" key={team.id}>
              <TeamCardComp  teamData={team} />
            </div>
          ))
        ) : (
          <TeamCardCompPlaceholder times={20} />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  selectedLeague: state.LeaguesReducer.selectedLeague,
  selectedleagueTeams: state.LeaguesReducer.selectedleagueTeams
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...LeaguesActions, ...TeamsActions }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LeagueDetails));
