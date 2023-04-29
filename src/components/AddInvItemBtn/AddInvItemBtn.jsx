import React from "react";
import "./AddInvItemBtn.scss";
import { useNavigate } from "react-router-dom";

function AddInvItemBtn({ text }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="AddInvItemBtn">
      <div className="AddInvItemBtn__outer">
        <div className="AddInvItemBtn__flex-ctn">
          <button
            className="AddInvItemBtn__button AddInvItemBtn__button--cancel"
            onClick={goBack}
          >
            Cancel
          </button>
        </div>
        <div className="AddInvItemBtn__flex-ctn">
          <button
            className="AddInvItemBtn__button AddInvItemBtn__button--add"
            type="submit"
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddInvItemBtn;
