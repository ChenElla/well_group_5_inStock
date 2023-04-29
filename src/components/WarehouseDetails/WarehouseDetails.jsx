import React from "react";
import back_icon from "../../assets/Icons/arrow_back-24px.svg";
import edit_icon from "../../assets/Icons/edit-24px.svg";

import "./WarehouseDetails.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InventoryList from "../InventoryList/InventoryList";
export default function WarehouseDetails({
	warehouseId,
	singleWarehouse
}) {
	const [inventory, setInventory] = useState(null);
	const [deletedID, updateList] = useState(0);
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		axios
			.get(`http://localhost:5050/warehouses/${warehouseId}/inventories`)
			.then((res) => {
				setInventory(res.data);
			})
			.catch((e) => {
				console.error(e);
        // navigate('/warehouses');
			});
	}, [deletedID]);

	return (
		<>
			<div className="mainContainer">
				<div className="mainContainer__backgroundContainer">
					<div className="mainContainer__backgroundContainer__titleContainer">
						<div className="mainContainer__backgroundContainer__titleContainer__nameContainer">
							<div
								className="mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon"
								onClick={goBack}
							>
								<img
									className="mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon__icon"
									src={back_icon}
									alt="back_icon"
								/>
							</div>
							<div className="mainContainer__backgroundContainer__titleContainer__nameContainer__title">
								{singleWarehouse.warehouse_name}
							</div>
						</div>
						<NavLink
							className="mainContainer__backgroundContainer__titleContainer__iconContainer"
							to={`/warehouses/${warehouseId}/edit`}
						>
							<img
								className="mainContainer__backgroundContainer__titleContainer__iconContainer__editIcon"
								src={edit_icon}
								alt="edit_icon"
							/>
							<div className="mainContainer__backgroundContainer__titleContainer__iconContainer__text">
								Edit
							</div>
						</NavLink>
					</div>
				</div>
				<div className="mainContainer__listContainer">
					<hr className="mainContainer__listContainer__divider" />
					<div className="mainContainer__listContainer__warehouseDetail">
						<div className="mainContainer__listContainer__warehouseDetail__warehouseAddress">
							<div className="mainContainer__listContainer__warehouseDetail__warehouseAddress__title">
								warehouse address:
							</div>
							{singleWarehouse.address},
							<br className="mainContainer__listContainer__warehouseDetail__warehouseAddress__nextLine" />
							{singleWarehouse.city}, {singleWarehouse.country}
						</div>
						<div className="mainContainer__listContainer__warehouseDetail__contact">
							<div className="mainContainer__listContainer__warehouseDetail__contact__contactName">
								<div className="mainContainer__listContainer__warehouseDetail__contact__contactName__title">
									contact name:
								</div>
								{singleWarehouse.contact_name}
								<br />
								{singleWarehouse.contact_position}
							</div>
							<div className="mainContainer__listContainer__warehouseDetail__contact__contactInfo">
								<div className="mainContainer__listContainer__warehouseDetail__contact__contactInfo__title">
									contact information:
									<br />
								</div>
								{singleWarehouse.contact_phone}
								<br />
								{singleWarehouse.contact_email}
							</div>
						</div>
					</div>
          <hr className="mainContainer__listContainer__divider" id = "mobile_divider"/>
					{inventory ? (<InventoryList
						inventory={inventory}
						updateList={updateList}
						pageHeader={false}
					/>):(<hr id = "show_divider"/>
					)}
				</div>
			</div>
		</>
	);
}
