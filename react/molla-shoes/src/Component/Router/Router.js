import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Product from "../product/Product";
import Blog from "../blog/Blog";
import Contactus from "../contactus/Contactus";
import Cart from "../cart/Cart";
import Blogdetails from "../blog/Blogdetails";
import Scrolltotop from "../scroll/Scrolltotop";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Scrolltotop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog/:name" element={<Blogdetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
