import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewInvBody from "../../components/NewInvBody/InvItemBody";

function AddNewInventoryItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");

  let navigate = useNavigate();

  // NEED TO ADJUST SO values in joined state have right key values. i.e. name = item_name

  function handleSubmit(e) {
    e.preventDefault();
    const joinedState = {
      warehouse: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      // name,
      item_name: "bat",
      description,
      category,
      status,
      quantity,
    };

    const testing = JSON.stringify(joinedState);

    console.log(joinedState);
    console.log(testing);

    axios
      .post(`http://localhost:5050/inventories`, testing)
      .then((res) => {
        setName("");
        setDescription("");
        setCategory("");
        setStatus("");
        setQuantity("");
        setWarehouse("");
        alert(`item ${name} was added to the warehouse`);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <NewInvBody
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        setStatus={setStatus}
        setQuantity={setQuantity}
        setWarehouse={setWarehouse}
      />
    </div>
  );
}

export default AddNewInventoryItemPage;
