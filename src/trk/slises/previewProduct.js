import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchPreview = createAsyncThunk(
  "previewProduct/fetchPreview",
  async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  }
);
const previewProduct = createSlice({
  name: "previewProduct",
  initialState: {
    isOpen: false,
    data: {},
    isLoading : false,
    
  },
  reducers: {
    openPreview: (state) => {
      state.isOpen = true;
    },
    closePreview: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreview.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchPreview.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
  },
});
export const { openPreview, closePreview } = previewProduct.actions;
export default previewProduct.reducer;
