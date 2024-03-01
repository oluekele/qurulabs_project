'use client'
import React, { useState } from 'react'
import Image from "next/image";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Building from '../../public/building.jpg'
import Logo from '../../public/logo.jpg'
import Property from '../../public/property.jpeg'
import Land from '../../public/land.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import ImageSlide  from '../../data/ImageSlide'



const Account = () => {
  const [isActive, setIsActive] = useState(false)
  const [isActive2, setIsActive2] = useState(false)

  const images = ImageSlide;

  const delay = 4500;
  
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 :prevIndex + 1
        ),
      delay
    );

  return () => {
    resetTimeout();
  };
  }, [index]);
  

  return (
    <div className='flex items-center w-[90%] mx-auto overflow-hidden mt-10 relative'>
      <div className='w-[50%] '>
        <h3 className='w-[90%] mx-auto absolute top-0 left-8'>Create Account</h3>
        <Image src={Logo} alt="vercel" width={60} height={50} className='mt-[-80px] ml-8 mb-10 rounded-[50%]'/>
        <div className='w-[90%] mx-auto'>
          
          <form className=' flex flex-col items-center '>
            <input type='text' placeholder='Username' className='border-[1px] rounded-lg p-2 w-full outline-none'/>
            <input type='email' placeholder='Email' className='border-[1px] rounded-lg p-2 w-full my-2 outline-none'/>
            <input type='date' placeholder='Email' className='border-[1px] rounded-lg p-2 w-full my-2 outline-none'/>
            <div className='relative w-full'>
              <input type='password' placeholder='Password' className='border-[1px] rounded-lg p-2 w-full relative outline-none' id='password'/>
              { !isActive? <FaEyeSlash size={20} className=" cursor-pointer absolute top-3 right-5" onClick={()=>{
                  setIsActive(!isActive);
                  
                  console.log(document.getElementById('password').getAttribute)}}/>:
                <FaEye size={20} className=" cursor-pointer absolute top-3 right-5" onClick={()=>{
                  setIsActive(!isActive)
                  
                }}/>
              }
            </div>
            <div className='relative w-full mt-2'>
              <input type='password' placeholder='Confirm Password' className='border-[1px] rounded-lg p-2 w-full relative outline-none'/>
              { !isActive2? <FaEyeSlash size={20} className=" cursor-pointer absolute top-3 right-5" onClick={()=>{
                  setIsActive2(!isActive2);
                  
                  console.log('clicked')}}/>:
                <FaEye size={20} className=" cursor-pointer absolute top-3 right-5" onClick={()=>{
                  setIsActive2(!isActive2)
                  
                }}/>
              }
            </div>
            <button type='submit' className='bg-[#122c72] text-white py-2 px-6 my-2 rounded-lg'>Submit</button>          
          </form>
        </div>
      </div>
      <div className='w-[50%]'>
        <div className='overflow-hidden flex items-center'>
          
          {/* <Carousel autoplay>
            <div className='w-full relative'>
             <h3 className='w-[90%] mx-auto absolute top-0 left-[50%] '>Building</h3>
              <Image src={Building} alt="vercel" width={900} height={900} className='w-full h-full'/>
            </div>
            <div className='w-full relative' >
              <h3 className='w-[90%] mx-auto absolute top-0 left-[50%] '>Properties</h3>
              <Image src={Property} alt="vercel" width={900} height={900} className='w-full h-full'/>
            </div>
            <div className='w-full relative'>
              <h3 className='w-[90%] mx-auto absolute top-0 left-[50%] '>Lands</h3>
              <Image src={Land} alt="vercel" width={100} height={900} className='w-full h-full'/>
            </div>
          </Carousel> */}
          <div className="slideshow w-full">
            <div className="slideshowSlider " style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {images.map(item =>(
                <>
                  <div className="slide">
                    <img src={item.img} alt="vercel"  className='w-full h-[500px] rounded-[16px]'/>
                  </div>
                  
                </>
              ))}
              
            </div>
            <div className="slideshowDots">
              {images.map((_, idx) => (
                <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {
                  setIndex(idx);
                }}></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Account