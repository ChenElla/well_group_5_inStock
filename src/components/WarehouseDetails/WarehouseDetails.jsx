import React from 'react'
import back_icon from '../../assets/icons/arrow_back-24px.svg';
import edit_icon from '../../assets/icons/edit-24px.svg';

import InventoryItem from './InventoryItem/InventoryItem';

import "./WarehouseDetails.scss";

export default function WarehouseDetails({warehouseId,singleWarehouse,inventories}) {
  return (
    <div className = "mainContainer">
      <div className = "mainContainer__backgroundContainer">
        <div className = "mainContainer__backgroundContainer__titleContainer">
          <div className = "mainContainer__backgroundContainer__titleContainer__nameContainer">
            <img className = "mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon" src = {back_icon} alt = "back_icon"/>
            <div className = "mainContainer__backgroundContainer__titleContainer__nameContainer__title">
              {singleWarehouse.warehouse_name}
            </div>
          </div>
          <img className = "mainContainer__backgroundContainer__titleContainer__editIcon" src = {edit_icon} alt = "edit_icon"/>
        </div>
      </div>
      <div className = "mainContainer__listContainer">
        <hr className = "mainContainer__listContainer__divider"/>
        <div className = "mainContainer__listContainer__warehouseDetail">
          <div className = "mainContainer__listContainer__warehouseDetail__warehouseAddress">
            <div className = "mainContainer__listContainer__warehouseDetail__warehouseAddress__title">
              warehouse address:
            </div>
            {singleWarehouse.warehouse_name}
          </div>
          <div className = "mainContainer__listContainer__warehouseDetail__contact">
            <div className = "mainContainer__listContainer__warehouseDetail__contact__contactName">
              <div className = "mainContainer__listContainer__warehouseDetail__contact__contactName__title">
                contact name:
              </div>
              {singleWarehouse.contact_name}<br/>
              {singleWarehouse.contact_position}
            </div>
            <div className = "mainContainer__listContainer__warehouseDetail__contact__contactInfo">
              <div className = "mainContainer__listContainer__warehouseDetail__contact__contactInfo__title">
                contact information:<br/>
              </div>
              {singleWarehouse.contact_phone}<br/>
              {singleWarehouse.contact_email}
            </div>
          </div>
        </div>
        {
          inventories.map( (item,index) =>
            <InventoryItem 
              key = {index} 
              item = {item}
            />
          )
        }
      </div>
    </div>
  )
}
