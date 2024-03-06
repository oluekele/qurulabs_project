import React from 'react'
import Image from 'next/image';
import { RiMessage3Line } from "react-icons/ri";


const CheckBox = () => {
  return (
    <div>
      <div className='flex items-center justify-between w-[90%] py-4 mx-auto'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/008/124/777/small_2x/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg' alt='Logo'  className='rounded-full w-[40px] h-[40px]'/>
      </div>
      <div className='w-full h-full flex items-center justify-center text-[14px]'>
        <div className='w-[300px] flex flex-col items-center justify-center'>
          <RiMessage3Line size={40}/>
          <h2 className='text-[35px] font-medium text-center mt-4'>Check Your Inbox</h2>
          <p className='text-center text-gray-400 mt-[-5px]'>We&#x2019;ve sent a one time password to newProject@gmail.com</p>
          <div className='flex items-center gap-5 mt-4 text-[16px]'>
            <input type='text' className='p-3 rounded-full border-[0.5px] outline-[0.5px] outline-[#f1a706] w-[50px] h-[50px]'/>
            <input type='text' className='p-3 rounded-full border-[0.5px] outline-[0.5px] outline-[#f1a706] w-[50px] h-[50px]'/>
            <input type='text' className='p-3 rounded-full border-[0.5px] outline-[0.5px] outline-[#f1a706] w-[50px] h-[50px]'/>
            <input type='text' className='p-3 rounded-full border-[0.5px] outline-[0.5px] outline-[#f1a706] w-[50px] h-[50px]'/>
          </div>
          <button className='w-full p-3 text-white bg-[#ffa200] rounded-full mt-4 '>
            Verify
          </button>
          <p className='mt-2 font-medium'>Didn&#x2019;t receive a code? <span className='text-[#ffa200] font-medium cursor-pointer'>Resend Code</span></p>
        </div>

      </div>
    </div>
  )
}

export default CheckBox