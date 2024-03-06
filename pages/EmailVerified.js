import React from 'react'
import Image from 'next/image';
import { RiMessage3Line } from "react-icons/ri";
import { PiFlowerTulipBold } from "react-icons/pi";


const EmailVerified = () => {
  return (
    <div className='bg-zinc-300 w-full h-[100vh] overflow-hidden '>
      <div className='flex items-center justify-between w-[90%] py-4 mx-auto'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/008/124/777/small_2x/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg' alt='Logo'  className='rounded-full w-[40px] h-[40px] opacity-[20%]'/>
      </div>
      <div className='w-full mt-[150px] flex items-center justify-center text-[14px]'>
        <div className='w-[300px] flex flex-col items-center justify-center overflow-hidden'>
          <RiMessage3Line size={40} className='opacity-[20%]'/>
          
          <div className='bg-white flex flex-col items-center justify-center rounded-[8px]  pt-10 mt-5'>
          <PiFlowerTulipBold size={80} className='text-[green]'/>
            
            <h2 className='text-[25px] text-center py-4 font-bold '>Email Verification Successful</h2>
            <div className='py-5 font-bold text-[#ffa200] text-center text-[20px] bg-gray-100 w-full'>
              PROCEED TO KYC
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default EmailVerified