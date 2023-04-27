import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import ItemDetails from "../ItemDetails/ItemDetails";
import ItemAvailability from "../ItemAvailability/ItemAvailability";
import "./InvItemBody.scss";
import AddInvItemBtn from "../AddInvItemBtn/AddInvItemBtn";

function NewInvBody({
  handleSubmit,
  name,
  setName,
  description,
  setDescription,
  setCategory,
  setStatus,
  setQuantity,
  setWarehouse,
}) {
  return (
    <div className="invItemBody">
      <PageHeader pageHeader={"Add New Inventory Item"} />
      <form id="invItemBody__form" onSubmit={handleSubmit}>
        <div className="invItemBody__column">
          <div className="invItemBody__width">
            <ItemDetails
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
              setCategory={setCategory}
            />
          </div>
          <div className="invItemBody__width">
            <ItemAvailability
              setStatus={setStatus}
              setQuantity={setQuantity}
              setWarehouse={setWarehouse}
            />
          </div>
        </div>
        <AddInvItemBtn />
      </form>
    </div>
  );
}

export default NewInvBody;
