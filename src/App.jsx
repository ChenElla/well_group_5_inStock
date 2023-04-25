import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Global.scss";
import Header from "./components/Header/Header";
import InvItemBody from "./components/NewInvBody/InvItemBody";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <PageHeader pageHeader={"Add New Inventory Item"} /> */}
        <InvItemBody />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
