import { useEffect, useState } from "react";

import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import Loading from "../../components/Loading/Loading";

function InventoryPage() {
	const [inventory, setInventory] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5050/inventories")
			.then((res) => {
				setInventory(res.data);
				console.log(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	if (inventory) return <InventoryList inventory={inventory} />;
	else return <Loading />;
}

export default InventoryPage;
