import React from "react";
import "./ItemDetails.scss";
import dropArrow from "../../assets/Icons/arrow_drop_down-24px.svg";

function ItemDetail({
	name,
	setName,
	description,
	setDescription,
	category,
	setCategory,
}) {
	return (
		<section className="itemDetails">
			<div className="itemDetails__outer">
				<h2 className="itemDetails__header">Item Details</h2>
				<div className="itemDetails__body">
					<div className="itemDetails__name-package">
						<p className="itemDetails__label">Item Name</p>
						<input
							className="itemDetails__input itemDetails__input--name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Item Name"
							required
						/>
					</div>
					<div className="itemDetails__description-package">
						<p className="itemDetails__label">Description</p>
						<textarea
							className="itemDetails__input itemDetails__input--description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Please enter a brief item description..."
							required
						></textarea>
					</div>
					<div className="itemDetails__category-package">
						<p className="itemDetails__label">Category</p>
						<div className="itemDetails__arrow-container">
							<select
								className="itemDetails__input itemDetails__input--category"
								name=""
								defaultValue="default"
								onChange={(e) => setCategory(e.target.value)}
								required
							>
								<option value="default">Please select</option>
								<option>Accessories</option>
								<option>Apparel</option>
								<option>Electronics</option>
								<option>Gear</option>
								<option>Health</option>
							</select>
							<img
								className="itemDetails__drop-Arrow"
								src={dropArrow}
								alt="Drop Down Arrow"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ItemDetail;
