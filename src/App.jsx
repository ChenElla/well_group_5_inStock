import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import InventoryDetails from "./components/InventoryDetails/inventorydetails";

const Placeholder = ({ text }) => (
  <div style={{ padding: "2rem", textAlign: "center" }}>{text}</div>
);

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
