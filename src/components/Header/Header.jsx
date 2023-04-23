import React from "react";
import { Link } from "react-router-dom";
import instockLogoSmall from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__outer">
        <div className="header__logo-contain">
          <Link to="/">
            <img
              className="header__logo"
              src={instockLogoSmall}
              alt="Instock Logo"
            />
          </Link>
        </div>
        <div className="header__btn-contain">
          <Link className="header__flexset" to="/warehouse">
            <button className="header__btn header__btn--warehouse">
              Warehouse
            </button>
          </Link>
          <Link className="header__flexset" to="/inventory">
            <button className="header__btn header__btn--inventory">
              Inventory
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
