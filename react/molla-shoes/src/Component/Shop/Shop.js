import React, { useEffect, useState } from "react";
import Img11 from "../../images/page-header-bg.jpg";
import { product, products } from "./Data";
import { BsCartPlus } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { BsStar } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import "./shop.css";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../redux/CartSlice";

import { toast } from "react-toastify";

const Shop = () => {
  const dispatch = useDispatch();
  const [shopList, setShopList] = useState(products);
  const [category, setCategory] = useState("all");

  const filterdata = () => {
    if (category === "all") {
      setShopList(products);
    } else {
      let a = products.filter((item) => item.category === category);
      setShopList(a);
    }
  };
  useEffect(() => {
    filterdata();
  }, [category]);

  const handleAdd = (val) => {
    toast.success("Add Successfully in to Cart");
    dispatch(AddtoCart(val));
  };

  return (
    <>
      <div className="w-full relative">
        <img src={Img11} alt="" className="pt-20" />
        <div className="absolute  left-1/2 -translate-x-1/2 top-1/2 py-8   text-center">
          <h1 className="text-4xl">New Arrivals</h1>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="flex justify-center py-4">
          <div className=" space-x-12 ">
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
      </div>
      <div className="">
        <div className="grid grid-cols-4 gap-8 bg-slate-50 text-center hover:cursor-pointer  ">
          {shopList.map((item, key) => {
            return (
              <div
                key={key}
                className="  relative overflow-hidden h-[60vh] content-home"
              >
                <img
                  src={item.src}
                  className="w-full hero "
                  alt={item.alt}
                ></img>

                <p className="absolute top-5 left-5 px-1 bg-sky-900 text-white">
                  {item.sale}
                </p>
                <p className="absolute top-12 left-5 px-1 text-white bg-red-400 ">
                  {item.discount}
                </p>
                <div className=" absolute bg-sky-900 rounded-full w-[144px] flex gap-4 opacity-0 like right-0 -translate-x-8 top-5">
                  <p className="px-2 py-1 text-white relative ">
                    add to wishlist
                  </p>
                  <p className="  pt-2 px-1  text-white rounded-full absolute left-28 hover:visible ">
                    <FiHeart size={17} />
                  </p>
                </div>

                <div className="bg-white p-2 absolute left-0 right-0   home-abso">
                  <p className="text-slate-400 py-1">{item.category1} </p>
                  <p className=" py-1 hover:underline h-12 hover:text-sky-900">
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
                  <h1 className=" py-1 flex gap-1 items-center justify-center">
                    <BsStar size={14} />
                    <BsStar size={14} />
                    <BsStar size={14} />
                    <BsStar size={14} />
                    <BsStar size={14} />
                    <p>(Reviews)</p>
                  </h1>
                  <p className="h-0.5  bg-slate-300">
                    <hr></hr>
                  </p>
                  <div className="grid grid-cols-2 gap-5 py-2 px-2 text-sky-900 text-sm ">
                    <button
                      onClick={() => handleAdd(item)}
                      className="flex gap-2 border-r-2 border-slate-400 items-center hover:underline"
                    >
                      <BsCartPlus size={18} />
                      ADD TO CART
                    </button>

                    <button className="flex gap-4 hover:underline">
                      <GrOverview size={22} />
                      QUICK VIEW
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-3 py-20 px-20 cursor-pointer">
        {product.map((item, key) => {
          return (
            <div
              key={key}
              className=" banner-content  relative overflow-hidden content-shop"
            >
              <img src={item.src} className="" alt={item.alt}></img>
              <div className="  absolute text-center  top-52  w-full    shop-abso">
                <p className="text-2xl">{item.category}</p>
                <p className="text-xl  text-gray-500">{item.product}</p>
                <p className="text-sky-900 py-2 text-base hover:underline">
                  {item.button}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
