import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Global.scss";
import Header from "./components/Header/Header";
import Inventory from "./pages/inventory/Inventory";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				{/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> */}
				<Route path="/inventory" element={<Inventory />} />
			</BrowserRouter>
		</>
	);
}

export default App;
