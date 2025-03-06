import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pagination",
  initialState: { pageNo: 1 }, 
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
  },
});

export const { setPageNo } = pageSlice.actions;
export default pageSlice.reducer;
