import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

export const allCategories = createAsyncThunk(
  "itemsCategories/allCategories",
  async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    return data;

  
  }
);
const initialState = {
  isLoading: false,
  data: [],
  error: " ",
};
const itemsCategories = createSlice({
  name: "itemsCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(allCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(allCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export default itemsCategories.reducer;
