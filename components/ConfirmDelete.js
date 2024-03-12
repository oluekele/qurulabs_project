'use client'
import React, { useRef, useState } from 'react'
import { RiErrorWarningFill } from "react-icons/ri";
import Link from 'next/link'
import Building from '@/data/BuildingData'
import { AiOutlineClose } from "react-icons/ai";
import PasswordToDelete from '@/components/ConfirmDelete'
import swal from 'sweetalert'


const ConfirmDelete = ({message, onConfirm}) => {

  const handleConfirmDelete = ()=>{
    onConfirm(false)
    swal({
      title: 'Are you sure you want to delete this item?',
      text: 'Enter your Password to continue',
      icon: 'warning',
      content: {
        element: 'input',
        attributes: {
          placeholder: 'Enter your Password to continue',
          type: 'password',
          value: '',
        },
      },
      button: 'Confirm',

    })
    .then((value) =>{
      if(value === 'password'){
        if(value){
          swal(`The item deleted successfully`)
          swal(onConfirm(true), 'Successfully Deleted')
        }
      }
      else{

      }
    })
  }
  return (
    <>
      <div  id='con' className='w-full h-[100vh] scroll-m-0 flex items-center justify-center mx-auto bg-[#f2f2f2a4] fixed  top-0 overflow-y-hidden z-50' >
      <div className='w-[350px]  px-6 pt-10 pb-6 rounded-lg bg-white text-[14px] mx-auto relative ' >
            <div className='bg-[#fbc1c983] w-[40px] h-[40px] rounded-full flex items-center justify-center mb-6 absolute left-[45%]'>
              <RiErrorWarningFill size={30} className='bg-[#fbc1c9] rounded-full text-[#e60a2b]'/>
            </div>
            <p className='text-center mt-[60px] mb-3 w-[80%] mx-auto'>{message}</p>
            <p className='w-full text-gray-400 text-center text-[12px]'>This will delete data associated with the property</p>
            <div className='flex items-center gap-4 w-full mt-5'>
              <button className='bg-[#f2f2f2] py-2 text-center w-full rounded-full  border-[0.2px]' onClick={() => onConfirm(false)}>Cancel</button>
              <button className='bg-[#e60a2b] text-white py-2 text-center w-full rounded-full ' onClick={() =>handleConfirmDelete()}>Confirm</button>
              <AiOutlineClose size={25} className='absolute right-4 top-4 p-2 bg-[#f2f2f2] rounded-full cursor-pointer' onClick={() => onConfirm(false)}/>
            </div>
            
          </div>
      
          
            
          
        
      
      
      
      
      
    </div>
    </>
  )
}

export default ConfirmDelete