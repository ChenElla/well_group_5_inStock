import React from "react";

function ItemDetail() {
  return (
    <div className="itemDetails">
      <div className="itemDetails__outer">
        <h2 className="itemDetails__header">Item Details</h2>
        <div className="itemDetails__body">
          <div className="itemDetails__name-package">
            {/* might be able to make name single class as syling looks similar for all packages */}
            <p className="itemDetails__label">Item Name</p>
            <input
              className="itemDetails__input itemDetails__input--name"
              type="text"
            />
          </div>
          <div className="itemDetails__description-package">
            <p className="itemDetails__label">Description</p>
            <textarea
              className="itemDetails__input itemDetails__input--description"
              name=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="itemDetails__input itemDetails__catagory--package">
              <p className="itemDetails__label">Item Name</p>
              <input className="itemDetails__input-catagory" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
