import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import WarehouseDeleteModal from "../../Modals/WarehouseDeleteModal";

import proceed_icon from "../../../assets/Icons/chevron_right-24px.svg";
import delete_icon from "../../../assets/Icons/delete_outline-24px.svg";
import edit_icon from "../../../assets/Icons/edit-24px.svg";

import "./Warehouse.scss";

export default function Warehouse({ warehouse, updateList }) {
	const [deleteVisible, setDeleteVisible] = useState(false);
	return (
		<div className="warehouseContainer__outer">
			<div className="warehouseContainer">
				<div className="warehouseContainer__column">
					<div className="warehouseContainer__warehouseName">
						<div className="warehouseContainer__title warehouseContainer__title--mobile">
							warehouse
						</div>
						<Link to={"/warehouses/" + warehouse.id}>
							<div className="warehouseContainer__warehouseName__name">
								<div className="warehouseContainer__warehouseName__name--text">
									{warehouse.warehouse_name}
								</div>
								<img
									className="warehouseContainer__warehouseName__name--icon"
									src={proceed_icon}
									alt="chevron-right-icon"
								/>
							</div>
						</Link>
					</div>
					<div className="warehouseContainer__warehouseAddress">
						<div className="warehouseContainer__title warehouseContainer__title--mobile">
							address
						</div>
						<div className="warehouseContainer__warehouseAddress__address">
							{warehouse.address},
							<br className="warehouseContainer__nextLine" />
							{warehouse.city}, {warehouse.country}
						</div>
					</div>
				</div>
				<div className="warehouseContainer__column">
					<div className="warehouseContainer__warehouseContact">
						<div className="warehouseContainer__title warehouseContainer__title--mobile">
							contact name
						</div>
						<div className="warehouseContainer__warehouseContact__contact">
							{warehouse.contact_name}
						</div>
					</div>
					<div className="warehouseContainer__warehouseContactInfo">
						<div className="warehouseContainer__title warehouseContainer__title--mobile">
							contact information
						</div>
						<div className="warehouseContainer__warehouseContactInfo__info">
							{warehouse.contact_phone}
							<br></br>
							{warehouse.contact_email}
						</div>
					</div>
				</div>
			</div>
			<div className="iconRow">
				<img
					className="iconRow__deleteIcon"
					src={delete_icon}
					alt="delete_icon"
					onClick={() => setDeleteVisible(true)}
				/>
				<Link to={`/warehouses/${warehouse.id}/edit`}>
					<img className="iconRow__editIcon" src={edit_icon} alt="edit_icon" />
				</Link>
			</div>
			<div className={deleteVisible ? "" : "warehouseContainer__hidden"}>
				<WarehouseDeleteModal
					warehouse={warehouse}
					modalHandler={() => {
						setDeleteVisible(false);
						updateList(warehouse.id);
					}}
				/>
			</div>
		</div>
	);
}
