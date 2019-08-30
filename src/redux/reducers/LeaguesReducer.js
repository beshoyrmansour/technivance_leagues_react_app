import ACTION_TYPES from "../actionTypes";
const initialState = {};

const LeaguesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.LEAGUES.GET_ALL:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default LeaguesReducer