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
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("0");
  const [warehouse_id, setWarehouse_id] = useState("");
  // ---------
  const [showQuantity, setShowQuantity] = useState(true);
  //--------

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:5050/warehouses/name_to_id/${warehouse_id}`)
      .then((data) => {
        const joinedState = {
          warehouse_id: data.data,
          item_name,
          description,
          category,
          status,
          quantity,
        };
        axios
          .post(`http://localhost:5050/inventories`, joinedState)
          .then((res) => {
            setItem_name("");
            setDescription("");
            setCategory("");
            setStatus("In Stock");
            setQuantity("0");
            setWarehouse_id("");
            alert(`${item_name} was added to the warehouse`);
            navigate("/warehouses");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="invItemBody">
      <PageHeader pageHeader={"Add New Inventory Item"} />
      <form
        id="invItemBody__form"
        // className="invItemBody__form"
        onSubmit={handleSubmit}
      >
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
              showQuantity={showQuantity}
              setShowQuantity={setShowQuantity}
            />
          </div>
        </div>
        <AddInvItemBtn />
      </form>
    </div>
  );
}

export default NewInvBody;
