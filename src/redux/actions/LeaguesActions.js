import axios from "axios";
import ACTION_TYPES from "../actionTypes";
import { API_ENDPOINTS, API_TOKEN } from "../../configs/APIs";

export const GetAllLeagues = () => dispatch => {
  axios
    .get(API_ENDPOINTS.ALL_LEAGUES, {
      headers: {
        "X-Auth-Token": API_TOKEN
      }
    })
    .then(res => {
    //   console.log(" GetAllLeagues =>res :", res.data);
      dispatch({ type: ACTION_TYPES.LEAGUES.GET_ALL, payload: res });
    }).catch(err=>{
        console.log('err =>', err);
        
    });
};
