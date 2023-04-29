import React from "react";
import { Link, useLocation } from "react-router-dom";
import instockLogoSmall from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

function Header() {
	const location = useLocation();
	const route = location.pathname.split("/")[1];
	return (
		<nav className="header">
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
					<Link className="header__flexset" to="/warehouses">
						<button
							className={
								route === "warehouses"
									? "header__btn header__btn--selected"
									: "header__btn"
							}
						>
							Warehouse
						</button>
					</Link>
					<Link className="header__flexset" to="/inventories">
						<button
							className={
								route === "inventories"
									? "header__btn header__btn--selected"
									: "header__btn"
							}
						>
							Inventory
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Header;
