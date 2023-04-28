import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import InventoryDeleteModal from "../Modals/InventoryDeleteModal";

import proceed_icon from "../../assets/Icons/chevron_right-24px.svg";
import delete_icon from "../../assets/Icons/delete_outline-24px.svg";
import edit_icon from "../../assets/Icons/edit-24px.svg";

import "./InventoryItem.scss";

export default function InventoryItem({ item, showWarehouse, updateList }) {
	console.log(updateList);
	const [deleteVisible, setDeleteVisible] = useState(false);
	return (
		<div className="itemContainer__outer">
			<div className="itemContainer">
				<div className="itemContainer__column">
					<div className="itemContainer__itemName">
						<div className="itemContainer__title itemContainer__title--mobile">
							inventory item
						</div>
						<Link to={"/inventories/" + item.id}>
							<div className="itemContainer__itemName__name">
								<div className="itemContainer__itemName__name--text">
									{item.item_name}
								</div>
								<img
									className="itemContainer__itemName__name--icon"
									src={proceed_icon}
									alt="chevron-right-icon"
								/>
							</div>
						</Link>
					</div>
					<div className="itemContainer__itemCategory">
						<div className="itemContainer__title itemContainer__title--mobile">
							category
						</div>
						<div className="itemContainer__itemCategory__category">
							{item.category}
						</div>
					</div>
				</div>
				<div className="itemContainer__column">
					<div className="itemContainer__itemStatus">
						<div className="itemContainer__title itemContainer__title--mobile">
							status
						</div>
						{item.status.toLowerCase() === "in stock" ? (
							<button className="itemContainer__itemStatus__status--inStock itemContainer__itemStatus__status">
								{item.status}
							</button>
						) : (
							<button className="itemContainer__itemStatus__status--outOfStock itemContainer__itemStatus__status">
								{item.status}
							</button>
						)}
					</div>
					<div className="itemContainer__itemQty">
						<div className="itemContainer__title itemContainer__title--mobile">
							qty
						</div>
						<div className="itemContainer__itemQty__quantity">
							{item.quantity}
						</div>
					</div>
					{showWarehouse && (
						<div className="itemContainer__itemWarehouse">
							<div className="itemContainer__title itemContainer__title--mobile">
								warehouse
							</div>
							<div className="itemContainer__itemQty__quantity">
								{item.warehouse_name}
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="iconRow">
				<img
					className="iconRow__deleteIcon"
					src={delete_icon}
					alt="delete_icon"
					onClick={() => setDeleteVisible(true)}
				/>
				<Link to={`/inventories/${item.id}/edit`}>
					<img className="iconRow__editIcon" src={edit_icon} alt="edit_icon" />
				</Link>
			</div>
			<div className={deleteVisible ? "" : "itemContainer__hidden"}>
				<InventoryDeleteModal
					inventories={item}
					modalHandler={() => {
						setDeleteVisible(false);
						updateList(item.id);
					}}
				/>
			</div>
		</div>
	);
}
