import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  isCartOpen: false,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProductInBacket: (state, action) => {
      const productFind = state.cartData.find(
        (product) => product.id === action.payload.id
      );
      if (productFind) {
        productFind.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.cartData = [...state.cartData , productClone];
      }
      localStorage.setItem("cart", JSON.stringify(state.cartData));
      
    },
    decreaseItemQuantity :( state , action ) => {
      state.cartData = state.cartData.map((product) => {
        if(product.id === action.payload){
          if (product.quantity === 1) {
            return null
          }
          const quantity = product.quantity - 1;
          return {...product , quantity }
        } else {
          return product ;
        }
      }) .filter((product) => product !== null)
      localStorage.setItem("cart" , JSON.stringify(state.cartData))

    } ,
    deleteProductInBacket: (state, action) => {
      state.cartData = state.cartData.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cartData));
    },
    clearBacket: (state) => {
      state.cartData = [] ;
      localStorage.removeItem("cart" , JSON.stringify(state.cartData))
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },

    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export default cartSlice.reducer;
export const {
  openCart,
  closeCart,
  addProductInBacket,
  deleteProductInBacket,
  clearBacket,
  decreaseItemQuantity,
} = cartSlice.actions;
