import React from "react";
import "./AddInvItemBtn.scss";

function AddInvItemBtn() {
  return (
    <div className="AddInvItemBtn">
      <div className="AddInvItemBtn__outer">
        <button className="AddInvItemBtn__button AddInvItemBtn__button--cancel">
          Cancel
        </button>
        <button className="AddInvItemBtn__button AddInvItemBtn__button--add">
          + Add Item
        </button>
      </div>
    </div>
  );
}

export default AddInvItemBtn;
