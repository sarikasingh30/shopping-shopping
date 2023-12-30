import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(MyContext)
  const { theme, loading, order } = context
  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ?
        (<>
          <div className="pt-10 w-95% m-auto">
            {
              order.filter(obj => obj.userid === userid).map((order) => {
                return (
                  <div className="w-95% m-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-auto px-6 py-6 md:space-x-6 xl:px-0">
                    {
                      order.cartItems.map((item) => {
                        return (
                          <div className="rounded-lg">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:justify-start sm:flex sm:justify-start text-black" style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}>
                              <img src={item.imageUrl} alt="product-img" className="w-full rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-black">{item.title}</h2>
                                  <p className="mt-1 text-xs text-black" >{item.description}</p>
                                  <p className="mt-1 text-xs text-black font-bold" >{`₹ ${item.price}`}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </>)
        :
        (
          <div className="mt-5 mx-auto max-w-5xl justify-center px-2 md:flex md:space-x-6 xl:px-0 mb-5">
            <div className="m-auto w-90">
              <img 
                src="https://charatoon.com/photo/thum/3775.png"
                alt="No Order"
              />
            </div>
            <div className="p-5 flex-col align-center justify-center"><h2 className="mb-10 text-center text-4xl font-bold">No Order Found</h2>
            <button  type="button"
                        onClick={()=>window.location.href="/allproducts"}
                        className="focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-sm w-full py-2 mb-5"
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#3D0C11" : "#538cfc",
                        }}>Please Order</button></div>
          </div>
        )

      }
    </Layout>
  )
}

export default Order