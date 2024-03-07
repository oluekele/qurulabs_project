'use client'
import React, { useState } from 'react'
import Image from "next/image";
import { FaEyeSlash, FaEnvelopeO } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Building from '../../public/building.jpg'
import Logo from '../../public/logo.jpg'
import Property from '../../public/property.jpeg'
import Land from '../../public/land.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import ImageSlide  from '../../data/ImageSlide'
import Img from '@/assets/Group 8660.png'
import Img2 from '@/assets/Group 8661.png'
import Img3 from '@/assets/Rectangle 3968.png'


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
          prevIndex === images.length - 1 ? 0 :prevIndex +1
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
        <Image src={Logo} alt="vercel" width={50} height={60} className='  rounded-[50%] mb-2 w-[50px] h-[50px]'/>
        <div className='w-[80%] mx-auto'>
          <h3 className='w-[90%] font-medium text-[20px]'>Create Account</h3>
          <p className='text-[14px] mb-4 text-gray-200'>Provide details to create an account</p>
          <div className='w-[95%] '>
            
            <form className=' flex flex-col items-center '>
              <div className='mb-6 text-gray-300'>
                <input type='email' placeholder= "&#x1F4E7; Continue with Email" className='border-[1px] rounded-lg p-2 w-full outline-none text-center'/>
                <input type='text' placeholder='&#x1F57B; Continue with Phone' className='border-[1px] rounded-lg p-2 w-full my-2 outline-none text-center'/>
              </div>
              <div className='w-full relative border-b-[2px] border-gray-400'>
                
                <span className='absolute top-[-10px] bg-white px-2 left-[45%]'>OR</span>
              </div>
              <div className='mt-6 w-full'>
                <label>Email Address</label>
                <input type='email' placeholder='Enter Your Email Address' className='border-[1px] rounded-lg px-4 py-2 w-full my-2 outline-none'/>
                <label>Password</label>
                <div className='relative w-full'>
                  <input type='password' placeholder='Password' className='border-[1px] rounded-lg px-4 py-2 w-full relative outline-none' id='password'/>
                  { !isActive? <FaEyeSlash size={20} className=" cursor-pointer absolute top-3 right-5" onClick={()=>{
                      setIsActive(!isActive);
                      
                        console.log(document.getElementById('password').getAttribute)}}/>:
                      <FaEye size={20} className=" cursor-pointer absolute top-3 right-5" onClick={()=>{
                        setIsActive(!isActive)
                      
                    }}/>
                  }
                </div>
              </div>
              
             
              <div className='flex items-center gap-2 w-full mt-2'>
                <input type='checkbox' className='w-[15px] h-[15px]'/>
                <p>I Accept Win Reality Terms And Condition</p>
              </div>
              <button type='submit' className='bg-[orange] w-full text-white py-2 px-6 my-2 rounded-lg'>Create Account</button>  
              <p>Already have an account? <span className='text-[orange] cursor-pointer'>Login</span></p>        
            </form>
          </div>
        </div>
      </div>
      <div className='w-[50%]'>
        <div className='overflow-hidden flex items-center'>
        
          <div className="slideshow w-full">
            <div className="slideshowSlider " style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {/* {images.map(item =>(
                <>
                  <div className="slide">
                    <Image src={item.img} alt="vercel"   width={300} height={300} className='w-full h-[500px] rounded-[16px]'/>
                  </div>
                  
                </>
              ))} */}
              <div className="slide">
                    <Image src={Img} alt="vercel"   width={300} height={300} className='w-full h-[500px] rounded-[16px]'/>
                </div>
              <div className="slide">
                    <Image src={Img2} alt="vercel"   width={300} height={300} className='w-full h-[500px] rounded-[16px]'/>
                </div>
              <div className="slide">
                    <Image src={Img3} alt="vercel"   width={300} height={300} className='w-full h-[500px] rounded-[16px]'/>
                </div>
              
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