import React from 'react'
import homeImage from "../../assets/homeMain.jpg"

const HeroSection = () => {
  return (
    <div className='w-full h-50 bg-[#FE953B]'>
      <img className='w-fit h-50 m-auto' src= {homeImage} alt="" />
    </div>
  )
}

export default HeroSection