import React, { useState, useEffect } from "react";
import { sellproduct } from "./sellingproduct";
import { BsStar } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import "./product.css";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../redux/CartSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const dispatch = useDispatch();
  const [navItem, setNavItem] = useState(sellproduct);
  const [category, setCategory] = useState("all");

  const filterdata = () => {
    if (category === "all") {
      setNavItem(sellproduct);
    } else {
      let a = sellproduct.filter((item) => item.category === category);
      setNavItem(a);
    }
  };
  useEffect(() => {
    filterdata();
  }, [category]);

  const handleAdd = (val) => {
    toast.success("Add Successfully in to Cart");
    dispatch(AddtoCart(val));
  };

  // const handleAdd = (val) => {
  //   dispatch(AddtoCart(val));
  // };

  return (
    <>
      <div className="text-center font-semibold text-4xl pt-28">
        <h1>Top Selling Products</h1>
      </div>
      <div className="text-center pt-6">
        <div className="space-x-8">
          <button
            className={
              category == "all"
                ? " text-sky-900  underline font-bold cursor-pointer"
                : " "
            }
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            className={
              category == "women"
                ? " text-sky-900 font-bold  underline cursor-pointer"
                : " "
            }
            onClick={() => setCategory("women")}
          >
            WOMEN'S
          </button>
          <button
            className={
              category == "men"
                ? " text-sky-900 underline font-bold cursor-pointer"
                : " "
            }
            onClick={() => setCategory("men")}
          >
            MEN'S
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 py-8 px-20 hover:cursor-pointer">
        {navItem.map((item, key) => {
          return (
            <div
              className="text-center border-r-2 border-b-2  relative overflow-hidden h-[53vh] content-main"
              key={key}
            >
              <img src={item.src} alt={item.alt}></img>
              <p className="absolute top-5 left-5 px-1 bg-sky-900 text-white">
                {item.sale}
              </p>
              <p className="absolute top-12 left-5 px-1 text-white bg-red-400 ">
                {item.discount}
              </p>
              <div className=" absolute  flex opacity-0 likeplus right-0 -translate-x-8 top-5">
                <p className="  relative text-white w-[144px] pr-4 bg-sky-900  rounded-full p-1 ">
                  add to wishlist
                </p>
                <p className="  rounded-full pt-2 px-1 absolute left-[116px]  text-white  hover:visible ">
                  <FiHeart size={17} />
                </p>
              </div>
              <div className="bg-white w-full p-2 absolute main-abso">
                <p className="text-slate-400 py-1 hover:underline hover:text-sky-900">
                  {item.category1}
                </p>
                <p className="py-1 hover:underline h-12 hover:text-sky-900">
                  {item.name}
                </p>
                <p className="py-1 text-red-600 font-bold">
                  {item.Now} ${item.price}
                  {item.del ? (
                    <del className="text-slate-400">$ {item.del}</del>
                  ) : (
                    ""
                  )}
                </p>
                <h1 className=" py-3 flex gap-1 items-center justify-center">
                  <BsStar size={14} />
                  <BsStar size={14} />
                  <BsStar size={14} />
                  <BsStar size={14} />
                  <BsStar size={14} />
                  <p>(Reviews)</p>
                </h1>
                <p className="h-0.5 w-full  bg-slate-300">
                  <hr></hr>
                </p>
                <div className="grid grid-cols-2  py-2   text-sky-900">
                  <button
                    onClick={() => handleAdd(item)}
                    className="flex px-10 border-r-2"
                  >
                    <BsCartPlus size={16} />
                  </button>

                  <button className="flex px-10">
                    <GrOverview size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
