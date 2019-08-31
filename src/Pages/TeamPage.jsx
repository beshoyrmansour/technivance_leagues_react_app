import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PlayerCardComp from "../components/PlayerCardComp";
import PlayerCardCompPlaceholder from "../components/PlayerCardCompPlaceholder";

import { bindActionCreators } from "redux";
import * as TeamsActions from "../redux/actions/TeamsActions";
const TeamPage = props => {
  const { team_id } = props.match.params;

  useEffect(() => {
    if (props.selectedTeam.id !== team_id) props.SetSelectedTeam({ id: team_id });
    return () => {
      // cleanup;
    };
  }, []);
  return (
    <div>
      <div className="display-4">
        Football Leagues
        <div className="lead d-block mb-5">
          {props.selectedLeague.hasOwnProperty("name") && <span onClick={props.history.goBack}>{props.selectedLeague.name} / </span>}

          {props.selectedTeam.hasOwnProperty("name") ? (
            <span>{props.selectedTeam.name}</span>
          ) : (
            <span className="d-inline-block mt-3 animated_background" style={{ width: "180px", height: "20px" }}></span>
          )}
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="d-flex flex-column flex-md-row ">
            {props.selectedTeam.hasOwnProperty("crestUrl") ? (
              <div className="app-card-img mw-100">
                  {props.selectedTeam.crestUrl!==null ?
                <img src={props.selectedTeam.crestUrl} className="card-img" alt="..." />
                : <div className="team-tla-block" style={{padding: "2rem 5rem"}}>{props.selectedTeam.tla}</div>
            }
              </div>
            ) : (
              <div className="app-card-img mw-100 animated_background"></div>
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {props.selectedTeam.hasOwnProperty("name") ? (
                <h2 className="card-title">{props.selectedTeam.name}</h2>
              ) : (
                <h2 className="card-title animated_background" style={{ width: "280px", height: "40px" }}></h2>
              )}
              {props.selectedTeam.hasOwnProperty("address") ? (
                <p className="card-text">{props.selectedTeam.address}</p>
              ) : (
                <p className="card-text animated_background" style={{ width: "200px", height: "40px" }}></p>
              )}
              {props.selectedTeam.hasOwnProperty("area") ? (
                <p className="card-text">{props.selectedTeam.area.name}</p>
              ) : (
                <p className="card-text animated_background" style={{ width: "200px", height: "40px" }}></p>
              )}
              <p className="card-text">
                {props.selectedTeam.hasOwnProperty("phone") ? (
                  <small className="text-muted">{props.selectedTeam.phone}</small>
                ) : (
                  <small className="d-block animated_background" style={{ width: "100px", height: "40px" }}></small>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-columns">
        {props.selectedTeam.hasOwnProperty("squad") ? (
          props.selectedTeam.squad.map(player => (
            // <div className="col-12 col-md-4" key={player.id}>
              <PlayerCardComp palyerData={player} key={player.id} />
          ))
        ) : (
          <PlayerCardCompPlaceholder times={20} />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  selectedTeam: state.TeamsReducer.selectedTeam,
  selectedLeague: state.LeaguesReducer.selectedLeague
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...TeamsActions }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamPage);
