import ACTION_TYPES from "../actionTypes";
const initialState = {
  leagues: []
};

const LeaguesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.LEAGUES.GET_ALL:
      return { ...state, leagues: payload.data.competitions };

    default:
      return state;
  }
};
export default LeaguesReducer;
