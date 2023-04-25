import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import ItemDetails from "../ItemDetails/ItemDetails";

function NewInvBody() {
  return (
    <div>
      <PageHeader pageHeader={"Add New Inventory Item"} />
      <ItemDetails />
    </div>
  );
}

export default NewInvBody;
