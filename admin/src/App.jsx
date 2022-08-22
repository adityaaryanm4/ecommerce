import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { productInputs, userInputs } from './formSource'
import "./dark.scss"
import { useSelector } from "react-redux"
import Login from './pages/login/Login'

const App = () => {

  const { darkMode } = useSelector(state => state.mode)

  return (

    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users" >
              <Route index element={<List path="users"/>} />
              <Route path="new" element={<New id="user" inputs={userInputs} title="Add New User" />} />
              <Route path=":id" element={<Single path="users" />} />
            </Route>
            <Route path="products" >
              <Route index element={<List path="products"/>} />
              <Route path="new" element={<New id="product" inputs={productInputs} title="Add New Product" />} />
              <Route path=":id" element={<Single path="products" />} />
            </Route>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App