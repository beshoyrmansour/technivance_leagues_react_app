import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import "./App.css";
import Loading from "./utils/Loading";
import LeaguesPage from "./Pages/LeaguesPage";

function App() {
  // Pages
  const LeagueDetails = Loadable({
    loader: () => import("./Pages/LeagueDetails"),
    loading: Loading
  });
  const TeamPage = Loadable({
    loader: () => import("./Pages/TeamPage"),
    loading: Loading
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/league/:league_id" name="Login Page" component={LeagueDetails} />
        <Route exact path="/league/:league_id/team/:team_id" name="Login Page" component={TeamPage} />

        <Route path="/" name="Forside" component={LeaguesPage} />
      </Switch>
    </BrowserRouter>
    // <Route exact path="/404" name="Page 404" component={Page404} />
  );
}

export default App;
