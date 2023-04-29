import React from "react";

import back_icon from "../../assets/Icons/arrow_back-24px.svg";
import error_icon from "../../assets/Icons/error-24px.svg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./AddWarehouse.scss";

export default function AddWarehouse() {
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

	const goBack = () => {
		navigate(-1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const ref_array = [
			warehouse_name_ref,
			address_ref,
			city_ref,
			country_ref,
			contact_name_ref,
			position_ref,
			phone_ref,
			email_ref,
		];
		let empty = false;
		ref_array.forEach((item, index) => {
			if (!item.current.value) {
				item.current.focus();
				empty = true;
				item.current.classList.add("focus");
				document
					.getElementById(`error_message_${index}`)
					.classList.add("errorMessage--display");
				document
					.getElementById(`error_message_${index}`)
					.parentElement.classList.add(
						"mainContainer__warehouseForm__detailsForm__column--error"
					);
			} else {
				item.current.classList.remove("focus");
				document
					.getElementById(`error_message_${index}`)
					.classList.remove("errorMessage--display");
				document
					.getElementById(`error_message_${index}`)
					.parentElement.classList.remove(
						"mainContainer__warehouseForm__detailsForm__column--error"
					);
			}
		});
		if (empty) return;
		if (phone_ref.current.value.length !== 10) {
			phone_ref.current.focus();
			alert("Please insert a 10-digit valid phone number (i.e., 1234567890).");
			return;
		}
		const phone_number_array = phone_ref.current.value.split("");
		//+1 (919) 797-2864
		const phone_number =
			"+1 (" +
			phone_number_array[0] +
			"" +
			phone_number_array[1] +
			"" +
			phone_number_array[2] +
			") " +
			phone_number_array[3] +
			"" +
			phone_number_array[4] +
			"" +
			phone_number_array[5] +
			"-" +
			phone_number_array[6] +
			"" +
			phone_number_array[7] +
			"" +
			phone_number_array[8] +
			"" +
			phone_number_array[9];
		const newWarehouse = {
			warehouse_name: warehouse_name_ref.current.value,
			address: address_ref.current.value,
			city: city_ref.current.value,
			country: city_ref.current.value,
			contact_name: contact_name_ref.current.value,
			contact_position: position_ref.current.value,
			contact_phone: phone_number,
			contact_email: email_ref.current.value,
		};
		axios
			.post(`http://localhost:5050/warehouses`, newWarehouse)
			.then((response) => {
				const warehouseId = response.data.id;
				alert("Added Successfully");
				navigate(`/warehouses/${warehouseId}`);
			})
			.catch((error) => {
				console.log(error.response.data);
				alert(error.response.data);
			});
	};
	return (
		<div className="mainContainer">
			<div className="mainContainer__backgroundContainer">
				<div className="mainContainer__backgroundContainer__titleContainer">
					<div className="mainContainer__backgroundContainer__titleContainer__nameContainer">
						<div
							className="mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon"
							onClick={goBack}
						>
							<img
								className="mainContainer__backgroundContainer__titleContainer__nameContainer__backIcon__icon"
								src={back_icon}
								alt="back_icon"
							/>
						</div>
						<div className="mainContainer__backgroundContainer__titleContainer__nameContainer__title">
							Edit Warehouse
						</div>
					</div>
				</div>
			</div>
			<hr className="divider" />
			<form className="mainContainer__warehouseForm" ref={form_ref}>
				<hr className="mainContainer__warehouseForm__divider" />
				<div className="mainContainer__warehouseForm__detailsForm">
					<div className="mainContainer__warehouseForm__detailsForm__column">
						<div className="mainContainer__warehouseForm__detailsForm__column__title">
							Warehouse Details
						</div>
						<label className="mainContainer__warehouseForm__detailsForm__column__label">
							Warehouse Name
						</label>
						<input
							className="mainContainer__warehouseForm__detailsForm__column__input"
							type="text"
							id="warehouse_name"
							name="warehouse_name"
							placeholder="Warehouse Name"
							ref={warehouse_name_ref}
						/>
						<div className="errorMessage" id="error_message_0">
							<img
								className="errorMessage--display__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage--display__text">
								This field is required
							</div>
						</div>
					</div>
					<div className="mainContainer__warehouseForm__detailsForm__column">
						<label className="mainContainer__warehouseForm__detailsForm__column__label">
							Street Address
						</label>
						<input
							className="mainContainer__warehouseForm__detailsForm__column__input"
							type="text"
							id="street_address"
							name="street_address"
							placeholder="Street Address"
							ref={address_ref}
						/>
						<div className="errorMessage" id="error_message_1">
							<img
								className="errorMessage--display__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage--display__text">
								This field is required
							</div>
						</div>
					</div>
					<div className="mainContainer__warehouseForm__detailsForm__column">
						<label className="mainContainer__warehouseForm__detailsForm__column__label">
							Warehouse Name
						</label>
						<input
							className="mainContainer__warehouseForm__detailsForm__column__input"
							type="text"
							id="city"
							name="city"
							placeholder="City"
							ref={city_ref}
						/>
						<div className="errorMessage" id="error_message_2">
							<img
								className="errorMessage--display__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage--display__text">
								This field is required
							</div>
						</div>
					</div>
					<div className="mainContainer__warehouseForm__detailsForm__column">
						<label className="mainContainer__warehouseForm__detailsForm__column__label">
							Warehouse Name
						</label>
						<input
							className="mainContainer__warehouseForm__detailsForm__column__input"
							type="text"
							id="country"
							name="country"
							placeholder="Country"
							ref={country_ref}
						/>
						<div className="errorMessage" id="error_message_3">
							<img
								className="errorMessage--display__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage--display__text">
								This field is required
							</div>
						</div>
					</div>
				</div>
				<hr className="mainContainer__warehouseForm__divider" />
				<div className="mainContainer__warehouseForm__contactForm">
					<div className="mainContainer__warehouseForm__contactForm__column">
						<div className="mainContainer__warehouseForm__contactForm__column__title">
							Contact Details
						</div>
						<label className="mainContainer__warehouseForm__contactForm__column__label">
							Contact Name
						</label>
						<input
							className="mainContainer__warehouseForm__contactForm__column__input"
							type="text"
							id="contact_name"
							name="contact_name"
							placeholder="Contact Name"
							ref={contact_name_ref}
						/>
						<div className="errorMessage" id="error_message_4">
							<img
								className="errorMessage--display__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage--display__text">
								This field is required
							</div>
						</div>
					</div>
					<div className="mainContainer__warehouseForm__contactForm__column">
						<label className="mainContainer__warehouseForm__contactForm__column__label">
							Position
						</label>
						<input
							className="mainContainer__warehouseForm__contactForm__column__input"
							type="text"
							id="position"
							name="position"
							placeholder="Position"
							ref={position_ref}
						/>
						<div className="errorMessage" id="error_message_5">
							<img
								className="errorMessage--display__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage--display__text">
								This field is required
							</div>
						</div>
					</div>
					<div className="mainContainer__warehouseForm__contactForm__column">
						<label className="mainContainer__warehouseForm__contactForm__column__label">
							Phone Number
						</label>
						<input
							className="mainContainer__warehouseForm__contactForm__column__input"
							type="text"
							id="phone"
							name="phone"
							placeholder="Phone number"
							ref={phone_ref}
						/>
						<div className="errorMessage" id="error_message_6">
							<img
								className="errorMessage__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage__text">This field is required</div>
						</div>
					</div>
					<div className="mainContainer__warehouseForm__contactForm__column">
						<label className="mainContainer__warehouseForm__contactForm__column__label">
							Email
						</label>
						<input
							className="mainContainer__warehouseForm__contactForm__column__input"
							type="text"
							id="email"
							name="email"
							placeholder="Email"
							ref={email_ref}
						/>
						<div className="errorMessage" id="error_message_7">
							<img
								className="errorMessage--display__icon"
								src={error_icon}
								alt="error_icon"
							/>
							<div className="errorMessage--display__text">
								This field is required
							</div>
						</div>
					</div>
				</div>
				<div className="mainContainer__warehouseForm__buttonRow">
					<div
						className="mainContainer__warehouseForm__buttonRow__button mainContainer__warehouseForm__buttonRow__button--cancel"
						onClick={goBack}
					>
						Cancel
					</div>
					<button
						className="mainContainer__warehouseForm__buttonRow__button mainContainer__warehouseForm__buttonRow__button--save"
						onClick={handleSubmit}
					>
						+ Add Warehouse
					</button>
				</div>
			</form>
		</div>
	);
}
