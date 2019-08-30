import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import "./App.css";
import Loading from "./utils/Loading";
import LeaguesPage from "./Pages/LeaguesPage";
import Header from "./components/Header";

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
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/league" name="League Details Page" component={LeaguesPage} />
          <Route exact path="/league/:league_id" name="League Details Page" component={LeagueDetails} />
          <Route exact path="/league/:league_id/team/:team_id" name="Team Page" component={TeamPage} />

          <Route path="/" name="Leagues Page" component={LeaguesPage} />
        </Switch>
      </div>
    </BrowserRouter>
    // <Route exact path="/404" name="Page 404" component={Page404} />
  );
}

export default App;
