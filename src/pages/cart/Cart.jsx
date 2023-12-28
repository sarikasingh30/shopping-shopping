import React,{useContext} from 'react'
import Layout from "../../components/layout/Layout"
import MyContext from '../../context/data/MyContext'
import { Modal } from '../../components/modal/Modal'

const Cart = () => {
  const context = useContext(MyContext)
  const {theme} = context
  return (
    <Layout>
       <div className="h-screen pt-5 " style={{ color: theme === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            <div className="justify-between mb-6 rounded-lg border shadow-md drop-shadow-xl p-6  sm:flex  sm:justify-start" style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : '', color: theme === 'dark' ? 'black' : 'black', }}>
              <img src="https://fakeimg.pl/400x400/d9caca/734f4f?font=lobster" alt="product-image" className="w-full rounded-lg sm:w-40" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-black" >Product Name</h2>
                  <h2 className="text-sm  text-black">Product Description</h2>
                  <p className="mt-1 text-xs font-semibold text-black">₹100</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                </div>
              </div>
            </div>

          </div>

          <div className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3" style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : '', color: theme === 'dark' ? 'black' : 'black', }}>
            <div className="mb-2 flex justify-between">
              <p className="text-black">Subtotal</p>
              <p className="text-black">₹100</p>
            </div>
            <div className="flex justify-between">
              <p className="text-black">Shipping</p>
              <p className="text-black">₹20</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold  text-black">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold text-black">₹200</p>
              </div>
            </div>
            <Modal/>
            {/* <button
              type="button"
              className="w-full py-2 text-center rounded-lg text-white font-bold "
              style={{backgroundColor:theme==="dark" ? "rgb(59, 152, 245)":"rgb(250 204 21)", color:theme==="dark"?"white":"black"}}
            >
              Buy Now
            </button> */}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Cart