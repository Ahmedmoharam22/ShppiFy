import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: localStorage.getItem("loveProduct")
    ? JSON.parse(localStorage.getItem("loveProduct"))
    : [],
};
const loveProduct = createSlice({
  initialState,
  name: "loveProduct",
  reducers: {
    addProduct: (state, action) => {
      if (state.data.find((product) => product.id === action.payload.id)) {
        state.data = state.data.filter(
          (product) => product.id !== action.payload.id
        );
        localStorage.setItem("loveProduct", JSON.stringify(state.data))
      } else {
        state.data.push(action.payload);
        localStorage.setItem("loveProduct" , JSON.stringify(state.data))
      }
    },

    clear: (state) => {
      state.data = [];
      // localStorage.removeItem("loveProduct");
    },
  },
});
export default loveProduct.reducer;
export const { addProduct, clear } = loveProduct.actions;
