const baseURL = "https://api.football-data.org/v2";

const API_ENDPOINTS = {
  ALL_LEAGUES: `${baseURL}/competitions`,
  LEAGUES_DETAILS: `${baseURL}/competitions/{LEAGUE_ID}`,
  LEAGUES_TEAMS: `${baseURL}/competitions/{LEAGUE_ID}/teams`,
  LEAGUE_TEAM_DETAILS: `${baseURL}/competitions/{LEAGUE_ID}/teams/{TEAM_ID}`,
};

export default API_ENDPOINTS;
