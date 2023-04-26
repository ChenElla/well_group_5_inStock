import React from "react";
import "./AddButton.scss";

function AddButton({ name, addCallback, cancelCallback }) {
	return (
		<div className="AddButton">
			<div className="AddButton__outer">
				<div className="AddButton__flex-ctn">
					<button
						className="AddButton__button AddButton__button--cancel"
						onClick={cancelCallback}
					>
						Cancel
					</button>
				</div>
				<div className="AddButton__flex-ctn">
					<button
						className="AddButton__button AddButton__button--add"
						onClick={addCallback}
					>
						+ Add {name}
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddButton;
