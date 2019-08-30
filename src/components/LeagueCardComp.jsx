import React from "react";
import logoDark from "../assets/imgs/logo_dark.png";

const LeagueCardComp = props => {
  return (
    <div class="card mb-3">
      <div class="d-flex flex-column flex-md-row ">
        <div class="app-card-img mw-100">
          <img src={logoDark} class="card-img" alt="..." />
        </div>
        <div class="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCardComp;
