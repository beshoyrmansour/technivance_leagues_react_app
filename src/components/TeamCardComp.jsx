import React from "react";
import logoDark from "../assets/imgs/logo_dark.png";
import { Link } from "react-router-dom";

const TeamCardComp = (props) => {

  return (
    <div className="card mb-3">
        <Link to={'/team/'+props.teamData.id}>
      <div className="row no-gutters">
        <div className="col-md-4 app-card-img mw-100 ">
          <img src={logoDark} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body h-100 d-flex align-items-center">
            <h4 className="card-title">{props.teamData.name}</h4>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default TeamCardComp;
