import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import ItemDetails from "../ItemDetails/ItemDetails";
import ItemAvailability from "../ItemAvailability/ItemAvailability";
import "./InvItemBody.scss";
import AddInvItemBtn from "../AddInvItemBtn/AddInvItemBtn";

function NewInvBody() {
	return (
		<div className="invItemBody">
			<PageHeader pageHeader={"Add New Inventory Item"} />
			<div className="invItemBody__column">
				<div className="invItemBody__width">
					<ItemDetails />
				</div>
				<div className="invItemBody__width">
					<ItemAvailability />
				</div>
			</div>
			<AddInvItemBtn />
		</div>
	);
}

export default NewInvBody;
