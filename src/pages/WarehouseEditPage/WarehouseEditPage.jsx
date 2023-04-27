import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import WarehouseEdit from '../../components/WarehouseEdit/WarehouseEdit';
//http://localhost:8080/warehouses/:warehouseId/edit"

export default function WarehouseEditPage() {
    const { warehouseId } = useParams();
    const [singleWarehouse, setSingleWarehouse] = useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:5050/warehouses/${warehouseId}`)
            .then((response) => 
                setSingleWarehouse(response.data)
                // console.log(response.data)
            ).catch(err => console.log(err));
    },[warehouseId]);
    if(singleWarehouse)
        return (
            <WarehouseEdit
                warehouseId = {warehouseId}
                singleWarehouse={singleWarehouse}
            />
        )
    else
        return(
            <Loading/>
        )
}
