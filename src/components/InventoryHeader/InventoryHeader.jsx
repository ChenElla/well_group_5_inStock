import React from "react";

import Sort from "../../assets/Icons/sort-24px.svg";
import "./InventoryHeader.scss";

export default function InventoryHeader({ showWarehouse }) {
	return (
		<div className="inventoryHeader__outer">
			<div className="inventoryHeader">
					<div className="inventoryHeader__itemName">
						<div className="inventoryHeader__title inventoryHeader__itemName__title">
							inventory item
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon inventoryHeader__itemName__sortIcon" />
					</div>
					<div className="inventoryHeader__itemCategory">
						<div className="inventoryHeader__title inventoryHeader__itemCategory__title">
							category
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon inventoryHeader__itemCategory__sortIcon" />
					</div>
					<div className="inventoryHeader__itemStatus">
						<div className="inventoryHeader__title inventoryHeader__itemStatus__title">
							status
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon inventoryHeader__itemStatus__sortIcon " />
					</div>
					<div className="inventoryHeader__itemQty">
						<div className="inventoryHeader__title inventoryHeader__itemQty__title">
							qty
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon inventoryHeader__itemQty__sortIcon" />
						{showWarehouse && (
							<div className="inventoryHeader__itemQty__itemWarehouse">
								<div className="inventoryHeader__title inventoryHeader__itemWarehouse__title">
									warehouse
								</div>
								<img src={Sort} className="inventoryHeader__sortIcon" />
							</div>
						)}
					</div>
					<div className="inventoryHeader__itemActions">
						<div className="inventoryHeader__title inventoryHeader__itemActions__title">
							actions
						</div>
					</div>
			</div>
		</div>
	);
}
