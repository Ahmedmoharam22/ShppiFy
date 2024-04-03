import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const categories = createAsyncThunk(
  "categoriesSlice/categories",
  async (cate) => {
    const res = await fetch(`https://dummyjson.com/products/category/${cate}`);
    const data = await res.json();
    return data.products;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};
const categoriesSlice = createSlice({
  initialState,
  name: "categoriesSlise",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(categories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(categories.rejected, (state, action) => {
      state.isLoading = true;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
export default categoriesSlice.reducer;
