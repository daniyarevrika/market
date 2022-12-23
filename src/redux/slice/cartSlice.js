import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('product') !== null ? JSON.parse(localStorage.getItem('product')) : []
const initialState = {
   product: items,
   totalPrice: 0,
}

const setItemFunc = (item) => {
   localStorage.setItem('product', JSON.stringify(item));
}
export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      setProduct(state, action) {
         typeof (state.product.find(i => i.id === action.payload.id)) !== 'undefined' ? state.product.find(item => item.id === action.payload.id).count++ : state.product.push(action.payload);
         localStorage.setItem('product', JSON.stringify(state.product.map(item => item)))
      },
      removeItem(state, action) {
         state.product = state.product.filter((obj) => obj.id !== action.payload);
         setItemFunc(state.product.map((item) => item))
      },
      onMinus(state, action) {
         const Item = state.product.find((i) => i.id === action.payload);
         if (Item && Item.count > 1) {
            Item.count--;
         }
      }

   },
});

export const { setProduct, removeItem, onMinus } = cartSlice.actions;
export default cartSlice.reducer;