import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice";

const store = configureStore({
  reducer: {
    pagination: pageSlice,
  },
});

export default store;
