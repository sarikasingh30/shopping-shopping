import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext'

const ProductCard=()=>{
    const context = useContext(myContext)
    const { theme } = context
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: theme === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div class="h-1 w-20 rounded " style={{backgroundColor:theme==="dark"?"#3D0C11":"#538cfc"}}></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    
                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#B0A695' : '#F3EEEA', color: theme === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://fakeimg.pl/720x400/d9caca/734f4f?font=lobster" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: theme === 'dark' ? 'white' : '', }}>AssortiMart</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: theme === 'dark' ? 'white' : '', }}>Product Name</h1>
                                {/* <p className="leading-relaxed mb-3">sdrftghjksdfgthjxdcfvghbnj</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: theme === 'dark' ? 'white' : '' }}>₹ 5000</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-sm w-full  py-2" style={{backgroundColor:theme==="dark"?"#3D0C11":"#538cfc"}}>Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#B0A695' : '#F3EEEA', color: theme === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://fakeimg.pl/720x400/d9caca/734f4f?font=lobster" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: theme === 'dark' ? 'white' : '', }}>AssortiMart</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: theme === 'dark' ? 'white' : '', }}>Product Name</h1>
                                {/* <p className="leading-relaxed mb-3">sdrftghjksdfgthjxdcfvghbnj</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: theme === 'dark' ? 'white' : '' }}>₹ 5000</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-sm w-full  py-2" style={{backgroundColor:theme==="dark"?"#3D0C11":"#538cfc"}}>Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#B0A695' : '#F3EEEA', color: theme === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://fakeimg.pl/720x400/d9caca/734f4f?font=lobster" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: theme === 'dark' ? 'white' : '', }}>AssortiMart</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: theme === 'dark' ? 'white' : '', }}>Product Name</h1>
                                {/* <p className="leading-relaxed mb-3">sdrftghjksdfgthjxdcfvghbnj</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: theme === 'dark' ? 'white' : '' }}>₹ 5000</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-sm w-full  py-2" style={{backgroundColor:theme==="dark"?"#3D0C11":"#538cfc"}}>Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#B0A695' : '#F3EEEA', color: theme === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://fakeimg.pl/720x400/d9caca/734f4f?font=lobster" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: theme === 'dark' ? 'white' : '', }}>AssortiMart</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: theme === 'dark' ? 'white' : '', }}>Product Name</h1>
                                {/* <p className="leading-relaxed mb-3">sdrftghjksdfgthjxdcfvghbnj</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: theme === 'dark' ? 'white' : '' }}>₹ 5000</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white focus:ring-3 focus:ring-white font-medium rounded-lg text-sm w-full  py-2" style={{backgroundColor:theme==="dark"?"#3D0C11":"#538cfc"}}>Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    

                </div>

            </div>
        </section >

    )
}

export {ProductCard}