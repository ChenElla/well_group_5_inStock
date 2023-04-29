import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./inventorydetails.scss";
import editIconImg from "../../assets/Icons/edit-24px.svg";
import backArrowImg from "../../assets/Icons/arrow_back-24px.svg";

export default function InventoryDetails() {
  document.title = "Item Details - InStock";

  const BASE_API_URL = "http://localhost:5050";
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigate();
  const { id } = useParams();

  const navigateBack = () => {
    // navigation(`${BASE_API_URL}/inventories/`);
    navigation(-1);
  };

  useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/inventories/${id}`);
        setSelectedItem(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItem();
  }, [id]);

  function handleEditClick() {
    navigation(`/inventories/${id}/edit`);
  }

  function returnStock() {
    if (selectedItem?.status === "In Stock") {
      return <p className="detail__text detail__text--in-stock">IN STOCK</p>;
    } else {
      return (
        <p className="detail__text detail__text--off-stock">OUT OF STOCK</p>
      );
    }
  }

  return (
    <>
      {selectedItem && (
        <>
          <div className="detailTitle">
            <div className="detailTitle__container">
              <div className="detailTitle__container__header">
                <div className="detailTitle__container__title-wrapper">
                  <img
                    onClick={navigateBack}
                    className="detailTitle__container__back-arrow"
                    src={backArrowImg}
                    alt="back arrow"
                  />
                  <h1 className="detailTitle__container__title">
                    {selectedItem.item_name}
                  </h1>
                </div>
                <Link
                  className="detailTitle__container__edit-wrapper"
                  to={`/inventories/${id}/edit`}
                >
                  <img
                    onClick={handleEditClick}
                    src={editIconImg}
                    alt="edit icon"
                    className="detailTitle__container__edit-icon"
                  />
                  <h2 className="detailTitle__container__edit">Edit</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="detail">
            <div className="detail__card">
              <div className="detail__description-container">
                <h4 className="detail__label">ITEM DESCRIPTION:</h4>
                <p className="detail__text">{selectedItem.description}</p>
                <h4 className="detail__label detail__label--gap">CATEGORY:</h4>
                <p className="detail__text">{selectedItem.category}</p>
              </div>
              <div className="detail__status-container">
                <div className="detail__wrapper">
                  <h4 className="detail__label">STATUS:</h4>
                  {returnStock()}
                  <h4 className="detail__label  detail__label--gap">
                    WAREHOUSE:
                  </h4>
                  <p className="detail__text">{selectedItem.warehouse_name}</p>
                </div>
                <div className="detail__wrapper">
                  <h4 className="detail__label">QUANTITY:</h4>
                  <p className="detail__text">{selectedItem.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
