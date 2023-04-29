import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import Loading from "../../components/Loading/Loading";

export default function WarehouseDetailsPage() {
	const [singleWarehouse, setSingleWarehouse] = useState(null);
	const { warehouseId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:5050/warehouses/${warehouseId}`)
			.then((response) => {
				setSingleWarehouse(response.data);
			})
			.catch((err) => {
				console.log(err.response.status);
				if (err.response.status === 404) navigate("/error/1");
			});
	}, [warehouseId]);
	if (singleWarehouse)
		return (
			<WarehouseDetails
				warehouseId={warehouseId}
				singleWarehouse={singleWarehouse}
			/>
		);
	else {
		return <Loading />;
	}
}
