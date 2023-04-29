import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./PageHeader.scss";

function PageHeader({ pageHeader, children, backButton, border = true }) {
	// function to allow user to go back to last page they were on
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className={border ? "pageHeader pageHeader--border" : "pageHeader"}>
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
					<div className="pageHeader__children">{children}</div>
				</div>
			</div>
			<hr className="pageHeader__divider"></hr>
		</div>
	);
}

export default PageHeader;
