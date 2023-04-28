import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetails from "./components/InventoryDetails/inventorydetails";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
function App() {
	const Placeholder = ({ text }) => (
		<div style={{ padding: "2rem", textAlign: "center" }}>{text}</div>
	);
	return (
		<div className="root">
			<BrowserRouter>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<WarehousesPage />} />
						<Route path="/warehouses" element={<WarehousesPage />} />
						<Route path="/inventories" element={<InventoryPage />} />
						<Route
							path="/warehouses/:warehouseId"
							element={<WarehouseDetailsPage />}
						/>
						<Route path="/inventories/:id" element={<InventoryDetails />} />
						<Route
							path="/warehouses/:warehouseId/edit"
							element={<WarehouseEditPage />}
						/>
						<Route path="/warehouses/add" element={<AddWarehousePage />} />
						<Route
							path="/inventories/:id/edit"
							element={<Placeholder text="Edit Inventory" />}
						/>
						<Route
							path="/inventories/add"
							element={<Placeholder text="Add Inventory" />}
						/>
						<Route path="/error/:id" element={<ErrorPage />} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
