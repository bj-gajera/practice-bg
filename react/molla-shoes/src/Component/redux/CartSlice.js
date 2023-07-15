import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartList: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddtoCart: (state, action) => {
      let isPresent = false;
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          isPresent = true;
          item.qty += 1;
        }
        return item;
      });
      if (!isPresent) {
        const obj = { ...action.payload, qty: 1 };
        state.cartList = [...state.cartList, obj];
      }
    },
    removeCart: (state, action) => {
      return {
        cartList: state.cartList.filter((item) => {
          return !(item.id === action.payload.id);
        }),
      };
    },
    updateCart: (state, action) => {
      const type = action.payload.type;
      const cartindex = state.cartList.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (type === "inc") {
        state.cartList[cartindex].qty = state.cartList[cartindex].qty + 1;
      } else {
        state.cartList[cartindex].qty = state.cartList[cartindex].qty - 1;
      }
      state.total = state.cartList.reduce((tot, val) => {
        return tot + Number(val.price) * Number(val.qty);
      }, 0);
    },
  },
});

export const { AddtoCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
