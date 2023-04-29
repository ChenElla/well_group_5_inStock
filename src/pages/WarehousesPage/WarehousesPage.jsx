import { useEffect, useState } from "react";

import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import Loading from "../../components/Loading/Loading";
import PageContainer from "../../components/PageContainer/PageContainer";

function WarehousesPage() {
	const [warehouses, setWarehouses] = useState(null);
	const [deletedID, updateList] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5050/warehouses")
			.then((res) => {
				setWarehouses(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, [deletedID]);

	if (warehouses)
		return (
			<PageContainer>
				<WarehouseList warehouses={warehouses} updateList={updateList} />
			</PageContainer>
		);
	else return <Loading />;
}

export default WarehousesPage;
