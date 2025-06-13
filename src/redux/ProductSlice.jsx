import { createSlice } from "@reduxjs/toolkit";
import dbData from '../db.json';

const initialState = {
  products: dbData.Products || [],
}

export const ProductSlice =  createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload
        }
    }
})

export const { setProducts} = ProductSlice.actions
export default ProductSlice.reducer