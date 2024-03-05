'use client'
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { LuTableProperties } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { SiGoogletagmanager } from "react-icons/si";
import { MdOutlinePayment } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const LeftNavbar = () => {
  const currentPath = usePathname()
 
  return (
    <div className='w-[200px] text-[12px] fixed top-[150px]'>
      <div className={
          `${currentPath ? 'text-orange-400 bg-[#F2F3F3]':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-4 mt-2 py-3 pl-3 rounded-md`
        }>
        <MdDashboard size={20}/>
        <Link href='/' className='w-full'>Dashboard</Link>
        
      </div>
      <div className={
          `${!currentPath ? 'text-orange-400 bg-[#F2F3F3]':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-4 mt-2 py-3 pl-3 rounded-md`
        }>
        <FaListCheck size={20}/>
        <Link href='/' className='w-full'>List Property</Link>
        
      </div>
      <div className={
          `${!currentPath ? 'text-orange-400 bg-[#F2F3F3]':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-4 mt-2 py-3 pl-3 rounded-md`
        }>
        <LuTableProperties size={20}/>
        <Link href='/manageProperties' className='w-full'>Manage Properties</Link>
        
      </div>
      <div className={
          `${!currentPath ? 'text-orange-400 bg-[#F2F3F3]':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-4 mt-2 py-3 pl-3 rounded-md`
        }>
        <BsPeopleFill size={20}/>
        <div className='flex items-center justify-between w-full'>
          <Link href='/managePeople' >Manage People </Link>
          <RiArrowDropDownLine size={20} className='text-gray-500 cursor-pointer'/>
        </div>
        
      </div>
      <div className={
          `${!currentPath ? 'text-orange-400 bg-[#F2F3F3]':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-4 mt-2 py-3 pl-3 rounded-md`
        }>
        <MdOutlinePayment size={20}/>
        <div className='flex items-center justify-between w-full'>
        <Link href='/manageFinance' >Manage Finance </Link>
          <RiArrowDropDownLine size={20} className='text-gray-500 cursor-pointer'/>
        </div>
      </div>
      <div className={
          `${!currentPath ? 'text-orange-400 bg-[#F2F3F3]':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-4 mt-2 py-3 pl-3 rounded-md`
        }>
        <SiGoogletagmanager size={20}/>
        <Link href= '/payroll' className='w-full'>Payroll</Link>
        
      </div>
      <div className={
          `${!currentPath ? 'text-orange-400 bg-[#F2F3F3]':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-4 mt-2 py-3 pl-3 rounded-md`
        }>
        <BsPersonWorkspace size={20}/>
        <div className='flex items-center justify-between w-full'>
          <Link href= '/workspace' >Workspace </Link>
          <RiArrowDropDownLine size={20} className='text-gray-500 cursor-pointer'/>
        </div>
        
      </div>
      
      
      
    </div>
  )
}

export default LeftNavbar