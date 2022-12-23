import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import DetailSlice from "./slice/DetailSlice";
import sortslice from "./slice/sortslice";

export const store = configureStore({
   reducer: {
      cartSlice,
      DetailSlice,
      sortslice,
   },
});
