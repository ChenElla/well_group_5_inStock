import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader2 from "../PageHeader2/PageHeader2";
import EditItemDetails from "../ItemDetails/ItemDetails";
import EditItemAvailability from "../ItemAvailability/ItemAvailability";
import "./EditItemsBody.scss";
import AddInvItemBtn from "../AddInvItemBtn/AddInvItemBtn";

function EditItemsBody() {
  const [item_name, setItem_name] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("0");
  const [warehouse_id, setWarehouse_id] = useState("");
  const [showQuantity, setShowQuantity] = useState(true);
  const [statusInitial, setStatusInitial] = useState("In Stock");

  // NEED INTIAL GET REQUEST TO SET VALUES
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5050/inventories/${id}`)
      .then((response) => {
        console.log(response.data);
        setItem_name(response.data.item_name);
        setDescription(response.data.description);
        setCategory(response.data.category); //NOT WORKING
        setStatus(response.data.status); //NOT WORKING
        setQuantity(response.data.quantity); //NOT WORKING
        setStatusInitial(response.data.status);
        // set
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 404) navigate("/error/1");
      });
  }, [id]);

  const navigate = useNavigate();

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
          .put(`http://localhost:5050/inventories/${id}`, joinedState)
          .then((res) => {
            // setItem_name("");
            // setDescription("");
            // setCategory("");
            // setStatus("In Stock");
            // setQuantity("0");
            // setWarehouse_id("");
            alert(`${item_name} was changed`);
            console.log(res.warehouse_id);
            navigate(`/warehouses/${joinedState.warehouse_id}`);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
    <PageHeader2 pageHeader={"Edit Inventory Item"} backButton={true}/>
    <div className="EditItemBody">
      <form id="EditItemBody__form" onSubmit={handleSubmit}>
        <div className="EditItemBody__column">
          <div className="EditItemBody__width">
            <EditItemDetails
              name={item_name}
              setName={setItem_name}
              description={description}
              setDescription={setDescription}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <div className="EditItemBody__width">
            <EditItemAvailability
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
        <AddInvItemBtn text="+ Add Item" />
      </form>
    </div>
    </>
  );
}

export default EditItemsBody;
