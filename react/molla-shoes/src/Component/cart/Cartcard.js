import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/CartSlice";

const Cartcard = ({ item, handleRemove }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(item.qty);

  const incre = () => {
    if (amount == 10) {
      setAmount(10);
    } else {
      setAmount((amt) => amt + 1);
      setType("inc");
    }
  };
  const decre = () => {
    if (amount == 1) {
      setAmount(1);
    } else {
      setAmount((amt) => amt - 1);
      setType("dec");
    }
  };

  const setType = (val) => {
    const obj = {
      ...item,
      type: val,
    };
    dispatch(updateCart(obj));
  };

  return (
    <>
      <div className="text-center md:grid grid-cols-7">
        <div className="col-span-1 px-36 md:px-0">
          <img src={item.src} alt="" className="h-[80px] w-[80px]" />
        </div>
        <div className="col-span-2 place-content-center">
          <div>
            <p className="py-2">{item.name}</p>
          </div>
          <div></div>
        </div>
        <div className="col-span-1 px-8 py-3 ">
          <p>${item.price}</p>
        </div>
        <div className=" col-span-1 py-3 ">
          <div className="flex px-32 md:px-0">
            <div>
              <button onClick={decre} className="h-8 w-8 bg-slate-300">
                -
              </button>
            </div>
            <div>
              <input
                type="text"
                className="h-8 w-8 bg-slate-300 text-center focus:outline-none"
                value={item.qty}
                name=""
                id=""
              />
            </div>
            <div>
              <button onClick={incre} className="h-8 w-8 bg-slate-300">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 px-8 py-3">
          ${(item.qty * item.price).toFixed(2)}
        </div>
        <div className="col-span-1 px-6 py-3">
          <button onClick={() => handleRemove(item)} title="Remove">
            X
          </button>
        </div>
      </div>
      <div className="pb-6 w-[350px] md:w-[750px]">
        <hr />
      </div>
    </>
  );
};

export default Cartcard;
