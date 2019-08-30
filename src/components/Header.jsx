import React from "react";
import logoLight from "../assets/imgs/logo_light.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-app-dark">
      <div className="container">
        <div className="" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/leagues">
            <img src={logoLight} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
            Technivance League
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
