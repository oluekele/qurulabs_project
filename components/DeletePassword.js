import React from 'react'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";

const PasswordToDelete = ({message, onConfirm}) => {
  return (
    <div  id='con' className='w-full h-[100vh] scroll-m-0 flex items-center justify-center mx-auto bg-[#f2f2f2a4] fixed  top-0 overflow-y-hidden z-50' >
      <form onSubmit={onClicked} className='w-[550px]  px-6 pt-10 pb-6 rounded-lg bg-white text-[14px] mx-auto relative'>
        <p>{message}</p>
        <h3 className='text-center mb-10'>Enter Your Password to Continue</h3>

        <label className=' '>Your Password</label>
        <input id='pw' type='password' placeholder='Password' className='border-[0.2px] px-6 py-3 rounded-full outline-none w-full mt-2'/>
        <button className='bg-[#ff9b12] text-white py-3 text-center w-full rounded-full mt-5' >
        <Link href={'/admin/manage_properties'} onClick={() => onConfirm(true)}>Confirm</Link></button>
        <AiOutlineClose size={25} className='absolute right-4 top-4 p-2 bg-[#f2f2f2] rounded-full cursor-pointer' onClick={() => onConfirm(false)}/>
      </form>
    </div>
  )
}

export default PasswordToDelete 