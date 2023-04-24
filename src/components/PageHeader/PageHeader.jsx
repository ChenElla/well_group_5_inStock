import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./PageHeader.scss";

function PageHeader({ pageHeader }) {
  // function to allow user to go back to last page they were on - untested as routes not set up yet, though works if change url via warehouse/inventory buttons
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="pageHeader">
      <div className="pageHeader__outer">
        <div className="pageHeader__inner-container">
          <img
            className="pageHeader__return"
            src={backArrow}
            alt="Back Arrow"
            onClick={goBack}
          />
          <h1 className="pageHeader__title-text">{pageHeader}</h1>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
