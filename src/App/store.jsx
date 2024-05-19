import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../slices/productSlice";
export const store = configureStore ({
    reducer: {
        products: productreducer
    } ,
    devTools: true,

})