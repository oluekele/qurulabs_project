import React from 'react'
import Header from '../components/header'
import LeftNavbar from '../components/leftNavbar'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link'
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { MdImage } from "react-icons/md";

const KYCVerification = () => {
  return (
    <div className='relative'>
      <Header />
      <div className=' flex items-center gap-4  top-5 left-[20%] absolute z-50'>
          
        <Link href='#' className='text-[#ffa200] bg-slate-200 p-2 rounded-full'><FaArrowLeftLong size={15}/></Link>
        <p>Return to previous</p>
      </div>
      <div className='w-[95%] mx-auto flex items-center pb-10'>
        <div className='fixed left-10 '>
          <LeftNavbar />
          
        </div>
        <div className='w-[50%] ml-[280px] mt-[110px] '>
          <div className=' '>
            <h2 className='font-bold text-[20px]'>
              KYC Verification - Upload A Proof Of Your Identity
            </h2>
            <p className='flex items-center gap-1 text-[14px]'><BsFileEarmarkCheckFill size={10} className='text-[#ffa200]'/> Make sure details uploaded are true and verifiable.</p>
          </div>
          <div className='my-4'>
            <label className='text-[20px]font-medium'>Full Name</label>
            <input type='text' name='name' placeholder='Enter Your Full Name' className='w-full px-4 py-2 outline-none rounded-full mt-2 border-[0.5px]'/>
          </div>
          <div className='my-4'>
            <label className='font-medium text-[20px]'>Date of Birth</label>
            <input type='date' name='date_of_birth' placeholder='Select Date Of Birth' className='w-full px-4 py-2 outline-none rounded-full mt-2 border-[0.5px] '/>
          </div>
          <div className='my-4'>
            <label className='text-[20px] font-medium'>Phone Number</label>
            <input type='text' name='phone' placeholder='Enter Your Phone Number' className='w-full px-4 py-2 outline-none rounded-full mt-2 border-[0.5px]'/>
          </div>
          <div className='my-4'>
            <label className='text-[20px] font-medium'>Identification Number (NIN/Passport Number)</label>
            <input type='text' name='nin/id/passport' placeholder='Enter Your NIN/Passport Number ' className='w-full px-4 py-2 outline-none rounded-full mt-2 border-[0.5px]'/>
          </div>
          <div className='border-[0.5px] rounded-md p-4 w-full'>
            <h3>Upload a Passport Photograph</h3>
            <div className='border-[0.5px] border-dotted rounded-sm mt-6 py-[50px] flex items-center justify-center mb-10'>
              <div className='flex items-center gap-4'>
                <FiUpload size={20}/>
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
          <div className='border-[0.5px] rounded-md p-4 w-full mt-8'>
            <h3>Upload an ID</h3>
            <div className='border-[0.5px] border-dotted rounded-sm mt-6 py-[50px] flex items-center justify-center mb-10'>
            <div className='flex items-center gap-4'>
              <FiUpload size={20}/>
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
        <div className='flex items-center gap-2 w-full py-4'>
            <input type='checkbox' className='w-[20px] h-[20px]'/>
            <p>I Confirm That I Uploaded Valid Photograph, Name, Date Of Birth, Number And ID</p>
          </div>
          <button className='bg-[#ffa200] py-3 text-[14px] text-white rounded-full w-full'>Submit</button>
        </div>
        

      </div>
      
      
    </div>
  )
}

export default KYCVerification