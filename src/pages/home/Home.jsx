import React,{useContext} from 'react'
import Layout from "../../components/layout/Layout"
import MainSection from "../../components/mainSection/MainSection"
import Filter from '../../components/filter/Filter'
import { ProductCard } from '../../components/productCard/ProductCard'
import { Track } from '../../components/dataTrack/Track'
import { Testimonial } from '../../components/testimonial/Testimonial'
import { Link } from 'react-router-dom'
import MyContext from '../../context/data/MyContext'
const Home = () => {
  const context = useContext(MyContext);
  const { theme} = context;
  return (
    <Layout>
      
      <MainSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className='px-5 py-2 mt-4 rounded-xl' style={{backgroundColor:theme==="dark" ? "rgb(59, 152, 245)":"rgb(250 204 21)",color:theme==="dark" ? "white":"black", fontWeight:"bold"}}>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home