import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import WarehouseEdit from "../../components/WarehouseEdit/WarehouseEdit";
import { useNavigate } from "react-router-dom";

export default function WarehouseEditPage() {
	const { warehouseId } = useParams();
	const [singleWarehouse, setSingleWarehouse] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`http://localhost:5050/warehouses/${warehouseId}`)
			.then((response) => setSingleWarehouse(response.data))
			.catch((err) => {
				console.log(err);
				if (err.response.status === 404) navigate("/error/2");
			});
	}, [warehouseId]);
	if (singleWarehouse)
		return (
			<WarehouseEdit
				warehouseId={warehouseId}
				singleWarehouse={singleWarehouse}
			/>
		);
	else return <Loading />;
}
