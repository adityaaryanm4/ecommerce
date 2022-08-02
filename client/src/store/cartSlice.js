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
            state.cartTotal = state.cartTotal + (action.payload.price * action.payload.amount)
        },
        removeProduct(state, action) { }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
