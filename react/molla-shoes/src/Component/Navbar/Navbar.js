import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../images/logo.jpg";
import { BsCart2 } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cartList);

  return (
    <>
      <div className="bg-white w-full fixed  z-10">
        <div className="flex mx-20  space-x-16">
          <div className="pt-8">
            <img src={Images} alt="" />
          </div>
          <div>
            <ul className="flex gap-10 pb-8  pt-8">
              <Link to="/">
                <li>
                  <button>HOME</button>
                </li>
              </Link>

              <Link to="/shop">
                <li>
                  <button>SHOP</button>
                </li>
              </Link>

              <Link to="/Product">
                <li>
                  <button>PRODUCT</button>
                </li>
              </Link>

              <Link to="/blog">
                <li>
                  <button>BLOG</button>
                </li>
              </Link>

              <Link to="/contactus">
                <li>
                  <button>CONTACT US</button>
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex absolute right-24 pt-8 space-x-4">
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
