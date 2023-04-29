import React from "react";

import Sort from "../../../assets/Icons/sort-24px.svg";
import "./WarehouseHeader.scss";

export default function WarehouseHeader() {
	return (
		<div className="warehouseHeader__outer">
			<div className="warehouseHeader">
				<div className="warehouseHeader__column">
					<div className="warehouseHeader__itemName warehouseHeader__flex">
						<div className="warehouseHeader__title warehouseHeader__title--mobile">
							warehouse
						</div>
						<img src={Sort} className="warehouseHeader__sortIcon" />
					</div>
					<div className="warehouseHeader__itemCategory warehouseHeader__flex">
						<div className="warehouseHeader__title warehouseHeader__title--mobile">
							address
						</div>
						<img src={Sort} className="warehouseHeader__sortIcon" />
					</div>
				</div>
				<div className="warehouseHeader__column">
					<div className="warehouseHeader__itemStatus warehouseHeader__flex">
						<div className="warehouseHeader__title warehouseHeader__title--mobile">
							contact name
						</div>
						<img src={Sort} className="warehouseHeader__sortIcon" />
					</div>
					<div className="warehouseHeader__itemQty warehouseHeader__flex">
						<div className="warehouseHeader__title warehouseHeader__title--mobile">
							contact information
						</div>
						<img src={Sort} className="warehouseHeader__sortIcon" />
					</div>
				</div>
			</div>
			<div className="warehouseHeader__flex warehouseHeader__actions ">
				<div className="warehouseHeader__title warehouseHeader__title--mobile">
					Actions
				</div>
			</div>
		</div>
	);
}
