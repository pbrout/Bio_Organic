import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "./presentation/Login/LoginComponent";
import { HomeComponent } from "./presentation/Home/HomeComponent";
import ServicesComponent from "./presentation/Services/ServicesComponent";
import CorporateComponent from "./presentation/Corporate/CorporateComponent";
import ContactComponent from "./presentation/Contact/ContactComponent";
import ProductsComponent from "./presentation/Products/ProductsComponent";
import EnquiryListComponent from "./presentation/EnquiryList/EnquiryListComponent";
import HeaderComponent from "./presentation/Header/HeaderComponent";
import FinalBarComponent from "./presentation/FinalBar/FinalBarComponent";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/corporate" element={<CorporateComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/enquirylist" element={<EnquiryListComponent />} />
      </Routes>
      <FinalBarComponent />
    </div>
  );
};

export default App;
