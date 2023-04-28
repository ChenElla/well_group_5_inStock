import InventoryItem from "../InventoryItem/InventoryItem";

import "./InventoryList.scss";
import PageHeader from "../PageHeader/PageHeader";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../AddButton/AddButton";
import InventoryHeader from "../InventoryHeader/InventoryHeader";

function InventoryList({ inventory, updateList }) {
	const inventoryItems = inventory.map((item) => {
		return (
			<InventoryItem item={item} showWarehouse={true} updateList={updateList} />
		);
	});
	return (
		<div className="inventoryList">
			<PageHeader pageHeader="Inventory" border={false}>
				<SearchBar />
				<AddButton
					name="New Item"
					addCallback={() => {}}
					cancelCallback={() => {}}
				/>
			</PageHeader>
			<div className="inventoryList__header">
				<InventoryHeader />
			</div>
			{inventoryItems}
		</div>
	);
}
export default InventoryList;
