import React from "react";
import "./ItemDetails.scss";

function ItemDetail() {
  return (
    <div className="itemDetails">
      <div className="itemDetails__outer">
        <h2 className="itemDetails__header">Item Details</h2>
        <form className="itemDetails__body">
          <div className="itemDetails__name-package">
            {/* might be able to make name single class as syling looks similar for all packages */}
            <p className="itemDetails__label">Item Name</p>
            <input
              className="itemDetails__input itemDetails__input--name"
              type="text"
              placeholder="Item Name"
              required
            />
          </div>
          <div className="itemDetails__description-package">
            <p className="itemDetails__label">Description</p>
            <textarea
              className="itemDetails__input itemDetails__input--description"
              name=""
              placeholder="Please enter a brief item description..."
              required
            ></textarea>
          </div>
          <div className="itemDetails__category-package">
            <p className="itemDetails__label">Item Name</p>

            <select
              className="itemDetails__input itemDetails__input--category"
              name=""
              placeholder="Please select"
              // PLACEHOLDER NOT WORKING
              required
            >
              {/* The top option is proxy for the placeholder which is not registering. WANT TO CHANGE */}
              <option selected>Please select</option>
              <option>Electronic</option>
              <option>more needed</option>
            </select>
            {/* <input
              className="itemDetails__input itemDetails__input--category"
              type="text"
              placeholder="Please select"
              required
            /> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemDetail;
