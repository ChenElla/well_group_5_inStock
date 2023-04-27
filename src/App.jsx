import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import NewInvBody from "./components/NewInvBody/InvItemBody";
import InventoryDetails from "./components/InventoryDetails/inventorydetails";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Placeholder text="Warehouses" />} />
            <Route path="/inventories" element={<Placeholder text="Inventories" />} />
            <Route path="/warehouses/:id" element={<Placeholder text="Warehouse Details" />} />
            <Route path="/inventories/:id" element={<InventoryDetails />} />
            <Route path="/warehouses/:id/edit" element={<Placeholder text="Edit Warehouse" />} />
            <Route path="/warehouses/add" element={<Placeholder text="Add Warehouse" />} />
            <Route path="/inventories/:id/edit" element={<Placeholder text="Edit Inventory" />} />
            <Route path="/inventories/add" element={<Placeholder text="Add Inventory" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
