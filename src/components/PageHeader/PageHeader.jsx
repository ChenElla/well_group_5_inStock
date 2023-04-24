import React from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./PageHeader.scss";

function PageHeader({ pageHeader }) {
  return (
    <div className="pageHeader">
      <div className="pageHeader__outer">
        <div className="pageHeader__inner-container">
          <img
            className="pageHeader__return"
            src={backArrow}
            alt="Back Arrow"
          />
          <h1 className="pageHeader__title-text">{pageHeader}</h1>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
