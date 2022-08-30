import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { productInputs, userInputs } from './formSource'
import Login from './pages/login/Login'
import "./dark.scss"
import PrivateRoutes from './components/privateRoutes/PrivateRoutes'
import { useSelector } from 'react-redux'

const App = () => {
  const { darkMode } = useSelector(state => state.mode)

  return (

    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" >
            <Route index element={<PrivateRoutes> <Home /> </PrivateRoutes>} />
            <Route path="users" >
              <Route index element={<PrivateRoutes> <List path="users" /></PrivateRoutes>} />
              <Route path="new" element={<PrivateRoutes><New id="user" inputs={userInputs} title="Add New User" /></PrivateRoutes>} />
              <Route path=":id" element={<PrivateRoutes><Single path="users" /></PrivateRoutes>} />
            </Route>
            <Route path="products" >
              <Route index element={<PrivateRoutes><List path="products" /></PrivateRoutes>} />
              <Route path="new" element={<PrivateRoutes><New id="product" inputs={productInputs} title="Add New Product" /></PrivateRoutes>} />
              <Route path=":id" element={<PrivateRoutes><Single path="products" /></PrivateRoutes>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App