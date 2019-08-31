import ACTION_TYPES from "../actionTypes";
const initialState = {
  leagues: [],
  selectedLeague: {},
  selectedleagueTeams: []
};

const LeaguesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.LEAGUES.GET_ALL:
      return { ...state, leagues: payload.data.competitions };
    case ACTION_TYPES.LEAGUES.SET_SELECTED:
      return { ...state, selectedLeague: payload };
    case ACTION_TYPES.LEAGUES.SET_SELECTED_TEAMS:
      return { ...state, selectedleagueTeams: [...payload] };

    default:
      return state;
  }
};
export default LeaguesReducer;
