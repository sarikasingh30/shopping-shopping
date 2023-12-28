import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext'

function Testimonial() {
    const context = useContext(myContext)
    const { theme } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: theme === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: theme === 'dark' ? 'white' : '' }}>What our <span style={{ color: theme === "dark" ? "#3D0C11" : "#538cfc" }}>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://banner2.cleanpng.com/20190227/zox/kisspng-clip-art-computer-icons-openclipart-user-vector-gr-my-svg-png-icon-free-download-14-352-onlinewe-5c7704f7cff2b1.3948772115513039278518.jpg" />
                                <p style={{ color: theme === 'dark' ? 'white' : '' }} className="leading-relaxed">My experience shopping here was delightful. The diverse selection of products amazed me, and the support team was incredibly helpful in assisting me to find the perfect item. The package arrived promptly, and the quality exceeded my expectations. I'll definitely return for my future purchases.</p>
                                <span className="inline-block h-1 w-10 rounded mt-6 mb-4" style={{ backgroundColor: theme === "dark" ? "#3D0C11" : "#538cfc" }} />
                                <h2 style={{ color: theme === "dark" ? "#3D0C11" : "#538cfc" }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Radha Rani</h2>

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://banner2.cleanpng.com/20190227/zox/kisspng-clip-art-computer-icons-openclipart-user-vector-gr-my-svg-png-icon-free-download-14-352-onlinewe-5c7704f7cff2b1.3948772115513039278518.jpg" />
                                <p style={{ color: theme === 'dark' ? 'white' : '' }} className="leading-relaxed">Shopping on this website was an absolute joy! The interface was intuitive, making navigation a breeze. The assortment of high-quality products was impressive, and the swift delivery made it even better. I'm thrilled with my purchase and would recommend it to anyone seeking a seamless shopping experience.</p>
                                <span className="inline-block h-1 w-10 rounded mt-6 mb-4" style={{ backgroundColor: theme === "dark" ? "#3D0C11" : "#538cfc" }} />
                                <h2 style={{ color: theme === "dark" ? "#3D0C11" : "#538cfc" }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Madhav Kumar</h2>

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://banner2.cleanpng.com/20190227/zox/kisspng-clip-art-computer-icons-openclipart-user-vector-gr-my-svg-png-icon-free-download-14-352-onlinewe-5c7704f7cff2b1.3948772115513039278518.jpg" />
                                <p style={{ color: theme === 'dark' ? 'white' : '' }} className="leading-relaxed">This shopping destination is a hidden gem! I stumbled upon unique items that I hadn't found anywhere else. The customer service was exceptional, answering all my queries promptly. The delivery was prompt, and the items were exactly as described. I'm genuinely pleased with my experience.</p>
                                <span className="inline-block h-1 w-10 rounded mt-6 mb-4" style={{ backgroundColor: theme === "dark" ? "#3D0C11" : "#538cfc" }} />
                                <h2 style={{ color: theme === "dark" ? "#3D0C11" : "#538cfc" }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">John Kim</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { Testimonial }