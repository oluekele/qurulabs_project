import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Logo from '../public/logo.jpg'
import Image from "next/image";
import { GrMenu } from "react-icons/gr";

const Header = () => {
  return (
    <div className='border-b-[0.5px] fixed top-0 z-50 bg-white w-[100%]'>
      <div className='flex items-center justify-between w-[90%] mx-auto p-2'>
        <div className='flex items-center gap-8 '>
        <GrMenu size={20} className='md:hidden'/>
          <Image src={Logo} alt='logo' className='lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] rounded-full'/>
        </div>
        <div className='flex items-center gap-4'>
          <div className='md:w-[40px] w-[25px] h-[25px] md:h-[40px] rounded-full bg-gray-200 relative flex items-center justify-center cursor-pointer'>
            <IoIosNotifications size={20} className='p-1 lg:p-0'/>
            <GoDotFill  className='absolute text-[orange] top-0 -right-0 text-[10px] md:text-[20px]'/>
          </div>
          <div className='flex items-center gap-4'>
            <div className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-full bg-[#ffa200] relative flex items-center justify-center font-bold text-white text-[14px] md:text-[18px]'>
              LC
            </div>
            <div className='text-[8px] md:text-[18px]'>
              <h3>Donatusglohous@...</h3>
              <p>Admin</p>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header