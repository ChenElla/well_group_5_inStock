import React from "react";
import Loading from "../Loading/Loading";

function DropdownWarehouses({ warehouse, warehouseList, setWarehouse }) {
	const uniqueWarehouseNames = [
		...new Set(
			warehouseList.map((warehouseList) => warehouseList.warehouse_name)
		),
	];
	// Create an array of <option> elements from the unique warehouse names

	const dropdownOptions = uniqueWarehouseNames.map((name, index) => (
		<option key={index} value={warehouseList.id}>
			{name}
		</option>
	));

	return (
		<select
			className="available__input available__input--warehouse"
			value={warehouse}
			onChange={(e) => setWarehouse(e.target.value)}
			required
		>
			<option>Please select</option>
			{dropdownOptions}
		</select>
	);
}

export default DropdownWarehouses;
