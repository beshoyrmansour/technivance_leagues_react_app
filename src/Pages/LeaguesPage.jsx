import React, { Component } from "react";
import { connect } from "react-redux";
import LeagueCardComp from "../components/LeagueCardComp";
import LeagueCardCompPlaceholder from "../components/LeagueCardCompPlaceholder";
import { bindActionCreators } from "redux";
import * as LeaguesActions from "../redux/actions/LeaguesActions";
export class LeaguesPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.GetAllLeagues();
  }


  render() {
    return (
      <div>
        <div className="display-4">
          Football Leagues
          <p className="lead">All Leagues</p>
        </div>
        <div className="container">
          {this.props.leagues.length > 0 ? (
            this.props.leagues.map(league => {
              return <LeagueCardComp key={league.id} leagueData={league} />;
            })
          ) : (
            <LeagueCardCompPlaceholder times={10} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leagues: state.LeaguesReducer.leagues
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...LeaguesActions }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaguesPage);
