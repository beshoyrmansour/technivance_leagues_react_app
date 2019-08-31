import React from "react";
// import logoDark from "../assets/imgs/logo_dark.png";
import { Link } from "react-router-dom";

const LeagueCardComp = props => {
  // const title = useSelector(state => state.LeaguesReducer.title)
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
              <Link to={'league/'+props.leagueData.id} className="btn btn-primary align-self-end">
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCardComp;
