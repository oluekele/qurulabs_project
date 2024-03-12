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


const AdminLeftNavbar = () => {
  const currentPath = usePathname()

  const navbar = [
    {
      id: 1,
      label: 'Dashboard',
      icon: <MdDashboard size={20}/>,
      href: '/' || '/admin/admin_dashboard',
    },
    {
      id: 2,
      label: 'List Property',
      icon: <FaListCheck size={20}/>,
      href: '/admin/admin_property',
    },
    {
      id: 3,
      label: 'Manage Properties',
      icon: <LuTableProperties size={20}/>,
      href: '/admin/manage_properties',
    },
    {
      id: 4,
      label: 'Manage People',
      icon: <BsPeopleFill size={20}/>,
      href: '#',
      dropIcon: <RiArrowDropDownLine size={20}/>,
    },
    {
      id: 5,
      label: 'Manage Finance',
      icon: <MdOutlinePayment size={20}/>,
      dropIcon: <RiArrowDropDownLine size={20}/>,
      href: '#',
    },
    {
      id: 6,
      label: 'Payroll',
      icon: <SiGoogletagmanager size={20}/>,
      href: '#',
    },
    {
      id: 7,
      label: 'Workspace',
      icon: <BsPersonWorkspace size={20}/>,
      dropIcon: <RiArrowDropDownLine size={20}/>,
      href: '#',
    },
  ]

  return (
    <div className='w-[250px] text-[14px] fixed top-[100px] px-4 pb-10 hidden md:grid'>
      
      {navbar.map((item)=>(
        <>
          <div key={item.href} className={
          `${item.href === currentPath ? 'text-[#ff9b12] px-4 py-2 bg-zinc-200 rounded-full':'text-zinc-900 hover:text-zinc-400 transition' } flex items-center gap-2 px-4 py-[6px] cursor-pointer`
          }>
          
          <div className='flex items-center justify-between w-full'>
          <Link href={item.href} className='w-full flex items-center gap-2'>
            {item.icon}
            {item.label} </Link>
            <span className='text-gray-500 cursor-pointer'>
              {item.dropIcon}
            </span>
          </div>
        </div>
        </>
      ))}
      
    </div>
  )
}

export default AdminLeftNavbar