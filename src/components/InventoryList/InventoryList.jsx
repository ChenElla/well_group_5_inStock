import { useNavigate } from "react-router-dom";

import InventoryItem from "../InventoryItem/InventoryItem";

import "./InventoryList.scss";

function InventoryList({ inventory }) {
	const inventoryItems = inventory.map((item) => {
		return <InventoryItem item={item} />;
	});
	return <div className="inventoryList">{inventoryItems}</div>;
}

export default InventoryList;
