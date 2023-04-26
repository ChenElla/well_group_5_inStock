import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/global.scss";

import Header from "./components/Header/Header";
import InvItemBody from "./components/NewInvBody/InvItemBody";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import NewInvBody from "./components/NewInvBody/InvItemBody";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				{/* <NewInvBody /> */}
				<Routes>
					<Route
						path="/warehouses/:warehouseId"
						element={<WarehouseDetailsPage />}
					/>
					<Route path="/inventory" element={<InventoryPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
