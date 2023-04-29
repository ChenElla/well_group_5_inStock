import React from "react";
import "./EditItemDetails.scss";
import dropArrow from "../../assets/Icons/arrow_drop_down-24px.svg";

function EditItemDetails({
  name,
  setName,
  description,
  setDescription,
  category,
  setCategory,
}) {
  return (
    <section className="EditItemDetails">
      <div className="EditItemDetails__outer">
        <h2 className="EditItemDetails__header">Item Details</h2>
        <div className="EditItemDetails__body">
          <div className="EditItemDetails__name-package">
            <p className="EditItemDetails__label">Item Name</p>
            <input
              className="EditItemDetails__input EditItemDetails__input--name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item Name"
              required
            />
          </div>
          <div className="EditItemDetails__description-package">
            <p className="EditItemDetails__label">Description</p>
            <textarea
              className="EditItemDetails__input EditItemDetails__input--description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please enter a brief item description..."
              required
            ></textarea>
          </div>
          <div className="EditItemDetails__category-package">
            <p className="EditItemDetails__label">Category</p>
            <div className="EditItemDetails__arrow-container">
              <select
                className="EditItemDetails__input EditItemDetails__input--category"
                name=""
                defaultValue="default"
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="default">Please select</option>
                <option>Accessories</option>
                <option>Apparel</option>
                <option>Electronics</option>
                <option>Gear</option>
                <option>Health</option>
              </select>
              <img
                className="EditItemDetails__drop-Arrow"
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

export default EditItemDetails;
