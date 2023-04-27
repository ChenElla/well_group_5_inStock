import React from "react";
import "./ItemAvailability.scss";
import dropArrow from "../../assets/Icons/arrow_drop_down-24px.svg";

function ItemAvailability({
  status,
  setStatus,
  quantity,
  setQuantity,
  warehouse,
  setWarehouse,
}) {
  //   HAve to do get request to get info for warehouses
  //   SELECT distinct category
  // FROM `instock`.`inventories`

  return (
    <section className="available">
      <div className="available__outer">
        <h2 className="available__header">Item Availability</h2>
        <div className="available__body">
          {/* may need to alter and remove form tag */}
          <div className="available__status-package">
            {/* might be able to make name single class as syling looks similar for all packages */}
            <p className="available__label">Status</p>
            <div className="available__radio-ctn">
              <div className="available__rad-package">
                <input
                  type="radio"
                  value={status}
                  className="available__radio-btn"
                  onChange={(e) => setStatus("Out of Stock")}
                  name="stock" // name must match the other radio button to make sure only one can be selected
                ></input>
                <label className="available__radio-text">In stock</label>
              </div>
              <div className="available__rad-package">
                <input
                  type="radio"
                  className="available__radio-btn"
                  value={status}
                  onChange={(e) => setStatus("In Stock")}
                  name="stock"
                ></input>
                <label className="available__radio-text">Out of stock</label>
              </div>
            </div>
          </div>
          <div className="available__quantity-package">
            <p className="available__label">Quantity</p>
            <input
              className="available__input item available__input--quantity"
              type="number"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="available__warehouse-package">
            <p className="available__label">Warehouse</p>
            <div className="available__arrow-container">
              <select
                className="available__input available__input--warehouse"
                name=""
                value={warehouse}
                onChange={(e) => setWarehouse(e.target.value)}
                placeholder="Please select"
                // PLACEHOLDER NOT WORKING
                required
              >
                {/* The top option is proxy for the placeholder which is not registering. WANT TO CHANGE */}
                <option selected>Please select</option>
                <option>New York</option>
                <option>more needed</option>
              </select>
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
}

export default ItemAvailability;
