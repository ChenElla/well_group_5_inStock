import React from "react";
import "./ItemAvailability.scss";
import dropArrow from "../../assets/Icons/arrow_drop_down-24px.svg";

function ItemAvailability() {
  return (
    <section className="available">
      <div className="available__outer">
        <h2 className="available__header">Item Availability</h2>
        <form className="available__body">
          <div className="available__status-package">
            {/* might be able to make name single class as syling looks similar for all packages */}
            <p className="available__label">Status</p>
            {/* NEED 2 BUTTONS HERE */}
          </div>
          <div className="available__quantity-package">
            <p className="available__label">Quantity</p>
            <input
              className="available__input item available__input--quantity"
              type="number"
              placeholder="0"
              required
            />
          </div>
          <div className="available__warehouse-package">
            <p className="available__label">Warehouse</p>
            <div className="available__arrow-container">
              <select
                className="available__input available__input--warehouse"
                name=""
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
        </form>
      </div>
    </section>
  );
}

export default ItemAvailability;
