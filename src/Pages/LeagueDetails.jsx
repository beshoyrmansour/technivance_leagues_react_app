import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS, API_TOKEN } from "../configs/APIs";
import TeamCardComp from "../components/TeamCardComp";
import TeamCardCompPlaceholder from "../components/TeamCardCompPlaceholder";

const LeagueDetails = props => {
  const { league_id } = props.match.params;
  // const { handle } = this.props.match.params
  const [leagueData, setLeagueData] = useState({});
  const [leagueTeamsData, setLeagueTeamsData] = useState([]);

  const GetLeagueTeams = leagueId => {
    axios
      .get(API_ENDPOINTS.LEAGUES_TEAMS.replace("{LEAGUE_ID}", leagueId), {
        headers: {
          "X-Auth-Token": API_TOKEN
        }
      })
      .then(res => {
        console.log(" LEAGUES_TEAMS =>res :", res);
        setLeagueTeamsData(res);
        // dispatch({ type: ACTION_TYPES.LEAGUES.GET_ALL, payload: res });
      })
      .catch(err => {
        console.log("err =>", err.response);
        setLeagueTeamsData(LocalTeamsMockData);
      });
  };
  useEffect(() => {
    axios
      .get(API_ENDPOINTS.LEAGUES_DETAILS.replace("{LEAGUE_ID}", league_id), {
        headers: {
          "X-Auth-Token": API_TOKEN
        }
      })
      .then(res => {
        console.log(" LEAGUES_DETAILS =>res :", res);
        setLeagueData(res);
        GetLeagueTeams(league_id);
        // dispatch({ type: ACTION_TYPES.LEAGUES.GET_ALL, payload: res });
      })
      .catch(err => {
        console.log("err =>", err.response);

        setLeagueData(LocalMockData);
        GetLeagueTeams(league_id);
      });
    return () => {
      // cleanup
    };
  }, []);
  return (
    <div>
      <div className="display-4">
        Football Leagues
        {leagueData.hasOwnProperty("name") ? (
          <p className="lead">{leagueData.name}</p>
        ) : (
          <p className="d-block mt-3 animated_background" style={{ width: "180px", height: "40px" }}></p>
        )}
      </div>
      <div className="d-flex  flex-column flex-md-row justify-content-between">
        {leagueData.hasOwnProperty("area") ? (
          <p className="lead">{leagueData.area.name}</p>
        ) : (
          <p className="d-block mt-3 animated_background" style={{ width: "120px", height: "40px" }}></p>
        )}
        {leagueData.hasOwnProperty("currentSeason") ? (
          <p className="lead">
            Current Season: {leagueData.currentSeason.startDate} - {leagueData.currentSeason.endDate}
          </p>
        ) : (
          <p className="d-block mt-3 animated_background" style={{ width: "400px", height: "40px" }}></p>
        )}
      </div>
      <div className="mt-5 row">
        {leagueTeamsData.length > 0 ? (
          leagueTeamsData.map(team => (
            <div className="col-12 col-md-4">
              <TeamCardComp key={team.id} teamData={team} leagueId={league_id} />
            </div>
          ))
        ) : (
          <TeamCardCompPlaceholder times={20} />
        )}
      </div>
    </div>
  );
};

