import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { newProducts, newUsers } from './formSource'
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
              <Route index element={<List />} />
              <Route path="new" element={<New newType={newUsers} title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="products" >
              <Route index element={<List />} />
              <Route path="new" element={<New newType={newProducts} title="Add New Product" />} />
              <Route path=":productId" element={<Single />} />
            </Route>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App