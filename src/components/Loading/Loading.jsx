import React from "react";
import loading_icon from "../../assets/icons/Loading_icon.gif";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loadingContainer">
      <img
        className="loadingContainer__icon"
        src={loading_icon}
        alt="loading-icon"
      />
      <div className="loadingContainer__loading">Loading ... </div>
    </div>
  );
}
