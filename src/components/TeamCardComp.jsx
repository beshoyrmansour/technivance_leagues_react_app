import React from "react";
import logoDark from "../assets/imgs/logo_dark.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TeamsActions from "../redux/actions/TeamsActions";
import { withRouter } from "react-router-dom";
const TeamCardComp = props => {
  const handleSelectedTeam = () => {
    props.history.push("/team/" + props.teamData.id);
    props.SetSelectedTeam(props.teamData)
  };
  return (
    <div className="card mb-3">
      <div className="row no-gutters" onClick={handleSelectedTeam}>
        <div className="col-md-4 app-card-img mw-100 ">
          <div className="team-tla-block">{props.teamData.tla}</div>
          {/* <img src={logoDark} className="card-img" alt="..." /> */}
        </div>
        <div className="col-md-8">
          <div className="card-body h-100 d-flex align-items-center">
            <h4 className="card-title">{props.teamData.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...TeamsActions }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TeamCardComp));
