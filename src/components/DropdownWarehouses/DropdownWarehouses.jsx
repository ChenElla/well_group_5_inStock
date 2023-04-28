import React from "react";
import Loading from "../Loading/Loading";

function DropdownWarehouses({ warehouse, warehouseList, setWarehouse }) {
  // console.log("this is warehouselist in the new component", warehouseList);

  const uniqueWarehouseNames = [
    ...new Set(
      warehouseList.map((warehouseList) => warehouseList.warehouse_name)
    ),
  ];
  // console.log("warehouseList = ", warehouseList);
  // console.log("uniqueWarehouseNames", uniqueWarehouseNames);

  // Create an array of <option> elements from the unique warehouse names

  const dropdownOptions = uniqueWarehouseNames.map((name, index) => (
    <option key = {index} value={warehouseList.id}>{name}</option>
  ));

  // if (!warehouseList)
  return (
    // <div>test</div>
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
  // else {
  //   return <Loading />;
  // }
}

export default DropdownWarehouses;

//issues apear to be with the sequence of loading --> need a loading div. As I can initialize all of this if I uncomment 1 by 1 but initially it fails.

//issue 2 is conneting the name of the warehouse with the id. I have imported a key:value with both info and cannot think how to connect when using the setWarehouse function
