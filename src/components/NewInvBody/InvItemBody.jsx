import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import ItemDetails from "../ItemDetails/ItemDetails";
import ItemAvailability from "../ItemAvailability/ItemAvailability";
import "./InvItemBody.scss";

function NewInvBody() {
  return (
    <div>
      <PageHeader pageHeader={"Add New Inventory Item"} />
      <div className="invItemBody__column">
        <div className="invItemBody__width">
          <ItemDetails />
        </div>
        <div className="invItemBody__width">
          <ItemAvailability />
        </div>
      </div>
    </div>
  );
}

export default NewInvBody;
