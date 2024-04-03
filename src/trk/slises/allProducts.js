import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "allProducts/fetchAllProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products/?limit=100");
    const data = await res.json();
    return data.products;
  }
);

const allProducts = createSlice({
  initialState : [],
  name: "allProducts",
  reducers :{} ,
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export default allProducts.reducer;
