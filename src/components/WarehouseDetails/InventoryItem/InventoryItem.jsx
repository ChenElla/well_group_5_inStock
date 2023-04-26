import React from "react";
import proceed_icon from "../../../assets/icons/chevron_right-24px.svg";
import delete_icon from "../../../assets/icons/delete_outline-24px.svg";
import edit_icon from "../../../assets/icons/edit-24px.svg";

import './InventoryItem.scss';

export default function InventoryItem({ item }) {
  return (
    <>
      <hr className="divider" />
      <div className="itemContainer">
        <div className="itemContainer__itemName">
          <div className="itemContainer__itemName__title">inventory item</div>
          <div className="itemContainer__itemName__name">
            <div className="itemContainer__itemName__name--text">
              {item.item_name}
            </div>
            <img
              className="itemContainer__itemName__name--icon"
              src={proceed_icon}
              alt="chevron-right-icon"
            />
          </div>
        </div>
        <div className = "itemContainer__itemStatus">
          <div className = "itemContainer__itemStatus__title">status</div>
          {item.status.toLowerCase() === "in stock" ? (
            <button className = "itemContainer__itemStatus__status--inStock">
              {item.status}
            </button>
          ) : (
            <button className = "itemContainer__itemStatus__status--outOfStock">
              {item.status}
            </button>
          )}
        </div>
        <div className = "itemContainer__itemCategory">
          <div className = "itemContainer__itemCategory__title">
            category
          </div>
          <div className = "itemContainer__itemCategory__category">
            {item.category}
          </div>
        </div>
        <div className = "itemContainer__itemQty">
          <div className = "itemContainer__itemQty__title">
            qty
          </div>
          <div className = "itemContainer__itemQty__quantity">
            {item.quantity}
          </div>
        </div>
      </div>
      <div className = "iconRow">
        <img className = "iconRow__deleteIcon" src = {delete_icon} alt = "delete_icon"/>
        <img className = "iconRow__editIcon" src = {edit_icon} alt = "edit_icon" />
      </div>
    </>
  );
}
