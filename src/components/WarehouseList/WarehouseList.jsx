import PageHeader from "../PageHeader/PageHeader";
import SearchBar from "../SearchBar/SearchBar";
import AddButton from "../AddButton/AddButton";
import Warehouse from "./Warehouse/Warehouse";

export default function WarehouseList({ warehouses, updateList }) {
	const warehouseComps = warehouses.map((warehouse) => {
		return <Warehouse warehouse={warehouse} />;
	});
	return (
		<>
			<PageHeader pageHeader="Warehouses" backButton={false} border={false}>
				<SearchBar />
				<AddButton
					name="New Warehouse"
					addCallback={() => {}}
					cancelCallback={() => {}}
				/>
			</PageHeader>
			{warehouseComps}
		</>
	);
}
