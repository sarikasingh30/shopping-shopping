import React from 'react'
import Layout from"../../components/layout/Layout"
import MainSection from "../../components/mainSection/MainSection"
import Filter from '../../components/filter/Filter'
import { ProductCard } from '../../components/productCard/ProductCard'
import { Track } from '../../components/dataTrack/Track'
import { Testimonial } from '../../components/testimonial/Testimonial'
const Home = () => {
  return (
    <Layout>
      <MainSection />
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home