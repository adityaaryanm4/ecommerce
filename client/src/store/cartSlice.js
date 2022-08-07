import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        cartQuantity: 0,
        cartTotal: 0
    },
    reducers: {
        addProduct(state, action) {
            state.cartQuantity += 1
            state.products.push(action.payload)
            state.cartTotal = state.cartTotal + (action.payload.price * 100 * action.payload.amount)
        },
        removeProduct(state, action) {
            state.cartQuantity > 0 && (state.cartQuantity = state.cartQuantity - 1)
            state.products = state.products.filter(product=>product._id !== action.payload._id)
            state.cartTotal > 0 && (state.cartTotal = state.cartTotal - (action.payload.price * 100 * action.payload.amount))
         }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
