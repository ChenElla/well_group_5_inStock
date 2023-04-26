import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./InventoryList.scss";

function InventoryList() {
	const { inventory } = useParams();
	return <div className="inventoryList"></div>;
}

export default InventoryList;
