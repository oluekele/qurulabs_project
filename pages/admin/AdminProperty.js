import React from 'react'
import Header from '@/components/header'
import AdminLeftNavbar from '@/components/AdminLeftNavbar';
import Link from 'next/link'
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { MdImage } from "react-icons/md";

const AdminProperty = () => {
  return (
    <div className='mt-[70px] relative'>
      <Header />
      <div className='flex mt-10 gap-8 md:w-[75%] w-[90%] max-w-[1200px]'>
        <AdminLeftNavbar />
        <div className='w-[95%] mx-auto ml-[250px] pl-9 lg:border-l-[0.1px]'>
          
          <div className='w-full mt-10'>
            <h2 className='text-[25px] font-bold'>List a Property</h2>
            <p className='text-[12px] text-gray-300'>List properties in a snap Quick, east, and effective!</p>
          </div>
          <div className='w-full my-5'>
            <label>Property Name</label>
            <input type='text' placeholder='Enter Name Of Property' className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2 mb-5'/>
            <label>Property Description</label>
            <input type='text' placeholder='Describe The Property' className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2'/>
          </div>
          <div className='flex items-center justify-between w-full'>
            <div className='w-[25%]'>
              <label>Location</label>
              <select className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2'>
                <option value='Country' className='px-3 rounded-lg' selected>Country</option>
              </select>
            </div>
            <div className='w-[25%]'>
              <label>Location</label>
              <select className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2'>
                <option value='Country' className='px-3' selected>Country</option>
              </select>
            </div>
            <div className='w-[25%]'>
              <label>Location</label>
              <select className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2'>
                <option value='Country' className='px-3' selected>Country</option>
              </select>
            </div>
            
          </div>
          <div className='w-full my-5'>
            <label>Address</label>
            <input type='text' placeholder='Enter Your Address' className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2 mb-5'/>
            <label>Coordinates (Long/Lat)</label>
            <input type='text' placeholder='Enter The Coordinates' className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2'/>
            <label>Property Cost Of Property</label>
            <input type='text' placeholder='Enter The Price Of Property' className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2'/>
          </div>
          <div className='border-[0.5px] rounded-md p-4 w-full'>
            <h3>Upload a Passport Photograph</h3>
            <div className='border-[0.5px] border-dotted rounded-sm mt-6 py-[50px] flex items-center justify-center mb-10'>
              <div className='flex items-center gap-4'>
                <FiUpload size={20} className='cursor-pointer'/>
                <p className='text-[10px]'>Drop your file here or <span className='text-[#ffa200] cursor-pointer'>browse</span></p>
              </div>

            </div>
            <div className='bg-zinc-100 py-2 px-3 rounded-md'>
              <div className='flex items-center gap-6 text-[10px] w-full'>
                <div className='bg-white w-[55px] h-[55px] rounded-full items-center justify-center  p-2'>
                  <MdImage size={40} />
                </div>
                <div className='w-full'>
                  <h3>Passport Photograph.png</h3>
                  <p className='flex items-center justify-between w-full text'>443kb·4 seconds left <span>34%</span> </p>
                  
                </div>
                
              </div>
              <div className='w-full h-[10px] bg-[#fff] rounded-full relative mt-2' id='loading'></div>
            </div>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default AdminProperty