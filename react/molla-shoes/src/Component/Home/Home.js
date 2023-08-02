import React from "react";
import HomeSlider from "./Slider";
import images4 from "../../images/banner-1.jpg";
import images5 from "../../images/banner-2.jpg";
import images6 from "../../images/banner-4.jpg";
import images7 from "../../images/banner-3.jpg";
import { SlRocket } from "react-icons/sl";
import { MdRestore } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <div className="grid  md:grid-cols-3 mx-4 md:mx-20">
        <div className="md:col-span-2 md:grid md:grid-cols-2 ">
          <div className="pb-6 hover:opacity-90">
            <img src={images4} alt="" className="absolute" />
            <div className="relative left-10 md:left-48 pt-16 text-white">
              <p className="hover:text-yellow-500">New Arrivals</p>
              <h1 className="font-bold text-2xl">
                Sneakers & <br></br> Athletic Shoes
              </h1>
              <Link to="./Shop">
                <button className="border-2 rounded-full px-4 my-4 hover:bg-sky-900">
                  DISCOVER NOW
                </button>
              </Link>
            </div>
          </div>
          <div className="pb-6 hover:opacity-80">
            <img src={images5} alt="" className="absolute" />
            <div className="relative pt-16 px-6">
              <p className="text-gray-500">Clearance</p>
              <h1 className="text-2xl font-bold">Sandals</h1>
              <h2 className="text-2xl">up to 70% off</h2>
              <Link to="./Shop">
                <button className="border-2 rounded-full px-4 my-4 border-gray-500 hover:bg-sky-900 hover:text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-2 hidden md:block hover:opacity-75">
            <img src={images7} alt="" className="absolute " />
            <div className="relative   px-8 md:px-20 md:pt-14 text-white">
              <p>On Sale</p>
              <h1 className="text-2xl font-bold">Slip-On Loafers</h1>
              <h2 className="text-2xl">up to 30% off</h2>
              <Link to="./Shop">
                <button className="border-2 rounded-full px-4 my-4 hover:bg-sky-900">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" hover:opacity-75">
          <img src={images6} alt="" className="absolute" />
          <div className="relative text-white mx-14 pt-80">
            <p>On Sale</p>
            <h1 className="text-2xl font-bold">
              Amazing <br></br>
              Lace Up Boots
            </h1>
            <h2 className="text-2xl">from $39.00</h2>
            <Link to="./product">
              <button className="border-2 rounded-full px-4 my-4  hover:bg-sky-900">
                DISCOVER NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 pt-20 pb-10 mx-12 md:mx-24 gap-10 ">
        <div className="col-span-1 flex items-center gap-6  md:border-r-2 border-r-slate-300">
          <div>
            <h3 className="text-sky-900">
              <SlRocket size={30} />
            </h3>
          </div>
          <div>
            <p className="text-sky-900 text-xl font-semibold">FREE SHIPPING</p>
            <h1 className="text-gray-600">orders $50 or more</h1>
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-6 md:border-r-2 border-r-slate-300 ">
          <div>
            <h3 className="text-sky-900">
              <MdRestore size={38} />
            </h3>
          </div>
          <div>
            <p className="text-sky-900 text-xl font-semibold">FREE RETURNS</p>
            <h1 className="text-gray-600">Within 30 days</h1>
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-6 md:border-r-2 border-r-slate-300 ">
          <div>
            <h3 className="text-sky-900">
              <MdOutlineInfo size={38} />
            </h3>
          </div>
          <div>
            <p className="text-sky-900 text-xl font-semibold">
              GET 20% OFF 1 ITEM
            </p>
            <h1 className="text-gray-600">When you sign up </h1>
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-6">
          <div>
            <h3 className="text-sky-900">
              <MdSportsSoccer size={38} />
            </h3>
          </div>
          <div>
            <p className="text-sky-900 text-xl font-semibold">WE SUPPORT</p>
            <h1 className="text-gray-600">24/7 amazing services</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
