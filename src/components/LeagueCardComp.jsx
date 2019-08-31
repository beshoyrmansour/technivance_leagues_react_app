import React from "react";
// import logoDark from "../assets/imgs/logo_dark.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LeaguesActions from "../redux/actions/LeaguesActions";
import { withRouter } from "react-router-dom";

const LeagueCardComp = props => {
  const handleSelectedLeague = () => {
    console.log(props.leagueData);
    props.history.push("league/" + props.leagueData.id);
    props.SetSelectedLeague(props.leagueData)
    //to={"league/" + props.leagueData.id}
  };
  return (
    <div className="card mb-3">
      <div className="d-flex flex-column flex-md-row ">
        {props.leagueImg ? (
          <div className="app-card-img mw-100">
            <img src={props.leagueImg} className="card-img" alt="..." />
          </div>
        ) : (
          <div className="app-card-img mw-100 animated_background"></div>
        )}
        {/* <div className="app-card-img mw-100">
            <img src={props.leagueImg} className="card-img" alt="..." />
          </div> */}
        <div className="w-100">
          <div className="card-body h-100 d-flex flex-column ">
            {props.leagueData.name && <h5 className="card-title">{props.leagueData.name}</h5>}
            {props.leagueData.area && <p className="card-text">{props.leagueData.area.name}</p>}
            {props.leagueData.currentSeason && (
              <p className="card-text">
                <small className="text-muted">
                  current Season: {props.leagueData.currentSeason.startDate} - {props.leagueData.currentSeason.endDate}
                </small>
              </p>
            )}
            <div className="flex-grow-1 d-flex">
              <button className="btn btn-primary align-self-end" onClick={handleSelectedLeague}>
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...LeaguesActions }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LeagueCardComp));
