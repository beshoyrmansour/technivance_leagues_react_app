const baseURL = "https://api.football-data.org/v2";
const API_TOKEN="bd3a4dceaf43410e83b1d3de50318d94";
const API_ENDPOINTS = {
  ALL_LEAGUES: `${baseURL}/competitions`,
  LEAGUES_DETAILS: `${baseURL}/competitions/{LEAGUE_ID}`,
  LEAGUES_TEAMS: `${baseURL}/competitions/{LEAGUE_ID}/teams`,
  TEAM_DETAILS: `${baseURL}/teams/{TEAM_ID}`,
};

export {API_ENDPOINTS, API_TOKEN};
