import React, { useEffect, useState } from "react";
import img24 from "../../images/page-header-bg.jpg";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import Cartcard from "./Cartcard";
import { removeCart } from "../redux/CartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartdata, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  const cart = useSelector((state) => state.cart.cartList);
  const getBasketTotal = () => {
    let total = cart.reduce(
      //reduce go through the array and cartItem is the each item in the array
      (accumulatedTotal, cartItem) =>
        accumulatedTotal + cartItem.price * cartItem.qty,
      0 //0 is the start point of accumulatedTotal
    );
    setTotal(parseFloat(total.toFixed(2)));
  };

  const fetchCart = async () => {
    setCartData(cart);
    await getBasketTotal();
  };

  useEffect(() => {
    fetchCart();
  }, [cart]);

  const [choice, setChoice] = useState(0);

  const handleRemove = (val) => {
    toast.error("Remove Item Successfully", {});
    if (cart.length === 0) {
      setChoice();
    }
    dispatch(removeCart(val));
  };

  return (
    <>
      <div className="pt-28 relative">
        <img src={img24} alt="image" className="h-[130px] md:h-[180px]" />
        <div className="absolute top-36 left-[100px] md:top-[150px] md:left-[520px] text-center ">
          <h1 className="text-3xl md:text-5xl font-semibold">Shopping Cart</h1>
          <p className="py-2 md:py-4 text-2xl text-orange-500">Shop</p>
        </div>
      </div>
      <div className="pt-14 px-2 md:px-20  pb-20">
        {cart && cart.length === 0 ? (
          <>
            <div className="text-center text-2xl font-bold text-red-700">
              No products in this cart
            </div>
          </>
        ) : (
          <div className="md:grid grid-cols-3">
            <div className="col-span-2">
              <div className="hidden md:grid grid-cols-7 ">
                <div className="col-span-1">
                  <p className="text-xl text-gray-400">Product</p>
                </div>
                <div className="col-span-2">
                  <div>
                    <p className="text-xl text-center text-gray-400">Name</p>
                  </div>
                  <div></div>
                </div>

                <div className="col-span-1 px-8">
                  <p className="text-xl text-gray-400">Price</p>
                </div>
                <div className="col-span-1">
                  <p className="text-xl text-gray-400 px-2">Quantity</p>
                </div>
                <div className="col-span-1">
                  <p className="text-xl text-gray-400 px-8">Total</p>
                </div>
                <div className="col-span-1">
                  <p className="text-xl text-gray-400 px-12">X</p>
                </div>
                <div className="md:w-[750px] py-4">
                  <hr />
                </div>
              </div>

              {cartdata.map((item, key) => {
                return (
                  <>
                    <Cartcard
                      key={key}
                      item={item}
                      handleRemove={handleRemove}
                    />
                  </>
                );
              })}
            </div>
            <div className="col-span-1 ">
              <div className="bg-slate-100 border-dotted border-2 px-8 pb-6">
                <div>
                  <h1 className="text-xl font-semibold py-4">Cart Total</h1>
                  <hr />
                  <div className="flex justify-between">
                    <h1 className="text-xl py-4">Subtotal:</h1>
                    <p className=" pt-5">${total.toFixed(2)}</p>
                  </div>
                  <hr />
                  <p className="text-xl py-4">Shipping:</p>
                  <div>
                    <div className="py-1 flex">
                      <input
                        type="radio"
                        defaultValue={0}
                        defaultChecked={true}
                        onChange={(e) => setChoice(Number(e.target.value))}
                        name="cart"
                      />

                      <div className="flex gap-24">
                        <label className="px-2">Free Shipping:</label>
                        <p className="">$0.00</p>
                      </div>
                    </div>
                    <div className="py-1 flex">
                      <input
                        type="radio"
                        defaultValue={10}
                        onChange={(e) => setChoice(Number(e.target.value))}
                        name="cart"
                      />
                      <div className="flex gap-32">
                        <label className="px-2">Standard:</label>
                        <p className=""> $10.00</p>
                      </div>
                    </div>
                    <div className="py-1 flex">
                      <input
                        type="radio"
                        defaultValue={20}
                        onChange={(e) => setChoice(Number(e.target.value))}
                        name="cart"
                      />
                      <div className="flex gap-[140px]">
                        <label className="px-2">Express:</label>
                        <p className="">$20.00</p>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-xl font-medium pt-4">
                    Estimate for Your Country
                  </h1>
                  <div className="py-4">
                    <a
                      href=""
                      className="text-gray-400 hover:text-orange-500 hover:underline "
                    >
                      Change Address
                    </a>
                  </div>
                  <hr />
                  <div className="py-4 text-xl flex justify-between text-orange-500">
                    <h1>Total: </h1>
                    <span>
                      <p className="">${(total + choice).toFixed(2)}</p>
                    </span>
                  </div>
                  <div className="text-center px-5 py-1 border-2 border-solid border-orange-300 text-orange-600 hover:text-white hover:bg-orange-300">
                    <button>PROCEED TO CHEKOUT</button>
                  </div>
                </div>
              </div>
              <div className="pt-8 ">
                <button className="border-2 border-solid py-1  w-full hover:bg-slate-50 gap-2 items-center flex justify-center">
                  CONTINUE SHOPPING
                  <FiRefreshCw size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
