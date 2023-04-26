import React from "react";
import "./AddButton.scss";

/*
cancel is set to false by default, since I think it gets used less.
*/
function AddButton({ name, addCallback, cancelCallback, cancel = false }) {
	return (
		<div className="AddButton">
			<div className="AddButton__outer">
				{cancel && (
					<div className="AddButton__flex-ctn">
						<button
							className="AddButton__button AddButton__button--cancel"
							onClick={cancelCallback}
						>
							Cancel
						</button>
					</div>
				)}
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
