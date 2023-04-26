import { useNavigate } from "react-router-dom";

import InventoryItem from "../InventoryItem/InventoryItem";

import "./InventoryList.scss";
import PageHeader from "../PageHeader/PageHeader";

function InventoryList({ inventory }) {
	const inventoryItems = inventory.map((item) => {
		return <InventoryItem item={item} />;
	});
	return (
		<div className="inventoryList">
			<PageHeader pageHeader="Inventory"></PageHeader>
			{inventoryItems}
		</div>
	);
}

export default InventoryList;
