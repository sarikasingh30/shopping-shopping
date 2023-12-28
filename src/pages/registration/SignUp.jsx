import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext'

function SignUp() {
    const context = useContext(MyContext)
    const {theme} = context
    return (
        <Layout>
        <div className=' flex justify-center items-center h-screen'>
            <div className='px-10 py-10 rounded-xl ' style={{ backgroundColor: theme === 'dark' ? '#3D0C11' : '#538cfc'}}>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                        style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className='mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-gray outline-none'
                        style={{ backgroundColor: theme === 'dark' ? '#EBE3D5' : ''}}
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3 rounded-lg' style={{backgroundColor:theme==="dark" ? "rgb(59, 152, 245)":"rgb(250 204 21)"}}>
                    <button
                        className='w-full text-white font-bold  px-2 py-2 rounded-lg' style={{color:theme==="dark"?"white":"black"}}>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account ? <Link className='font-bold' style={{color:theme==="dark" ? "rgb(59, 152, 245)":"rgb(250 204 21)"}} to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export {SignUp}