export default LeagueDetails;
const LocalMockData = {
  id: 2021,
  area: {
    id: 2072,
    name: "England"
  },
  name: "Premier League",
  code: "PL",
  emblemUrl: null,
  plan: "TIER_ONE",
  currentSeason: {
    id: 468,
    startDate: "2019-08-09",
    endDate: "2020-05-17",
    currentMatchday: 4,
    winner: null
  },
  seasons: [
    {
      id: 468,
      startDate: "2019-08-09",
      endDate: "2020-05-17",
      currentMatchday: 4,
      winner: null
    },
    {
      id: 151,
      startDate: "2018-08-10",
      endDate: "2019-05-12",
      currentMatchday: 38,
      winner: null
    },
    {
      id: 23,
      startDate: "2017-08-11",
      endDate: "2018-05-13",
      currentMatchday: 38,
      winner: {
        id: 65,
        name: "Manchester City FC",
        shortName: "Man City",
        tla: "MCI",
        crestUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
      }
    },
    {
      id: 256,
      startDate: "2016-08-13",
      endDate: "2017-05-21",
      currentMatchday: null,
      winner: {
        id: 61,
        name: "Chelsea FC",
        shortName: "Chelsea",
        tla: "CHE",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"
      }
    },
    {
      id: 257,
      startDate: "2015-08-08",
      endDate: "2016-05-17",
      currentMatchday: null,
      winner: {
        id: 338,
        name: "Leicester City FC",
        shortName: "Leicester City",
        tla: "LEI",
        crestUrl: "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png"
      }
    },
    {
      id: 258,
      startDate: "2014-08-16",
      endDate: "2015-05-24",
      currentMatchday: null,
      winner: {
        id: 61,
        name: "Chelsea FC",
        shortName: "Chelsea",
        tla: "CHE",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"
      }
    },
    {
      id: 259,
      startDate: "2013-08-17",
      endDate: "2014-05-11",
      currentMatchday: null,
      winner: {
        id: 65,
        name: "Manchester City FC",
        shortName: "Man City",
        tla: "MCI",
        crestUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
      }
    },
    {
      id: 260,
      startDate: "2012-08-18",
      endDate: "2013-05-19",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 261,
      startDate: "2011-08-13",
      endDate: "2012-05-13",
      currentMatchday: null,
      winner: {
        id: 65,
        name: "Manchester City FC",
        shortName: "Man City",
        tla: "MCI",
        crestUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
      }
    },
    {
      id: 262,
      startDate: "2010-08-14",
      endDate: "2011-05-22",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 263,
      startDate: "2009-08-15",
      endDate: "2010-05-09",
      currentMatchday: null,
      winner: {
        id: 61,
        name: "Chelsea FC",
        shortName: "Chelsea",
        tla: "CHE",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"
      }
    },
    {
      id: 264,
      startDate: "2008-08-16",
      endDate: "2009-05-24",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 265,
      startDate: "2007-08-11",
      endDate: "2008-05-11",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 266,
      startDate: "2006-08-19",
      endDate: "2007-05-13",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 267,
      startDate: "2005-08-13",
      endDate: "2006-05-07",
      currentMatchday: null,
      winner: {
        id: 61,
        name: "Chelsea FC",
        shortName: "Chelsea",
        tla: "CHE",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"
      }
    },
    {
      id: 268,
      startDate: "2004-08-14",
      endDate: "2005-05-15",
      currentMatchday: null,
      winner: {
        id: 61,
        name: "Chelsea FC",
        shortName: "Chelsea",
        tla: "CHE",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"
      }
    },
    {
      id: 269,
      startDate: "2003-08-16",
      endDate: "2004-05-15",
      currentMatchday: null,
      winner: {
        id: 57,
        name: "Arsenal FC",
        shortName: "Arsenal",
        tla: "ARS",
        crestUrl: "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
      }
    },
    {
      id: 270,
      startDate: "2002-08-17",
      endDate: "2003-05-11",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 271,
      startDate: "2001-08-18",
      endDate: "2002-05-11",
      currentMatchday: null,
      winner: {
        id: 57,
        name: "Arsenal FC",
        shortName: "Arsenal",
        tla: "ARS",
        crestUrl: "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
      }
    },
    {
      id: 272,
      startDate: "2000-08-19",
      endDate: "2001-05-19",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 273,
      startDate: "1999-08-07",
      endDate: "2000-05-14",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 274,
      startDate: "1998-08-15",
      endDate: "1999-05-16",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 275,
      startDate: "1997-08-09",
      endDate: "1998-05-10",
      currentMatchday: null,
      winner: {
        id: 57,
        name: "Arsenal FC",
        shortName: "Arsenal",
        tla: "ARS",
        crestUrl: "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
      }
    },
    {
      id: 276,
      startDate: "1996-08-17",
      endDate: "1997-05-11",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 277,
      startDate: "1995-08-19",
      endDate: "1996-05-04",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    },
    {
      id: 254,
      startDate: "1994-08-20",
      endDate: "1995-05-14",
      currentMatchday: null,
      winner: {
        id: 59,
        name: "Blackburn Rovers FC",
        shortName: "Blackburn Rov",
        tla: "BBR",
        crestUrl: null
      }
    },
    {
      id: 255,
      startDate: "1993-08-14",
      endDate: "1994-05-08",
      currentMatchday: null,
      winner: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crestUrl: "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
      }
    }
  ],
  lastUpdated: "2019-08-31T00:00:14Z"
};

const LocalTeamsMockData = [
  {
    id: 18,
    area: {
      id: 2088,
      name: "Germany"
    },
    name: "Borussia Mönchengladbach",
    shortName: "M'gladbach",
    tla: "BMG",
    address: "Hennes-Weisweiler-Allee 1 Mönchengladbach 41179",
    phone: "+49 (02161) 92930",
    website: "http://www.borussia.de",
    email: "info@borussia.de",
    founded: 1900,
    clubColors: "Black / White / Green",
    venue: null,
    squad: [
      {
        id: 3176,
        name: "Matthias Ginter",
        position: "Defender",
        dateOfBirth: "1994-01-03T00:00:00Z",
        countryOfBirth: "Germany",
        nationality: "Germany",
        role: "PLAYER"
      }
    ],
    lastUpdated: "2018-05-31T12:49:47Z"
  },
  {
    id: 19,
    area: {
      id: 2088,
      name: "Germany"
    },
    name: "Borussia Mönchengladbach",
    shortName: "M'gladbach",
    tla: "BMG",
    address: "Hennes-Weisweiler-Allee 1 Mönchengladbach 41179",
    phone: "+49 (02161) 92930",
    website: "http://www.borussia.de",
    email: "info@borussia.de",
    founded: 1900,
    clubColors: "Black / White / Green",
    venue: null,
    squad: [
      {
        id: 3176,
        name: "Matthias Ginter",
        position: "Defender",
        dateOfBirth: "1994-01-03T00:00:00Z",
        countryOfBirth: "Germany",
        nationality: "Germany",
        role: "PLAYER"
      }
    ],
    lastUpdated: "2018-05-31T12:49:47Z"
  },
  {
    id: 17,
    area: {
      id: 2088,
      name: "Germany"
    },
    name: "Borussia Mönchengladbach",
    shortName: "M'gladbach",
    tla: "BMG",
    address: "Hennes-Weisweiler-Allee 1 Mönchengladbach 41179",
    phone: "+49 (02161) 92930",
    website: "http://www.borussia.de",
    email: "info@borussia.de",
    founded: 1900,
    clubColors: "Black / White / Green",
    venue: null,
    squad: [
      {
        id: 3176,
        name: "Matthias Ginter",
        position: "Defender",
        dateOfBirth: "1994-01-03T00:00:00Z",
        countryOfBirth: "Germany",
        nationality: "Germany",
        role: "PLAYER"
      }
    ],
    lastUpdated: "2018-05-31T12:49:47Z"
  }
];
