import React,{useContext, useState,Fragment} from 'react'
import MyContext from '../../context/data/MyContext'
import {Link} from "react-router-dom"
import { Dialog, Transition } from '@headlessui/react'

import { FiSun, FiMoon } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const context=useContext(MyContext)
  const {theme,toggleTheme}=context
  const[open,setOpen]=useState(false)
  const user= JSON.parse(localStorage.getItem("user"))
  const cartItems=useSelector(state=>state.cart)
  const handleLogout=()=>{
    localStorage.clear("user")
    window.location.href="/login"
  }
  return (
    <div className="sticky top-0 z-50">
      
      {/* Small Screen */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor:theme === 'dark' ? '#240407' : '#538cfc', color:theme === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-black" style={{color:theme === 'dark' ? 'white' : '', }}
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close Menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="font-medium text-gray-900 " style={{ color: theme === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user? <div className="flow-root">
                    <Link to={'/order'} style={{ color: theme === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div>:""}

                  {(user?.user?.email==="admin21@gmail.com")? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: theme === 'dark' ? 'white' : '', }}>
                      Admin
                    </Link>
                  </div>:""}

                  {user ? <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" onClick={handleLogout} style={{ color: theme === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div>:""}

                  {/* <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov" />                                        </Link>
                  </div> */}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: theme === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>










      {/* fullScreen  */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-yellow-400 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: theme === 'dark' ? 'rgb(59, 152, 245)' : '', color: theme === 'dark' ? 'white' : 'black', }}>
          Surprise Gifts on Orders over ₹200
        </p>

        <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: theme === 'dark' ? '#3D0C11' : '#538cfc', color: theme === 'dark' ? '#F3EEEA' : '' }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-black-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: theme === 'dark' ? '#3D0C11' : '#538cfc', color: theme === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Brand Name */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: theme === 'dark' ? 'white' : '', }}>AssortiMart</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-black " style={{ color: theme === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  {(user?.user?.email!="admin21@gmail.com")? <Link to={'/order'} className="text-sm font-medium text-black " style={{ color: theme === 'dark' ? 'white' : '', }}>
                    Order
                  </Link>:""}

                  {(user?.user?.email==="admin21@gmail.com")? <Link to={'/dashboard'} className="text-sm font-medium text-black " style={{ color: theme === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link>:""}
                  
                  {user ? <div className="flow-root">
                  <a className="text-sm font-medium text-black cursor-pointer" onClick={handleLogout} style={{ color: theme === 'dark' ? 'white' : '', }}>
                    Logout
                  </a>
                  </div>:""}
                  
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-Black ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-6 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-Black ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                      alt="Dan_Abromov" />
                  </a>
                </div> */}

                {/* Change the theme */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleTheme}>
                    {/* <MdDarktheme size={35} style={{ color: theme === 'dark' ? 'white' : '' }} /> */}
                    {theme === 'light' ?
                      (<FiMoon className='' size={20} />
                      ) : 'dark' ?
                        (<FiSun size={20} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={(user)?'/cart':'/login'} className="group -m-2 flex items-center p-2" style={{ color: theme === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-black group-" style={{ color: theme === 'dark' ? 'white' : '', }}>{cartItems?.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar