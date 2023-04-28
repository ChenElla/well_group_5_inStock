import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ItemAvailability.scss";
import dropArrow from "../../assets/Icons/arrow_drop_down-24px.svg";
import DropdownWarehouses from "../DropdownWarehouses/DropdownWarehouses";
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
      <section className="available">
        <div className="available__outer">
          <h2 className="available__header">Item Availability</h2>
          <div className="available__body">
            <div className="available__status-package">
              <p className="available__label">Status</p>
              <div
                className="available__radio-ctn"
                onChange={showQuantityHandler}
              >
                <div className="available__rad-package">
                  <input
                    type="radio"
                    className="available__radio-btn"
                    value="In Stock"
                    name="stock" // name must match the other radio button to make sure only one can be selected
                    onClick={showQuantityHandler}
                    defaultChecked
                  />
                  <label className="available__radio-text">In stock</label>
                </div>
                <div className="available__rad-package">
                  <input
                    type="radio"
                    className="available__radio-btn"
                    value="Out of Stock"
                    name="stock"
                    onClick={showQuantityHandler}
                  />
                  <label className="available__radio-text">Out of stock</label>
                </div>
              </div>
            </div>
            {/* <input type="text" onChange={radioHandler} /> */}
            {showQuantity && (
              <div className="available__quantity-package">
                <p className="available__label">Quantity</p>
                <input
                  className="available__input item available__input--quantity"
                  type="number"
                  placeholder="0"
                  value="0"
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="available__warehouse-package">
              <p className="available__label">Warehouse</p>
              <div className="available__arrow-container">
                <DropdownWarehouses
                  warehouse={warehouse}
                  warehouseList={warehouseList}
                  setWarehouse={setWarehouse}
                />

                {/* <select
                  className="available__input available__input--warehouse"
                  name=""
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}
                  required
                >
                  <option selected>Please select</option>
                  <option>New York</option>
                  <option>more needed</option>
                </select> */}
                <img
                  className="available__drop-Arrow"
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
