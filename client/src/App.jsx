import React from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store/store";
import Success from './components/Success'
import Cancel from './components/Cancel'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products/:category" element={<ProductList />}></Route>
          <Route path="/product/:_id" element={<Product />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/cancel" element={<Cancel />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App