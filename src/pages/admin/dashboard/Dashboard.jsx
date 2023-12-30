
import React, { useContext } from 'react'

import {FaUserCircle} from 'react-icons/fa';
import MyContext from '../../../context/data/MyContext';
import Layout from '../../../components/layout/Layout';
import {DashboardTab} from "../dashboard/DashboardTab"
function Dashboard() {
    const context = useContext(MyContext)
    const {theme,products,order,users} = context
  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10">
                <div className="flex justify-around flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border-gray-300 px-4 py-3 rounded-xl"style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}>
                            <div className="w-12 h-12 mt-3 mb-1 inline-block" viewBox="0 0 24 24" style={{ color: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>
                                <FaUserCircle size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1">{products.length}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border-gray-300 px-4 py-3 rounded-xl"style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}>
                            <div className="w-12 h-12 mt-3 mb-1 inline-block" viewBox="0 0 24 24" style={{ color: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>
                                <FaUserCircle size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1">{order.length}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className=" border-2 hover:shadow-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border-gray-300 px-4 py-3 rounded-xl"style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}>
                            <div className="w-12 h-12 mt-3 mb-1 inline-block" viewBox="0 0 24 24" style={{ color: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>
                                <FaUserCircle size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1">{users.length}</h2>
                            <p className=" text-purple-500  font-bold" style={{ color: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>Total Users</p>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <DashboardTab/>
        </section>
    </Layout>
  )
}

export {Dashboard}