import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetails from "./components/InventoryDetails/inventorydetails";
import AddNewInventoryItemPage from "./pages/WarehouseDetailsPage/AddNewInventoryItemPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
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
            <Route path="/" element={<Placeholder text="Warehouses" />} />
            <Route path="/inventories" element={<InventoryPage />} />
            <Route path="/warehouses/:warehouseId" element={<WarehouseDetailsPage/>} />
            <Route path="/inventories/:id" element={<InventoryDetails />} />
            <Route path="/warehouses/:warehouseId/edit" element={<WarehouseEditPage/>} />
            <Route path="/warehouses/add" element={<AddWarehousePage />} />
            <Route path="/inventories/:id/edit" element={<Placeholder text="Edit Inventory" />} />
            <Route path="/inventories/add" element={<AddNewInventoryItemPage />} />
            <Route
              path = "/error/:id"
              element = {<ErrorPage/>}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
