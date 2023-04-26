import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/global.scss";

import Header from "./components/Header/Header";
import InvItemBody from "./components/NewInvBody/InvItemBody";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import NewInvBody from "./components/NewInvBody/InvItemBody";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NewInvBody />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route
            path="/warehouses/:warehouseId"
            element={<WarehouseDetailsPage />}
          />
          {/* <Route path="/upload" element={<UploadPage />} />
            <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
