import "./PageContainer.scss";

function PageContainer({ children }) {
	return (
		<div className="pageContainer__inset">
			<div className="pageContainer">{children}</div>
		</div>
	);
}

export default PageContainer;
