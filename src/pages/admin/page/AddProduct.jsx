import React,{useContext} from 'react'
import Layout from '../../../components/layout/Layout'
import MyContext from '../../../context/data/MyContext'
export const AddProduct = () => {
    const context = useContext(MyContext)
    const {theme,setProduct,product,addProduct} = context
  return (
    <Layout>
           <div className=' flex justify-center items-center h-screen'>
                <div className='px-10 py-10 rounded-xl ' style={{ backgroundColor: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            value={product.title}
                            onChange={(e)=>setProduct({...product, title:e.target.value})}
                            className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                            style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            value={product.price}
                            onChange={(e)=>setProduct({...product, price:e.target.value})}
                            className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                            style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            value={product.imageUrl}
                            onChange={(e)=>setProduct({...product, imageUrl:e.target.value})}
                            className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                            style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            value={product.category}
                            onChange={(e)=>setProduct({...product, category:e.target.value})}
                            className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                            style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="8" name='description'
                       value={product.description}
                       onChange={(e)=>setProduct({...product, description:e.target.value})}
                            className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                            style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                            placeholder='Product Description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3 rounded-lg' style={{backgroundColor:theme==="dark" ? "rgb(59, 152, 245)":"rgb(250 204 21)"}}>
                        <button
                        onClick={addProduct}
                            className='w-full text-black font-bold  px-2 py-2 rounded-lg' style={{color:theme==="dark"?"white":"black"}}>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
    </Layout>
  )
}
