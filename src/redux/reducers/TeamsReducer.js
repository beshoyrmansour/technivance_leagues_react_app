import ACTION_TYPES from "../actionTypes";
const initialState = { selectedTeam: {} };

const TeamsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.TEAMS.SET_SELECTED:

      return { ...state, selectedTeam: payload };

    default:
      return state;
  }
};
export default TeamsReducer;
