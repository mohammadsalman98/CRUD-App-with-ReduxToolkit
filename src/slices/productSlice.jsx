//redux imports 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//external libraries
import axios from "axios";
//create Thunk function 
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:3000/products')
    return response.data;
})
//create slice 
export const productSlice = createSlice({
    name: 'Productss',
    initialState: { productsArray: [], cart: [], tax: 0 },
    reducers: {
        increment: (state, action) => {
            // increment quantity rather than the same product if it's iterated
            const foundCurrentproduct = state.cart.find((product) => product.id === action.payload.id);
            if (foundCurrentproduct) {
                const updatedProduct = { ...foundCurrentproduct, quantity: foundCurrentproduct.quantity + 1 };
                const index = state.cart.findIndex((product) => product.id === action.payload.id);
                state.cart.splice(index, 1, updatedProduct);
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            // state.cart.push(action.payload);
        },
        deleteAllproducts: (state, action) => {
            const index = state.cart.findIndex((obj) => obj.id === action.payload);
            state.cart.splice(index, 1);
        },
        // take a copy from orginal product to modify it without impact on other component that may use the same product
        deleteProduct: (state, action) => {
            const product = state.cart.find((obj) => obj.id === action.payload);
            const index = state.cart.findIndex((obj) => obj.id === action.payload);
            const updatedProduct = { ...product, quantity: product.quantity - 1 };
            if (updatedProduct.quantity <= 0)
                state.cart.splice(index, 1);
            else state.cart.splice(index, 1, updatedProduct);
        },
        sumTotalTax: (state) => {
            const taxcopy = state.cart.reduce((acc, product) => {
                return acc + product.price * product.quantity;
            }, 0);
            state.tax = taxcopy;
        },
        Resetcart: (state) => {
            state.cart = []
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsArray = action.payload;
        })
            .addCase(fetchProducts.pending, () => {
                console.log('pending....');
            })
            .addCase(fetchProducts.rejected, (error) => {
                console.log(error);
            });
    }
})
export const { increment, deleteProduct, deleteAllproducts, Resetcart, sumTotalTax } = productSlice.actions;
export default productSlice.reducer