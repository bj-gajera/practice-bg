import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../images/logo.jpg";
import { BsCart2 } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cartList);

  return (
    <>
      <div className=" bg-white w-full fixed  z-10 ">
        <div className="flex items-center justify-between m-4  md:mx-20 md:space-x-16 ">
          <div className="">
            <img src={Images} className="" alt="" />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10 py-2 ">
              <Link to="/">
                <li>
                  <a href="">HOME</a>
                </li>
              </Link>

              <Link to="/shop">
                <li>
                  <a href="">SHOP</a>
                </li>
              </Link>

              <Link to="/Product">
                <li>
                  <a href="">PRODUCT</a>
                </li>
              </Link>

              <Link to="/blog">
                <li>
                  <a href="">BLOG</a>
                </li>
              </Link>

              <Link to="/contactus">
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center px-10">
            <ul className="flex space-x-4 ">
              <li>
                <button>
                  <VscSearch size={21} />
                </button>
              </li>

              <Link to="/cart">
                <li>
                  <button className="flex gap-4 ">
                    <BsCart2 size={21} />
                    <div className="border-2 rounded-full border-white w-7 h-7 bg-blue-900 text-white">
                      {cart.length}
                    </div>
                  </button>
                </li>
              </Link>
              <li className="md:hidden block  ">
                <button onClick={() => setOpen(!open)}>
                  <FiMenu size={22} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {open === true && (
        <>
          <div className="absolute top-20 text-center  w-[375px] z-10  bg-gray-50 ">
            <ul className=" ">
              <Link to="/">
                <li>
                  <a href="">HOME</a>
                </li>
              </Link>

              <Link to="/shop">
                <li>
                  <a href="">SHOP</a>
                </li>
              </Link>

              <Link to="/Product">
                <li>
                  <a href="">PRODUCT</a>
                </li>
              </Link>

              <Link to="/blog">
                <li>
                  <a href="">BLOG</a>
                </li>
              </Link>

              <Link to="/contactus">
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
