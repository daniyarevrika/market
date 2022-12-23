import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('item') !== null ? JSON.parse(localStorage.getItem('item')) : []
const initialState = {
   item: items,
}

export const DetailSlice = createSlice({
   name: 'detail',
   initialState,
   reducers: {
      detailOpen(state, action) {
         if (state.item.length < 1) {
            state.item.push(action.payload);
         } else {
            state.item.splice(0, 1, action.payload)
         }
         localStorage.setItem('item', JSON.stringify(state.item))
      },

   },
});

export const { detailOpen } = DetailSlice.actions;
export default DetailSlice.reducer;