import React from "react";

import Sort from "../../assets/Icons/sort-24px.svg";
import "./InventoryHeader.scss";

export default function InventoryHeader() {
	return (
		<div className="inventoryHeader__outer">
			<div className="inventoryHeader">
				<div className="inventoryHeader__column">
					<div className="inventoryHeader__itemName inventoryHeader__flex">
						<div className="inventoryHeader__title inventoryHeader__title--mobile">
							inventory item
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon" />
					</div>
					<div className="inventoryHeader__itemCategory inventoryHeader__flex">
						<div className="inventoryHeader__title inventoryHeader__title--mobile">
							category
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon" />
					</div>
				</div>
				<div className="inventoryHeader__column">
					<div className="inventoryHeader__itemStatus inventoryHeader__flex">
						<div className="inventoryHeader__title inventoryHeader__title--mobile">
							status
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon" />
					</div>
					<div className="inventoryHeader__itemQty inventoryHeader__flex">
						<div className="inventoryHeader__title inventoryHeader__title--mobile">
							qty
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon" />
					</div>
					<div className="inventoryHeader__itemWarehouse inventoryHeader__flex">
						<div className="inventoryHeader__title inventoryHeader__title--mobile">
							warehouse
						</div>
						<img src={Sort} className="inventoryHeader__sortIcon" />
					</div>
				</div>
			</div>
		</div>
	);
}
