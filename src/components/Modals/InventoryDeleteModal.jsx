import "./modal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

const InventoryDeleteModal = ({ inventories, modalHandler }) => {
  const URL = "http://localhost:5050/inventories";
  const id = inventories.id;

  const handleDelete = () => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        modalHandler(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__text">
            <div className="modal__close">
              <img
                src={closeIcon}
                className="modal__close-icon"
                alt="closing icon"
                onClick={() => {
                  modalHandler(false);
                }}
              />
            </div>
            <div className="modal__header">
              <h4 className="modal__title">
                Delete {inventories.item_name} inventory item?
              </h4>
            </div>
            <div className="modal__description">
              <p className="modal__description-text">
                Please confirm that you'd like to delete{" "}
                {inventories.item_name} from the inventory list. You
                won't be able to undo this action.
              </p>
            </div>
          </div>
          <div className="modal__cta-container">
            <div className="modal__cta">
              <button
                onClick={() => {
                  modalHandler(false);
                }}
                className="modal__cancel-button"
              >
                Cancel
              </button>
              <button onClick={handleDelete} className="modal__delete-button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryDeleteModal;
