import React from "react";
import "./ErrorMessage.scss";
import back_icon from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
export default function ErrorMessage({ errorNum }) {
	let message = "";
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-3);
	};
	if (errorNum == "1") message = "This link is invalid.";
	else if (errorNum == "2")
		message = "This warehouse does not hold any inventories!";
	else if (errorNum == "3")
		message = "This item does not exist in the inventory!";
	else message = "Request denied. Please contact the administrator.";
	return (
		<div className="container">
			<img
				className="container__goBackIcon"
				onClick={goBack}
				src={back_icon}
				alt="back_icon"
			/>
			<div className="container__errorColumn">404 Not Found: {message}</div>
		</div>
	);
}
