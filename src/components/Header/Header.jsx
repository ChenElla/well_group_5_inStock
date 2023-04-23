import React from "react";
import { Link } from "react-router-dom";
import instockLogoSmall from "../../assets/Logo/InStock-Logo_1x.png";
import instockLogoMedium from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      {/* can I wrap two seperate items in a link tag? Especially given only 1
      will show at any time? */}
      <div className="header__logo-contain">
        <Link to="/">
          <img
            className="header__logo header__logo--med"
            src={instockLogoSmall}
            alt="Instock Logo"
          />
          <img
            className="header__logo header__logo--lrg"
            src={instockLogoMedium}
            alt="Instock Logo"
          />
        </Link>
      </div>
      <div className="header__btn-contain">
        <Link to="/warehouse">
          <button className="header__btn header__btn--warehouse">
            Warehouse
          </button>
        </Link>
        <Link to="/inventory">
          <button className="header__btn header__btn--inventory">
            Inventory
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
