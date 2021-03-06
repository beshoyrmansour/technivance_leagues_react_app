import axios from "axios";
import ACTION_TYPES from "../actionTypes";
import { API_ENDPOINTS } from "../../configs/APIs";


export const SetSelectedTeam= selectedTeam => dispatch => {        
    axios
      .get(API_ENDPOINTS.TEAM_DETAILS.replace("{TEAM_ID}", selectedTeam.id))
      .then(res => {
        dispatch({ type: ACTION_TYPES.TEAMS.SET_SELECTED, payload: res.data });
      })
      .catch(err => {
        console.log("err =>", err.response);
          dispatch({
            type: ACTION_TYPES.TEAMS.SET_SELECTED,
            payload: selectedTeam.hasOwnProperty("name") ? selectedTeam : 
            LocalTeamMockData.data
          });
      });
  };

  const LocalTeamMockData={
    selectedTeam: {
      data: {
        id: 18,
        area: {
          id: 2088,
          name: 'Germany'
        },
        activeCompetitions: [
          {
            id: 2011,
            area: {
              id: 2088,
              name: 'Germany'
            },
            name: 'DFB-Pokal',
            code: 'DFB',
            plan: 'TIER_TWO',
            lastUpdated: '2019-08-12T22:47:40Z'
          },
          {
            id: 2002,
            area: {
              id: 2088,
              name: 'Germany'
            },
            name: 'Bundesliga',
            code: 'BL1',
            plan: 'TIER_ONE',
            lastUpdated: '2019-08-31T17:29:17Z'
          },
          {
            id: 2146,
            area: {
              id: 2077,
              name: 'Europe'
            },
            name: 'UEFA Europa League',
            code: 'EL',
            plan: 'TIER_TWO',
            lastUpdated: '2019-08-30T00:05:01Z'
          }
        ],
        name: 'LOCAL Borussia Mönchengladbach',
        shortName: 'M\'gladbach',
        tla: 'BMG',
        crestUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg',
        address: 'Hennes-Weisweiler-Allee 1 Mönchengladbach 41179',
        phone: '+49 (02161) 92930',
        website: 'http://www.borussia.de',
        email: 'info@borussia.de',
        founded: 1900,
        clubColors: 'Black / White / Green',
        venue: 'Stadion im Borussia-Park',
        squad: [
          {
            id: 3470,
            name: 'Yann Sommer',
            position: 'Goalkeeper',
            dateOfBirth: '1988-12-17T00:00:00Z',
            countryOfBirth: 'Switzerland',
            nationality: 'Switzerland',
            shirtNumber: 1,
            role: 'PLAYER'
          },
          {
            id: 6667,
            name: 'Tobias Sippel',
            position: 'Goalkeeper',
            dateOfBirth: '1988-03-22T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 21,
            role: 'PLAYER'
          },
          {
            id: 9410,
            name: 'Max Grün',
            position: 'Goalkeeper',
            dateOfBirth: '1987-04-05T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 29,
            role: 'PLAYER'
          },
          {
            id: 3176,
            name: 'Matthias Ginter',
            position: 'Defender',
            dateOfBirth: '1994-01-19T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 28,
            role: 'PLAYER'
          },
          {
            id: 3473,
            name: 'Michael Lang',
            position: 'Defender',
            dateOfBirth: '1991-02-08T00:00:00Z',
            countryOfBirth: 'Switzerland',
            nationality: 'Switzerland',
            shirtNumber: 3,
            role: 'PLAYER'
          },
          {
            id: 3475,
            name: 'Nico Elvedi',
            position: 'Defender',
            dateOfBirth: '1996-09-30T00:00:00Z',
            countryOfBirth: 'Switzerland',
            nationality: 'Switzerland',
            shirtNumber: 30,
            role: 'PLAYER'
          },
          {
            id: 6669,
            name: 'Oscar Wendt',
            position: 'Defender',
            dateOfBirth: '1985-10-24T00:00:00Z',
            countryOfBirth: 'Sweden',
            nationality: 'Sweden',
            shirtNumber: 17,
            role: 'PLAYER'
          },
          {
            id: 6670,
            name: 'Tony Jantschke',
            position: 'Defender',
            dateOfBirth: '1990-04-07T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 24,
            role: 'PLAYER'
          },
          {
            id: 6672,
            name: 'Mamadou Doucouré',
            position: 'Defender',
            dateOfBirth: '1998-05-21T00:00:00Z',
            countryOfBirth: 'Senegal',
            nationality: 'France',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6673,
            name: 'Justin Hoffmans',
            position: 'Defender',
            dateOfBirth: '1997-02-26T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6674,
            name: 'Marcel Benger',
            position: 'Defender',
            dateOfBirth: '1998-07-02T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 6,
            role: 'PLAYER'
          },
          {
            id: 6675,
            name: 'Florian Mayer',
            position: 'Defender',
            dateOfBirth: '1998-03-04T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6678,
            name: 'Louis Beyer',
            position: 'Defender',
            dateOfBirth: '2000-05-19T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 15,
            role: 'PLAYER'
          },
          {
            id: 8805,
            name: 'Ramy Bensebaini',
            position: 'Defender',
            dateOfBirth: '1995-04-16T00:00:00Z',
            countryOfBirth: 'Algeria',
            nationality: 'Algeria',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 16338,
            name: 'Stefan Lainer',
            position: 'Defender',
            dateOfBirth: '1992-08-27T00:00:00Z',
            countryOfBirth: 'Austria',
            nationality: 'Austria',
            shirtNumber: 18,
            role: 'PLAYER'
          },
          {
            id: 24192,
            name: 'Andreas Poulsen',
            position: 'Defender',
            dateOfBirth: '1999-10-13T00:00:00Z',
            countryOfBirth: 'Denmark',
            nationality: 'Denmark',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 3185,
            name: 'Lars Stindl',
            position: 'Midfielder',
            dateOfBirth: '1988-08-26T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6679,
            name: 'Ibrahima Traoré',
            position: 'Midfielder',
            dateOfBirth: '1988-04-21T00:00:00Z',
            countryOfBirth: 'France',
            nationality: 'Guinea',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6680,
            name: 'Patrick Herrmann',
            position: 'Midfielder',
            dateOfBirth: '1991-02-12T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 7,
            role: 'PLAYER'
          },
          {
            id: 6681,
            name: 'Jonas Hofmann',
            position: 'Midfielder',
            dateOfBirth: '1992-07-14T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6682,
            name: 'Christoph Kramer',
            position: 'Midfielder',
            dateOfBirth: '1991-02-19T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 6,
            role: 'PLAYER'
          },
          {
            id: 6683,
            name: 'Tobias Strobl',
            position: 'Midfielder',
            dateOfBirth: '1990-05-12T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6684,
            name: 'László Bénes',
            position: 'Midfielder',
            dateOfBirth: '1997-09-09T00:00:00Z',
            countryOfBirth: 'Slovakia',
            nationality: 'Slovakia',
            shirtNumber: 22,
            role: 'PLAYER'
          },
          {
            id: 6687,
            name: 'Denis Zakaria',
            position: 'Midfielder',
            dateOfBirth: '1996-11-20T00:00:00Z',
            countryOfBirth: 'Congo DR',
            nationality: 'Switzerland',
            shirtNumber: 8,
            role: 'PLAYER'
          },
          {
            id: 6689,
            name: 'Aaron Herzog',
            position: 'Midfielder',
            dateOfBirth: '1998-01-30T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 8,
            role: 'PLAYER'
          },
          {
            id: 9522,
            name: 'Florian Neuhaus',
            position: 'Midfielder',
            dateOfBirth: '1997-03-16T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: 32,
            role: 'PLAYER'
          },
          {
            id: 3483,
            name: 'Breel Embolo',
            position: 'Attacker',
            dateOfBirth: '1997-02-14T00:00:00Z',
            countryOfBirth: 'Cameroon',
            nationality: 'Switzerland',
            shirtNumber: 36,
            role: 'PLAYER'
          },
          {
            id: 6599,
            name: 'Torben Müsel',
            position: 'Attacker',
            dateOfBirth: '1999-07-25T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 6690,
            name: 'Fabian Johnson',
            position: 'Attacker',
            dateOfBirth: '1987-12-11T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'United States',
            shirtNumber: 19,
            role: 'PLAYER'
          },
          {
            id: 6691,
            name: 'Raffael',
            position: 'Attacker',
            dateOfBirth: '1985-03-28T00:00:00Z',
            countryOfBirth: 'Brazil',
            nationality: 'Brazil',
            shirtNumber: 11,
            role: 'PLAYER'
          },
          {
            id: 6694,
            name: 'Julio Villalba',
            position: 'Attacker',
            dateOfBirth: '1998-09-11T00:00:00Z',
            countryOfBirth: 'Paraguay',
            nationality: 'Paraguay',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 8443,
            name: 'Alassane Pléa',
            position: 'Attacker',
            dateOfBirth: '1993-03-10T00:00:00Z',
            countryOfBirth: 'France',
            nationality: 'France',
            shirtNumber: 14,
            role: 'PLAYER'
          },
          {
            id: 8685,
            name: 'Marcus Thuram-Ulien',
            position: 'Attacker',
            dateOfBirth: '1997-08-06T00:00:00Z',
            countryOfBirth: 'Italy',
            nationality: 'France',
            shirtNumber: 10,
            role: 'PLAYER'
          },
          {
            id: 56601,
            name: 'Keanen Bennetts',
            position: 'Attacker',
            dateOfBirth: '1999-03-09T00:00:00Z',
            countryOfBirth: 'England',
            nationality: 'England',
            shirtNumber: null,
            role: 'PLAYER'
          },
          {
            id: 15111,
            name: 'Marco Rose',
            position: null,
            dateOfBirth: '1976-09-11T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            shirtNumber: null,
            role: 'COACH'
          }
        ],
        lastUpdated: '2019-08-29T02:42:26Z'
      },
      status: 200,
      statusText: '',
      headers: {
        'content-language': 'en-US',
        'content-type': 'application/json;charset=UTF-8'
      },
      config: {
        url: 'https://api.football-data.org/v2/teams/18',
        method: 'get',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'X-Auth-Token': 'bd3a4dceaf43410e83b1d3de50318d94'
        },
        transformRequest: [
          null
        ],
        transformResponse: [
          null
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1
      },
      request: {}
    }
  }