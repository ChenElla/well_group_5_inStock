import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import "./PageHeader2.scss";

//may want to rename this component to something more specific as may nbeed to make another 2 for the different styles. THOUGH those are more elaborate so they could be modified names i.e. PageHeaderSearch or PageHeaderEdit (which are 2 other styles)

function PageHeader2({
	pageHeader,
	children,
	backButton,
	border = true,
}) {
	// function to allow user to go back to last page they were on - untested as routes not set up yet, though works if change url via warehouse/inventory buttons
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className={border ? "pageHeader2 pageHeader2--border" : "pageHeader2"}>
			<div className="pageHeader2__outer">
				<div className="pageHeader2__inner-container">
					<div className="pageHeader2__inner-static">
						{backButton && (
							<img
								className="pageHeader2__return"
								src={backArrow}
								alt="Back Arrow"
								onClick={goBack}
							/>
						)}

						<h1 className="pageHeader2__title-text">{pageHeader}</h1>
					</div>
					<div className="pageHeader2__children">{children}</div>
				</div>
			</div>
			<hr className = "pageHeader2__divider"></hr>
		</div>
	);
}

export default PageHeader2;
