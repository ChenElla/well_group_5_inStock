import React from 'react'
import back_icon from '../../assets/icons/arrow_back-24px.svg';
import edit_icon from '../../assets/icons/edit-24px.svg';
import unfold_icon from '../../assets/icons/unfold_more.svg';
import InventoryItem from './InventoryItem/InventoryItem';
import DeleteConfirm from './InventoryItem/DeleteConfirm';

import "./WarehouseDetails.scss";

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function WarehouseDetails({warehouseId,singleWarehouse,inventories, setInventories}) {
  const [deleteItem, setDeleteItem] = useState(null);
  const [modalHandler, setModalHandler] = useState(false);
  return (
    <>
    { modalHandler? <DeleteConfirm inventories = {deleteItem} modalHandler={setModalHandler} setInventories = {setInventories} originalInventories = {inventories}
      />:<></>}
    <div className = "mainContainer">
      <div className = "mainContainer__backgroundContainer">
        <div className = "mainContainer__backgroundContainer__titleContainer">
          <div className = "mainContainer__backgroundContainer__titleContainer__nameContainer">
            <NavLink className = "mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon" to = {`/warehouses`}>
                <img className = "mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon__icon" src = {back_icon} alt = "back_icon"/>
            </NavLink>
            <div className = "mainContainer__backgroundContainer__titleContainer__nameContainer__title">
              {singleWarehouse.warehouse_name}
            </div>
          </div>
          <NavLink className = "mainContainer__backgroundContainer__titleContainer__iconContainer" to = {`/warehouses/${warehouseId}/edit`}>
            <img className = "mainContainer__backgroundContainer__titleContainer__iconContainer__editIcon" src = {edit_icon} alt = "edit_icon"/>
            <div className = "mainContainer__backgroundContainer__titleContainer__iconContainer__text">
              Edit
            </div>
          </NavLink>
        </div>
      </div>
      <div className = "mainContainer__listContainer">
        <hr className = "mainContainer__listContainer__divider"/>
        <div className = "mainContainer__listContainer__warehouseDetail">
          <div className = "mainContainer__listContainer__warehouseDetail__warehouseAddress">
            <div className = "mainContainer__listContainer__warehouseDetail__warehouseAddress__title">
              warehouse address:
            </div>
            {singleWarehouse.address},
            <br className = "mainContainer__listContainer__warehouseDetail__warehouseAddress__nextLine"/> 
            {singleWarehouse.city}, {singleWarehouse.country}
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
        <div className = "mainContainer__listContainer__row">
          <div className = "mainContainer__listContainer__row__invContainer">
            <div className = "mainContainer__listContainer__row__invContainer__name">
              inventory item
            </div> 
            <img className = "mainContainer__listContainer__row__invContainer__icon" src = {unfold_icon} alt = "unfold_arrow_icon"/>
          </div>
          <div className = "mainContainer__listContainer__row__categoryContainer">
            <div className = "mainContainer__listContainer__row__categoryContainer__name">
              category
            </div> 
            <img className = "mainContainer__listContainer__row__categoryContainer__icon" src = {unfold_icon} alt = "unfold_arrow_icon"/>
          </div>
          <div className = "mainContainer__listContainer__row__statusContainer">
            <div className = "mainContainer__listContainer__row__statusContainer__name">
              status
            </div> 
            <img className = "mainContainer__listContainer__row__statusContainer__icon" src = {unfold_icon} alt = "unfold_arrow_icon"/>
          </div>
          <div className = "mainContainer__listContainer__row__quantityContainer">
            <div className = "mainContainer__listContainer__row__quantityContainer__name">
              quantity
            </div> 
            <img className = "mainContainer__listContainer__row__quantityContainer__icon" src = {unfold_icon} alt = "unfold_arrow_icon"/>
          </div>
          <div className = "mainContainer__listContainer__row__actionsContainer">
            <div className = "mainContainer__listContainer__row__actionsContainer__name">
              actions
            </div> 
            <img className = "mainContainer__listContainer__row__actionsContainer__icon" src = {unfold_icon} alt = "unfold_arrow_icon"/>
          </div>
        </div>
        {
          inventories.map( (item,index) =>
            (index !== inventories.length -1)?
            <InventoryItem 
              key = {index} 
              index = {index}
              item = {item}
              last = "false"
              setDeleteItem = {setDeleteItem}
              setModalHandler  = {setModalHandler}
            />:<InventoryItem 
              key = {index} 
              index = {index}
              item = {item}
              last = "true"
              setModalHandler  = {setModalHandler}
            />
          )
        }
      </div>
    </div>
    </>
  )
}
