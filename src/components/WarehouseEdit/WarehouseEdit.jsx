import React from 'react'

import back_icon from '../../assets/icons/arrow_back-24px.svg';
import error_icon from '../../assets/icons/error-24px.svg';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

import './WarehouseEdit.scss';

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
        // {
        //     "id": "2922c286-16cd-4d43-ab98-c79f698aeab0",
        //     "warehouse_name": "Brooklyn",
        //     "address": "918 Morris Lane",
        //     "city": "Brooklyn",
        //     "country": "USA",
        //     "contact_name": "Parmin Aujla",
        //     "contact_position": "Warehouse Manager",
        //     "contact_phone": "+1 (646) 122-2234",
        //     "contact_email": "pasd)fdfdfco@ddf.com"
        // }
        const ref_array = [warehouse_name_ref,address_ref,city_ref,country_ref,contact_name_ref,position_ref,phone_ref,email_ref];
        let empty = false;
        ref_array.forEach((item,index) => {
            if(!item.current.value){
                item.current.focus();
                empty = true;
                item.current.classList.add('focus');
                document.getElementById(`error_message_${index}`).classList.add("errorMessage--display");
                document.getElementById(`error_message_${index}`).parentElement.classList.add("mainContainer__warehouseForm__detailsForm__column--error");

            }
            else{
                item.current.classList.remove('focus');
                document.getElementById(`error_message_${index}`).classList.remove("errorMessage--display");
                document.getElementById(`error_message_${index}`).parentElement.classList.remove("mainContainer__warehouseForm__detailsForm__column--error");
            }
        })
        if(empty)
            return;
        const warehouseEdited = {
            id:warehouseId,
            warehouse_name:warehouse_name_ref.current.value,
            address:address_ref.current.value,
            city:city_ref.current.value,
            country:city_ref.current.value,
            contact_name:contact_name_ref.current.value,
            contact_position:position_ref.current.value,
            contact_phone:phone_ref.current.value,
            contact_email:email_ref.current.value
        }
        // if ( comment.value.length < 10 ) {
        //     alert('please enter at least 10 characters before you post it.')
        //     comment.focus();
        //     return;
        // }
        // const commentObj = {
        //     name:'Anonymous',
        //     comment: comment.value
        // }
        axios.put(
                `http://localhost:5050/warehouses/${warehouseId}`,warehouseEdited
            )
            .then(response=>{
                navigate(`/warehouses/${warehouseId}`);
                alert("Updated Successfully");
            })
            .catch(error=>{
                console.log(error.response.data);
                alert(error.response.data);
            }
        );
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
                    defaultValue = {singleWarehouse.warehouse_name}
                    placeholder={singleWarehouse.warehouse_name}
                    ref = { warehouse_name_ref }
                />
                <div className = "errorMessage" id = "error_message_0">
                    <img className = "errorMessage--display__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage--display__text">
                        This field is required
                    </div>
                </div>
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
                    defaultValue = {singleWarehouse.address}
                    placeholder={singleWarehouse.address}
                    ref = { address_ref }
                />
                <div className = "errorMessage" id = "error_message_1">
                    <img className = "errorMessage--display__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage--display__text">
                        This field is required
                    </div>
                </div>
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
                    defaultValue = {singleWarehouse.city}
                    placeholder={ singleWarehouse.city }
                    ref = { city_ref }
                />
                <div className = "errorMessage" id = "error_message_2">
                    <img className = "errorMessage--display__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage--display__text">
                        This field is required
                    </div>
                </div>
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
                    defaultValue = {singleWarehouse.country}
                    placeholder={singleWarehouse.country}
                    ref = { country_ref }
                />
                <div className = "errorMessage" id = "error_message_3">
                    <img className = "errorMessage--display__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage--display__text">
                        This field is required
                    </div>
                </div>
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
                    defaultValue = {singleWarehouse.contact_name}
                    placeholder={singleWarehouse.contact_name}
                    ref = { contact_name_ref }
                />
                <div className = "errorMessage" id = "error_message_4">
                    <img className = "errorMessage--display__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage--display__text">
                        This field is required
                    </div>
                </div>
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
                    defaultValue = {singleWarehouse.contact_position}
                    placeholder={singleWarehouse.contact_position}
                    ref = { position_ref }
                />
                <div className = "errorMessage" id = "error_message_5">
                    <img className = "errorMessage--display__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage--display__text">
                        This field is required
                    </div>
                </div>
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
                    defaultValue = {singleWarehouse.contact_phone}
                    placeholder={singleWarehouse.contact_phone}
                    ref = { phone_ref }
                />
                <div className = "errorMessage" id = "error_message_6">
                    <img className = "errorMessage__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage__text">
                        This field is required
                    </div>
                </div>
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
                    defaultValue = {singleWarehouse.contact_email}
                    placeholder={singleWarehouse.contact_email}
                    ref = { email_ref }
                />
                <div className = "errorMessage" id = "error_message_7">
                    <img className = "errorMessage--display__icon" src = {error_icon} alt = "error_icon"/>
                    <div className = "errorMessage--display__text">
                        This field is required
                    </div>
                </div>
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
