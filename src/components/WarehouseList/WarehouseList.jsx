import PageHeader from "../PageHeader/PageHeader";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../AddButton/AddButton";
import Warehouse from "./Warehouse/Warehouse";
import WarehouseHeader from "./WarehouseHeader/WarehouseHeader";

import "./WarehouseList.scss";

export default function WarehouseList({ warehouses, updateList }) {
	const warehouseComps = warehouses.map((warehouse) => {
		return <Warehouse warehouse={warehouse} updateList={updateList} />;
	});
	return (
		<div className="warehouseList">
			<PageHeader pageHeader="Warehouses" backButton={false} border={false}>
				<SearchBar />
				<AddButton
					name="New Warehouse"
					addCallback={() => {}}
					cancelCallback={() => {}}
				/>
			</PageHeader>
			<div className="warehouseList__inner">
				<WarehouseHeader />
				{warehouseComps}
			</div>
		</div>
	);
}
