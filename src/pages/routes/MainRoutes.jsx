import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Cart from "../cart/Cart"
import {Dashboard} from "../admin/dashboard/Dashboard"
import Order from "../order/Order"
import NoPage from "../nopage/NoPage"
import { Login } from '../registration/Login'
import { SignUp } from '../registration/SignUp'
import { ProductInfo } from '../productInfo/ProductInfo'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/*" element={<NoPage/>} />
    </Routes>
  )
}

export default MainRoutes