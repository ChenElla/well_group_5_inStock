import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import Loading from '../../components/Loading/Loading';
//http://localhost:8080/warehouses/:warehouseId

export default function WarehouseDetailsPage() {
    const [singleWarehouse, setSingleWarehouse] = useState(null);
    const [singleWarehouseInventories, setSingleWarehouseInventories] = useState(null);
    const { warehouseId } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5050/warehouses/${warehouseId}`)
            .then((response) => {
                setSingleWarehouse(response.data);
                // console.log(response.data)
                axios.get(`http://localhost:5050/warehouses/${warehouseId}/inventories`)
                    .then((response)=>{
                        setSingleWarehouseInventories(response.data);
                        // console.log(response.data)
                    }).catch((err)=>{
                        console.log(err);
                    })
            }).catch((err)=>{
                console.log(err);
                // navigate("/");
            })
    },[warehouseId])
    if(singleWarehouseInventories)
        return (
            <WarehouseDetails 
                warehouseId = {warehouseId}
                singleWarehouse = {singleWarehouse}
                inventories = {singleWarehouseInventories}
                setInventories = {setSingleWarehouseInventories}
            />
        )
    else{
        return(
            <Loading/>
        )
    }
}
