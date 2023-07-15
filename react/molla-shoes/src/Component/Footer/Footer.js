import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import images2 from "../../images/logo-footer1.jpg";

const Footer = () => {
  return (
    <>
      <div className="bg-stone-700 px-16 text-gray-500">
        <div className="grid grid-cols-10">
          <div className="col-span-3 ">
            <div className=" pt-9 flex m-6">
              <img src={images2} alt="" />
            </div>
            <div className="m-6 pt-7">
              <p>
                Praesent daoibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat.
              </p>
              <div className="space-x-5 pt-10 flex items-center">
                <button className="content flex items-center text-gray-400 border-2 rounded-full p-0.5 px-2.5">
                  <i className="fa-brands fa-facebook-f text-2xl"></i>
                </button>

                <button className="content flex items-center text-gray-400 border-2 rounded-full p-0.5 px-1.5">
                  <i className="fa-brands fa-twitter text-2xl"></i>
                </button>
                <button className="content flex items-center text-gray-400 border-2 rounded-full p-0.5 px-2">
                  <i className="fa-brands fa-instagram text-2xl"></i>
                </button>
                <button className="content flex items-center text-gray-400 border-2 rounded-full p-0.5 px-1.5">
                  <i className="fa-brands fa-youtube text-2xl"></i>
                </button>
                <button className="content flex items-center text-gray-400 border-2 rounded-full p-0.5 px-2">
                  <i className="fa-brands fa-pinterest text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-xl font-bold pt-14 text-white">Useful Links</h1>
            <ul className="pt-12">
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1 ">
                  About Shop
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1 ">
                  How to shop on Shoes
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer  py-1">FAQ</li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  Contact us
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  Log in
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2 pl-22">
            <h1 className="text-xl font-bold pt-14 text-white">
              Customer Service
            </h1>
            <ul className="pt-12">
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1 ">
                  Payment Methods
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  Money-back guarantee!
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1 ">
                  Returns
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer  py-1">
                  Shipping
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  Terms and conditions
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1 ">
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2 pl-20">
            <h1 className="text-xl font-bold pt-14 text-white">My Account</h1>
            <ul className="pt-12">
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  Sign in
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  View Cart
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  My Wishlist
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">
                  Track My Order
                </li>
              </Link>
              <Link>
                <li className="hover:text-sky-900 cursor-pointer py-1">Help</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 px-6">
          <hr></hr>
        </div>
        <div className="flex items-center justify-between px-6 py-6">
          <p>Copyright&copy; 2019 Shoes Store, All Rights Reserved</p>
          <div>
            <ul className="flex items-center space-x-4 text-2xl">
              <li>
                <i className="fa-brands fa-cc-visa text-blue-500"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-mastercard text-yellow-500"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-paypal text-blue-500"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-apple-pay text-yellow-500"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-amazon-pay text-blue-500"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
