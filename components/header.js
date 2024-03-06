import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Logo from '../public/logo.jpg'
import Image from "next/image";

const Header = () => {
  return (
    <div className='border-b-[0.5px] fixed top-0 z-50 bg-white w-[100%]'>
      <div className='flex items-center justify-between w-[90%] mx-auto p-2'>
        <div>
          <Image src={Logo} alt='logo' className='w-[60px] h-[60px] rounded-full'/>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-[40px] h-[40px] rounded-full bg-gray-200 relative flex items-center justify-center cursor-pointer'>
            <IoIosNotifications size={20}/>
            <GoDotFill size={15} className='absolute text-[orange] top-0 -right-1 '/>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#ffa200] relative flex items-center justify-center font-bold text-white'>
              LC
            </div>
            <div>
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