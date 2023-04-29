import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./EditItemAvailability.scss";
import dropArrow from "../../assets/Icons/arrow_drop_down-24px.svg";
import DropdownWarehouses from "../DropdownWarehouses/DropdownWarehouses"; //may not need to change this
import Loading from "../Loading/Loading";

function ItemAvailability({
  status,
  setStatus,
  quantity,
  setQuantity,
  warehouse,
  setWarehouse,
  showQuantity,
  setShowQuantity,
}) {
  const [warehouseList, setWarehouseList] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5050/warehouses/`)
      .then((res) => {
        // console.log(res.data);
        // setWarehouseList(res.data);

        const allData = res.data;

        const cityAndID = allData.map(({ id, warehouse_name }) => ({
          id,
          warehouse_name,
        }));

        setWarehouseList(cityAndID);
      })
      .catch((err) => {
        console.log(err);
        // navigate("/");
      });
  }, [warehouseList]);

  // const radioHandler = (e) => {
  //   setStatus;
  //   setQuantity(0);
  //   setShowQuantity(!showQuantity);
  // };
  const showQuantityHandler = (e) => {
    setStatus(e.target.value);
    setQuantity("0");
    setShowQuantity(!showQuantity);
  };

  if (warehouseList)
    return (
      <section className="editAvailable">
        <div className="editAvailable__outer">
          <h2 className="editAvailable__header">Item Availability</h2>
          <div className="editAvailable__body">
            <div className="editAvailable__status-package">
              <p className="editAvailable__label">Status</p>
              <div
                className="editAvailable__radio-ctn"
                onChange={showQuantityHandler}
              >
                <div className="editAvailable__rad-package">
                  <input
                    type="radio"
                    className="editAvailable__radio-btn"
                    value="In Stock"
                    name="stock" // name must match the other radio button to make sure only one can be selected
                    onClick={showQuantityHandler}
                    defaultChecked
                  />
                  <label className="editAvailable__radio-text">In stock</label>
                </div>
                <div className="editAvailable__rad-package">
                  <input
                    type="radio"
                    className="editAvailable__radio-btn"
                    value="Out of Stock"
                    name="stock"
                    onClick={showQuantityHandler}
                  />
                  <label className="editAvailable__radio-text">
                    Out of stock
                  </label>
                </div>
              </div>
            </div>
            {showQuantity && (
              <div className="editAvailable__quantity-package">
                <p className="editAvailable__label">Quantity</p>
                <input
                  className="editAvailable__input item editAvailable__input--quantity"
                  type="number"
                  defaultValue="0"
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="editAvailable__warehouse-package">
              <p className="editAvailable__label">Warehouse</p>
              <div className="editAvailable__arrow-container">
                <DropdownWarehouses
                  warehouse={warehouse}
                  warehouseList={warehouseList}
                  setWarehouse={setWarehouse}
                />
                <img
                  className="editAvailable__drop-Arrow"
                  src={dropArrow}
                  alt="Drop Down Arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else {
    return <Loading />;
  }
}

export default ItemAvailability;
