import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Cart from "../cart/Cart"
import {Dashboard} from "../admin/dashboard/Dashboard"
import Order from "../order/Order"
import NoPage from "../nopage/NoPage"
import { Login } from '../registration/Login'
import { SignUp } from '../registration/SignUp'
import { ProductInfo } from '../productInfo/ProductInfo'
import { AddProduct } from '../admin/page/AddProduct'
import { UpdateProduct } from '../admin/page/UpdateProduct'
import AllProducts from '../allproducts/AllProducts'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<ProtectedRoutes><Order/></ProtectedRoutes>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/addproduct" element={<ProtectedRoutesForAdmin><AddProduct/></ProtectedRoutesForAdmin>} />
        <Route path="/updateproduct" element={<ProtectedRoutesForAdmin> <UpdateProduct/></ProtectedRoutesForAdmin> } />
        <Route path="/dashboard" element={<ProtectedRoutesForAdmin> <Dashboard/></ProtectedRoutesForAdmin>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/*" element={<NoPage/>} />
    </Routes>
  )
}

export default MainRoutes

// user protected route
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// admin protected route
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin?.user.email === 'admin21@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}