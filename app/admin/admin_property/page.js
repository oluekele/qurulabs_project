'use client'
import React, { useState } from 'react'
import Header from '@/components/header'
import AdminLeftNavbar from '@/components/AdminLeftNavbar';
import Link from 'next/link'
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdImage } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import CompoundData from '@/data/CompoundData'
import HallData from '@/data/HallData'
import AddAmenities from '@/components/AddAmenities'
import { PiVideoFill } from "react-icons/pi";

const AdminProperty = () => {
  const compound = CompoundData
  const hall = HallData

  const [addAmenities, setAddAmenities] = useState(false)

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
            <input type='text' placeholder='Enter The Coordinates' className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none my-2'/>
            <label >Property Cost Of Property</label>
            <input type='text' placeholder='Enter The Price Of Property' className='py-3 px-4 w-full border-[0.2px] rounded-full outline-none mt-2'/>
          </div>

          <div className='border-[0.5px] rounded-lg p-4 w-full  mt-10'>
            <h3>Upload Featured Property Image</h3>
            <div className='border-[0.5px] border-dotted rounded-sm mt-6 py-[50px] flex items-center justify-center mb-10'>
              <div className='flex items-center gap-4'>
                <FiUpload size={20} className='cursor-pointer'/>
                <p className='text-[10px]'>Drop your file here or <span className='text-[#ff9b12] cursor-pointer'>browse</span></p>
              </div>

            </div>
            <div className='bg-zinc-100 py-2 px-3 rounded-md'>
              <div className='flex items-center gap-6 text-[10px] w-full'>
                <div className='bg-white w-[55px] h-[55px] rounded-full items-center justify-center  p-2'>
                  <MdImage size={40} />
                </div>
                <div className='w-full'>
                  <h3>Property Image.png</h3>
                  <p className='flex items-center justify-between w-full text'>443kb·4 seconds left <span>34%</span> </p>
                  
                </div>
                
              </div>
              <div className='w-full h-[8px] bg-[#fff] rounded-full relative mt-2' id='loading'></div>
            </div>
          </div>

          <div className='border-[0.5px] rounded-lg p-4 w-full  mb-10'>
            <h3>Upload a Property Layout</h3>
            <div className='border-[0.5px] border-dotted rounded-sm mt-6 py-[50px] flex items-center justify-center mb-10'>
              <div className='flex items-center gap-4'>
                <FiUpload size={20} className='cursor-pointer'/>
                <p className='text-[10px]'>Drop your file here or <span className='text-[#ff9b12] cursor-pointer'>browse</span></p>
              </div>

            </div>
            <div className='bg-zinc-100 py-2 px-3 rounded-md'>
              <div className='flex items-center gap-6 text-[10px] w-full'>
                <div className='bg-white w-[55px] h-[55px] rounded-full items-center justify-center  p-2'>
                  <MdImage size={40} />
                </div>
                <div className='w-full'>
                  <h3>Property Layout.png</h3>
                  <p className='flex items-center justify-between w-full text'>443kb·4 seconds left <span>34%</span> </p>
                  
                </div>
                
              </div>
              <div className='w-full h-[8px] bg-[#fff] rounded-full relative mt-2' id='loading'></div>
            </div>
          </div>

          <div className='border-[0.5px] rounded-lg p-4 w-full  my-5'>
            <h3>Upload a Property Video</h3>
            <div className='border-[0.5px] border-dotted rounded-sm mt-6 py-[50px] flex items-center justify-center mb-10'>
              <div className='flex items-center gap-4'>
                <FiUpload size={20} className='cursor-pointer'/>
                <p className='text-[10px]'>Drop your file here or <span className='text-[#ff9b12] cursor-pointer'>browse</span></p>
              </div>

            </div>
            <div className='bg-zinc-100 py-2 px-3 rounded-md'>
              <div className='flex items-center gap-6 text-[10px] w-full'>
                <div className='bg-white w-[55px] h-[55px] rounded-full items-center justify-center  p-2'>
                  <PiVideoFill size={40} />
                </div>
                <div className='w-full'>
                  <h3>Property Video.mp4</h3>
                  <p className='flex items-center justify-between w-full text'>443kb·4 seconds left <span>34%</span> </p>
                  
                </div>
                
              </div>
              <div className='w-full h-[8px] bg-[#fff] rounded-full relative mt-2' id='loading'></div>
            </div>
          </div>

          <div className='w-full mb-5'>
                
            <h3>Add You Youtube Link to Property Video</h3>
                
            <input type='text' placeholder='https://youtube/rVihMGQgDkY' className='py-3 px-6 outline-none rounded-full w-full my-2 border-[0.2px]'/>
            
          </div>
            
          <div className='w-full mb-5'>
                
            <h3>Property Type</h3>
                
            <input type='text' placeholder='Land' className='py-3 px-6 outline-none rounded-full w-full my-2 border-[0.2px]'/>
            
          </div>
            
          <div className='flex items-center justify-between w-full mb-10'>
              
            <h3 className='text-[12px] font-medium'>Amenities</h3>
              
            <Link href='#' className='text-[12px] font-medium border-[0.1px] rounded-md border-[#ff9b12] bg-[#FF9B1224] flex items-center gap-2 px-2 py-1 text-[#ff9b12]' onClick={()=>setAddAmenities(!addAmenities)}>  
              <FaPlus size={15}/>
              Add New Amenities
            </Link>
            <div className={addAmenities 
            ? 'fixed left-0 top-0 p-4 w-full h-screen bg-[#23232988] z-[999] duration-200' 
            : 'fixed top-[-100%] w-full h-screen bg-[#23232988] z-[999]  duration-200'}>
              <AiOutlineClose size={18} onClick={()=> setAddAmenities(!addAmenities)} className='absolute left-[58%] top-[35%] cursor-pointer text-black'/>
              <AddAmenities className='relative'/>
            </div>
          </div>

          <div className='w-full my-5'>
            <div className='w-full flex items-center justify-between'>
              {compound.map((item)=>(
                <>
                  <div key={item.id} className='flex items-center gap-2'>
                    {item.input}
                    <p>{item.label}</p>
                  </div>
                </>
              ))}
                
            </div>
            <div className='w-full flex items-center justify-between my-5'>
            {hall.map((item)=>(
              <>
                <div key={item.id} className='flex items-center gap-2'>
                    {item.input}
                    <p>{item.label}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-2 my-5 w-full'>
            <input type='checkbox' className='bg-[#ff9b12]' id='checkbox'/>
            <p>I confirm that i Uploaded Valid Property DEtails</p>
          </div>
          <button className='w-full p-3 bg-[#ff9b12] text-white text-[14px] rounded-full mb-10'>Submit</button>
          
        </div>    
      </div>
    </div>
  )
}

export default AdminProperty