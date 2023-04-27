import React from 'react'
import back_icon from '../../assets/icons/arrow_back-24px.svg';
import { useRef } from 'react';
import './WarehouseEdit.scss';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function WarehouseEdit({warehouseId,singleWarehouse}) {
    console.log(warehouseId)
    const form_ref = useRef();
    const address_ref = useRef();
    const city_ref = useRef();
    const country_ref = useRef();
    const warehouse_name_ref = useRef();
    const contact_name_ref = useRef();
    const phone_ref = useRef();
    const position_ref = useRef();
    const email_ref = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // const comment = commentRef.current;
        // if ( comment.value.length < 10 ) {
        //     alert('please enter at least 10 characters before you post it.')
        //     comment.focus();
        //     return;
        // }
        // const commentObj = {
        //     name:'Anonymous',
        //     comment: comment.value
        // }
        // axios.post(
        //         `http://localhost:8080/videos/${videoId}/comments`,commentObj
        //     )
        //     .then(response=>{
        //         setMainVideo(response.data);
        //         alert("Posted Successfully");
        //     })
        //     .catch(error=>{
        //         console.log(error);
        // });
    };
  return (
    <div className = "mainContainer">
      <div className = "mainContainer__backgroundContainer">
        <div className = "mainContainer__backgroundContainer__titleContainer">
          <div className = "mainContainer__backgroundContainer__titleContainer__nameContainer">
            <NavLink className = "mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon" to = {`/warehouses/${warehouseId}`}>
                <img className = "mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon__icon" src = {back_icon} alt = "back_icon"/>
            </NavLink>
            <div className = "mainContainer__backgroundContainer__titleContainer__nameContainer__title">
              Edit Warehouse
            </div>
          </div>
        </div>
      </div>
      <hr className = "divider"/>
      <form className = "mainContainer__warehouseForm" ref={form_ref}>
        <hr className = "mainContainer__warehouseForm__divider"/>
        <div className = "mainContainer__warehouseForm__detailsForm">
            <div className = "mainContainer__warehouseForm__detailsForm__column">
                <div className = "mainContainer__warehouseForm__detailsForm__column__title">
                    Warehouse Details
                </div>
                <label className = "mainContainer__warehouseForm__detailsForm__column__label">
                    Warehouse Name
                </label>
                <input 
                    className = "mainContainer__warehouseForm__detailsForm__column__input"
                    type="text" 
                    id="warehouse_name" 
                    name="warehouse_name" 
                    placeholder={singleWarehouse.warehouse_name}
                    ref = { warehouse_name_ref }
                />
            </div>
            <div className = "mainContainer__warehouseForm__detailsForm__column">
                <label className = "mainContainer__warehouseForm__detailsForm__column__label">
                    Street Address
                </label>
                <input 
                    className = "mainContainer__warehouseForm__detailsForm__column__input"
                    type="text" 
                    id="street_address" 
                    name="street_address" 
                    placeholder={singleWarehouse.address}
                    ref = { address_ref }
                />
            </div>
            <div className = "mainContainer__warehouseForm__detailsForm__column">
                <label className = "mainContainer__warehouseForm__detailsForm__column__label">
                    Warehouse Name
                </label>
                <input 
                    className = "mainContainer__warehouseForm__detailsForm__column__input"
                    type="text" 
                    id="city" 
                    name="city" 
                    placeholder={singleWarehouse.city}
                    ref = { city_ref }
                />
            </div>
            <div className = "mainContainer__warehouseForm__detailsForm__column">
                <label className = "mainContainer__warehouseForm__detailsForm__column__label">
                    Warehouse Name
                </label>
                <input 
                    className = "mainContainer__warehouseForm__detailsForm__column__input"
                    type="text" 
                    id="country" 
                    name="country" 
                    placeholder={singleWarehouse.country}
                    ref = { country_ref }
                />
            </div>
        </div>
        <hr className = "mainContainer__warehouseForm__divider"/>
        <div className = "mainContainer__warehouseForm__contactForm">
            <div className = "mainContainer__warehouseForm__contactForm__column">
                <div className = "mainContainer__warehouseForm__contactForm__column__title">
                    Contact Details
                </div>
                <label className = "mainContainer__warehouseForm__contactForm__column__label">
                    Contact Name
                </label>
                <input 
                    className = "mainContainer__warehouseForm__contactForm__column__input"
                    type="text" 
                    id="contact_name" 
                    name="contact_name" 
                    placeholder={singleWarehouse.contact_name}
                    ref = { contact_name_ref }
                />
            </div>
            <div className = "mainContainer__warehouseForm__contactForm__column">
                <label className = "mainContainer__warehouseForm__contactForm__column__label">
                    Position
                </label>
                <input 
                    className = "mainContainer__warehouseForm__contactForm__column__input"
                    type="text" 
                    id="position" 
                    name="position" 
                    placeholder={singleWarehouse.contact_position}
                    ref = { position_ref }
                />
            </div>
            <div className = "mainContainer__warehouseForm__contactForm__column">
                <label className = "mainContainer__warehouseForm__contactForm__column__label">
                    Phone Number
                </label>
                <input 
                    className = "mainContainer__warehouseForm__contactForm__column__input"
                    type="text" 
                    id="phone" 
                    name="phone" 
                    placeholder={singleWarehouse.contact_phone}
                    ref = { phone_ref }
                />
            </div>
            <div className = "mainContainer__warehouseForm__contactForm__column">
                <label className = "mainContainer__warehouseForm__contactForm__column__label">
                    Email
                </label>
                <input 
                    className = "mainContainer__warehouseForm__contactForm__column__input"
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder={singleWarehouse.contact_email}
                    ref = { email_ref }
                />
            </div>
        </div>
        <div className = "mainContainer__warehouseForm__buttonRow">
            <NavLink className = "mainContainer__warehouseForm__buttonRow__button mainContainer__warehouseForm__buttonRow__button--cancel" to = {`/warehouses/${warehouseId}`}>
                Cancel
            </NavLink>
            <button className = "mainContainer__warehouseForm__buttonRow__button mainContainer__warehouseForm__buttonRow__button--save" onClick = { handleSubmit }>
                Save
            </button>
        </div>
      </form>
    </div>
  )
}
