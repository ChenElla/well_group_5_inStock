import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer/footer";

function App() {
	const Placeholder = ({ text }) => (
	  <div style={{ padding: "2rem", textAlign: "center" }}>{text}</div>
	);
  
	return (
	  <div className="root">
		<BrowserRouter>
		  <div className="App">
			<Routes>
			  <Route exact path="/" element={<Placeholder text="Home" />} />
			  <Route path="/warehouses" element={<Placeholder text="Warehouses" />} />
			  <Route path="/inventories" element={<Placeholder text="Inventories" />} />
			  <Route path="/warehouses/:id" element={<Placeholder text="Warehouse Details" />} />
			  <Route path="/inventories/:id" element={<Placeholder text="Inventory Details" />} />
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
