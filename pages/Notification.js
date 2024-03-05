import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { GoDotFill } from "react-icons/go";


const Notification = () => {
  return (
    <div className='shadow rounded-md p-4 w-[500px] mt-[100px]'>
      <h3 className='text-[18px] font-medium mb-3'>Notifications</h3>
      <p className='mb-5 text-[14px] text-gray-300'>Latest update</p>
      <div className='flex items-center gap-4 w-full my-4'>
        <div className='w-[35px] h-[30px] rounded-full bg-[#00800034] flex items-center justify-center'>
          <IoMdCheckmark size={20} className='bg-[#00800052] text-[green] rounded-full p-1'/>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div>
            <p className='text-[12px]'>New property matching your preferences listed in Lagos.</p>
            <p className='text-[8px]'>Today: <span>09:00am</span></p>
          </div>
          <GoDotFill size={20} className='text-[#e63452]'/>
        </div>
      </div>
      <div className='flex items-center gap-4 my-4 w-full'>
        <div className='w-[35px] h-[30px] rounded-full bg-[#00800034] flex items-center justify-center'>
          <IoMdCheckmark size={20} className='bg-[#00800052] text-[green] rounded-full p-1'/>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div>
            <p className='text-[12px]'>New property matching your preferences listed in Lagos.</p>
            <p className='text-[8px]'>Today: <span>09:00am</span></p>
          </div>
          <button className='bg-gray-100 rounded-full w-[70px] p-2 text-[12px]'>View</button>
        </div>
      </div>
      <div className='flex items-center gap-4 w-full my-4'>
        <div className='w-[35px] h-[30px] rounded-full bg-[#00800034] flex items-center justify-center'>
          <IoMdCheckmark size={20} className='bg-[#00800052] text-[green] rounded-full p-1'/>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div>
            <p className='text-[12px]'>Exclusive deals on properties. Limited time only!</p>
            <p className='text-[8px]'>Today: <span>09:00am</span></p>
          </div>
          <GoDotFill size={20} className='text-gray-300'/>
        </div>
      </div>
      <div className='flex items-center gap-4 w-full my-4'>
        <div className='w-[35px] h-[30px] rounded-full bg-[#00800034] flex items-center justify-center'>
          <IoMdCheckmark size={20} className='bg-[#00800052] text-[green] rounded-full p-1'/>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div>
            <p className='text-[12px]'>Complete The Latest 20% Of Your Property Payment.</p>
            <p className='text-[8px]'>Today: <span>09:00am</span></p>
          </div>
          <GoDotFill size={20} className='text-[#e63452]'/>
        </div>
      </div>
      <button className='bg-gray-100 rounded-full w-full p-2 text-[18px]'>View All</button>
    </div>
  )
}

export default Notification