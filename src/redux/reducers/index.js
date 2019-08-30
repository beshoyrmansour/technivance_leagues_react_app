import { combineReducers } from "redux";
import TeamsReducer from "./TeamsReducer";
import LeaguesReducer from "./LeaguesReducer";

export default combineReducers({
  TeamsReducer,
  LeaguesReducer
});
