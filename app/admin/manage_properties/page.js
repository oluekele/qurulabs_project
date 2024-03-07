'use client'
import React, { useState } from 'react'
import Header from '@/components/header'
import AdminLeftNavbar from '@/components/AdminLeftNavbar';
import Link from 'next/link'
import {  FaPlus } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import Building from '@/data/BuildingData'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import AddAmenities from '@/components/AddAmenities';

const ManageProperties = () => {

  const [addAmenities, setAddAmenities] = useState(false)

  const [allData, setAllData] = useState(Building)
  const fillterCat = (category) => {
    setAllData(
      Building.filter((item) => {
        return item.category === category
      })
    )
  }
  const fillterallData = (type) => {
    setAllData(
      Building.filter((item) => {
        return item.type === type
      })
    )
  }
  const build = Building
  return (
    <div className='mt-[70px] relative'>
      <Header />
      <div className='flex mt-10 gap-8  w-[90%] '>
        <AdminLeftNavbar />
        <div className='w-full mx-auto ml-[250px] pl-9 lg:border-l-[0.1px] pb-10'>
          <div className='flex items-center justify-between w-full mt-10'>
            <div className=''>
              <h3 className='font-medium text-[20px]'>Manage a Property</h3>
              <p className='text-[10px] text-gray-400 -mt-1'>Manage a Listed Property</p>
            </div>
            <Link href='#' className='text-[12px] font-medium border-[0.1px] rounded-full text-[#fff] flex items-center gap-2 px-4 py-2 bg-[#ff9b12]' onClick={()=>setAddAmenities(!addAmenities)}>  
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
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-4 relative my-5'>
              <select className='outline-none border-[0.2px] rounded-full px-4  select bg-white py-2'>
                <option className='' value='All' onClick={()=>setAllData(Building)}>All</option>
                <option value='All' >Name</option>
                <option value='All' >Price Range</option>
                <option value='All' >Date Added</option>
                <option value='All' >Property Type</option>
                
              </select>
              <HiOutlineBarsArrowDown size={20} className='absolute left-[40%] cursor-pointer top-4'/>
              <div className='flex items-center gap-2 px-4 py-3 border-[0.2px] rounded-full w-[250px] overflow-hidden' >
                <GoSearch size={20} />
              <input type='search' placeholder='Search' className='border-none outline-none w-full h-full' />
              </div>
            </div>
            <div className='flex items-center gap-2 text-gray-500'>
              <p><span>1-30</span> of <span>200</span></p>
              <FaChevronLeft size={30} className='p-2 rounded-md border-[0.2px] cursor-pointer'/>
              <FaChevronRight size={30} className='p-2 rounded-md border-[0.2px] cursor-pointer'/>
            </div>
          </div>

          <div className='flex overflow-hidden items-center gap-8'>
              {build.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.2px] rounded-[20px] text-[14px] border-gray-100 w-[330px] relative p-4'>
                    <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                    <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                      
                      <p>{item.product}</p>
                      {item.heart}
                    </div>
                    
                    <p className=' text-[16px] font-medium mt-2'>{item.type}</p>
                    <div className='flex items-center justify-between '>
                      <p className='flex items-center gap-2'><IoLocation size={15} /> {item.location}, <span className=''>Nigeria</span></p>
                      <div className='flex items-center gap-4'>
                        <AiFillEdit size={20} className='cursor-pointer'/>
                        <RiDeleteBin6Fill size={18} className=' cursor-pointer text-[#b12a2a]'/>
                        
                      </div>
                    </div>
                    
                  </div>
                </>
              ))}
             
            </div>
            {/* <div className='flex overflow-hidden items-center gap-8 my-6'>
              {build.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.2px] rounded-[20px] text-[14px] border-gray-100 w-[330px] relative p-4'>
                    <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                    <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                      
                      <p>{item.product}</p>
                      
                    </div>
                    
                    <p className=' text-[16px] font-medium mt-2'>{item.type}</p>
                    <div className='flex items-center justify-between '>
                      <p className='flex items-center gap-2'><IoLocation size={15} /> {item.location}, <span className=''>Nigeria</span></p>
                      <div className='flex items-center gap-4'>
                        <AiFillEdit size={20} className='cursor-pointer'/>
                        <RiDeleteBin6Fill size={18} className=' cursor-pointer text-[#b12a2a]'/>
                        
                      </div>
                    </div>
                    
                  </div>
                </>
              ))}
             
            </div>
            <div className='flex overflow-hidden items-center gap-8'>
              {build.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.2px] rounded-[20px] border-gray-100 w-[330px] relative p-4 text-[14px]'>
                    <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                    <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                      
                      <p className='text-[blue]'>{item.product}</p>
                      {item.heart}
                    </div>
                    
                    <p className=' text-[16px] font-medium mt-2'>{item.type}</p>
                    <div className='flex items-center justify-between '>
                      <p className='flex items-center gap-2'><IoLocation size={15} /> {item.location}, <span className=''>Nigeria</span></p>
                      <div className='flex items-center gap-4'>
                        <AiFillEdit size={20} className='cursor-pointer'/>
                        <RiDeleteBin6Fill size={18} className=' cursor-pointer text-[#b12a2a]'/>
                        
                      </div>
                    </div>
                    
                  </div>
                </>
              ))}
             
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default ManageProperties