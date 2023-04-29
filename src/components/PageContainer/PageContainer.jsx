import "./PageContainer.scss";

function PageContainer({ children }) {
	return (
		<div className="pageContainer">
			<div className="pageContainer__inset">
				<div className="">{children}</div>
			</div>
		</div>
	);
}

export default PageContainer;
