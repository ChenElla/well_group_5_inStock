import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./PageHeader.scss";

//may want to rename this component to something more specific as may nbeed to make another 2 for the different styles. THOUGH those are more elaborate so they could be modified names i.e. PageHeaderSearch or PageHeaderEdit (which are 2 other styles)

function PageHeader({ pageHeader, children, backButton = true }) {
	// function to allow user to go back to last page they were on - untested as routes not set up yet, though works if change url via warehouse/inventory buttons
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className="pageHeader">
			<div className="pageHeader__outer">
				<div className="pageHeader__inner-container">
					<div className="pageHeader__inner-static">
						{backButton && (
							<img
								className="pageHeader__return"
								src={backArrow}
								alt="Back Arrow"
								onClick={goBack}
							/>
						)}

						<h1 className="pageHeader__title-text">{pageHeader}</h1>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}

export default PageHeader;
