import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetails from "./components/InventoryDetails/inventorydetails";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
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
            <Route path="/inventories" element={<Placeholder text="Inventories" />} />
            <Route path="/warehouses/:warehouseId" element={<WarehouseDetailsPage/>} />
            <Route path="/inventories/:id" element={<InventoryDetails />} />
            <Route path="/warehouses/:warehouseId/edit" element={<WarehouseEditPage/>} />
            <Route path="/warehouses/add" element={<Placeholder text="Add Warehouse" />} />
            <Route path="/inventories/:id/edit" element={<Placeholder text="Edit Inventory" />} />
            <Route path="/inventories/add" element={<Placeholder text="Add Inventory" />} />
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
