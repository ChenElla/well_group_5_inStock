import { useEffect, useState } from "react";

import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import Loading from "../../components/Loading/Loading";
import PageContainer from "../../components/PageContainer/PageContainer";

function InventoryPage() {
	const [inventory, setInventory] = useState(null);
	const [deletedID, updateList] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5050/inventories")
			.then((res) => {
				setInventory(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, [deletedID]);

	if (inventory)
		return (
			<PageContainer>
				<InventoryList inventory={inventory} updateList={updateList} pageHeader = {true}/>
			</PageContainer>
		);
	else return <Loading />;
}

export default InventoryPage;
