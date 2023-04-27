import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageHeader from "../PageHeader/PageHeader";
import ItemDetails from "../ItemDetails/ItemDetails";
import ItemAvailability from "../ItemAvailability/ItemAvailability";
import "./InvItemBody.scss";
import AddInvItemBtn from "../AddInvItemBtn/AddInvItemBtn";

function NewInvBody() {
  const [item_name, setItem_name] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouse_id, setWarehouse_id] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const joinedState = {
      warehouse_id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      item_name,
      // item_name: "bat",
      description,
      category,
      status,
      quantity,
      // warehouse, tried hardcoding for testing
    };

    console.log(joinedState);

    axios
      .post(`http://localhost:5050/inventories`, joinedState)
      .then((res) => {
        setItem_name("");
        setDescription("");
        setCategory("");
        setStatus("");
        setQuantity("");
        setWarehouse_id("");
        alert(`${item_name} was added to the warehouse`);
        navigate("/warehouse");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="invItemBody">
      <PageHeader pageHeader={"Add New Inventory Item"} />
      <form id="invItemBody__form" onSubmit={handleSubmit}>
        <div className="invItemBody__column">
          <div className="invItemBody__width">
            <ItemDetails
              name={item_name}
              setName={setItem_name}
              description={description}
              setDescription={setDescription}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <div className="invItemBody__width">
            <ItemAvailability
              status={setStatus}
              setStatus={setStatus}
              quantity={quantity}
              setQuantity={setQuantity}
              warehouse={warehouse_id}
              setWarehouse={setWarehouse_id}
            />
          </div>
        </div>
        <AddInvItemBtn />
      </form>
    </div>
  );
}

export default NewInvBody;
