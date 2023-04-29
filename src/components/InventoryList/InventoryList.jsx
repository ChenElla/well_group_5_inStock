import InventoryItem from "../InventoryItem/InventoryItem";

import "./InventoryList.scss";
import PageHeader from "../PageHeader/PageHeader";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../AddButton/AddButton";
import InventoryHeader from "../InventoryHeader/InventoryHeader";
import { useNavigate } from "react-router-dom";

function InventoryList({ inventory, updateList, pageHeader }) {
	if (inventory.length < 1) return <></>;
	const navigate = useNavigate();
	const inventoryItems = inventory.map((item) => {
		return (
			<InventoryItem
				item={item}
				showWarehouse={item.warehouse_name !== undefined}
				updateList={updateList}
			/>
		);
	});
	return (
		<div className="inventoryList">
			{pageHeader?
				(<PageHeader pageHeader="Inventory" border={false} backButton={false}>
					<SearchBar />
					<AddButton
						name="New Item"
						addCallback={() => {navigate('/inventories/add')}}
						cancelCallback={() => {}}
					/>
				</PageHeader>):<></>
			}
			<div className="inventoryList__header">
				<InventoryHeader
					showWarehouse={inventory[0].warehouse_name !== undefined}
				/>
			</div>
			{inventoryItems}
		</div>
	);
}
export default InventoryList;
