import React from "react";
import "./AddInvItemBtn.scss";

function AddInvItemBtn() {
  return (
    <div className="AddInvItemBtn">
      <div className="AddInvItemBtn__outer">
        <div className="AddInvItemBtn__flex-ctn">
          <button className="AddInvItemBtn__button AddInvItemBtn__button--cancel">
            Cancel
          </button>
        </div>
        <div className="AddInvItemBtn__flex-ctn">
          <button className="AddInvItemBtn__button AddInvItemBtn__button--add">
            + Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddInvItemBtn;
