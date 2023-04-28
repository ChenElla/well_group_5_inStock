import { useNavigate } from "react-router-dom";

import InventoryItem from "../InventoryItem/InventoryItem";

import "./InventoryList.scss";
import PageHeader from "../PageHeader/PageHeader";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../AddButton/AddButton";

function InventoryList({ inventory }) {
	const inventoryItems = inventory.map((item) => {
		return <InventoryItem item={item} showWarehouse={true} />;
	});
	return (
		<div className="inventoryList">
			<PageHeader pageHeader="Inventory">
				<SearchBar />
				<AddButton
					name="New Item"
					addCallback={() => {}}
					cancelCallback={() => {}}
				/>
			</PageHeader>
			{/* <div className="tableHeaders">

			</div> */}
			{inventoryItems}
		</div>
	);
}

export default InventoryList;
