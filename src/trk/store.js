import { configureStore } from "@reduxjs/toolkit";
import allProducts from "./slises/allProducts";
import previewProduct from "./slises/previewProduct";
import loveProduct from "./slises/loveProduct";
import itemsCategories from "./slises/itemsCategories";
import categoriesSlice from "./slises/productCategories"
import cartSlice from "./slises/cartSlice";


export const store =  configureStore({
  reducer :{
    allProducts : allProducts ,
    previewProduct : previewProduct,
    love : loveProduct,
    itemsCategories : itemsCategories ,
    categoriesSlice : categoriesSlice ,
    cartSlice : cartSlice ,
  }
})