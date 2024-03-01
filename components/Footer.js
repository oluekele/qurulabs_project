import React from 'react';
import { GiCrossedAirFlows } from "react-icons/gi";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiTwitch } from "react-icons/fi";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-black mt-10'>
      <div className="flex flex-col items-center justify-center max-w-[850px] w-[80%] md:[70%] mx-auto pt-[20px] pb-[30px] md:pb-[30px] text-slate-50 gap-4 ">
        <div className="flex  items-center justify-center max-w-[850px] w-[80%] md:[70%] mx-auto pt-[30px] pb-[30px] md:pb-[50px]  gap-4 ">
          
          <div className="flex items-center justify-center gap-4  py-2">
            <Link href={"/"} className='transition hover:text-red-400 font-bold'>
              <FaXTwitter size={24}/>
            </Link>
            <Link href={"/"} className='transition hover:text-red-400 font-bold'>
              <FaFacebookF size={24}/>
            </Link>
            <Link href={"/"} className='transition hover:text-red-400 font-bold'>
              <FaInstagram size={24}/>
            </Link>
            <Link href={"/"} className='transition hover:text-red-400 font-bold'>
              <FaYoutube size={24}/>
            </Link>
            <Link href={"/"} className='transition hover:text-red-400 font-bold'>
              <FaTiktok size={24}/>
            </Link>
            <Link href={"/"} className='transition hover:text-red-400 font-bold'>
              <FiTwitch size={24}/>
            </Link>
          </div>
        </div>
       
       <div className='flex justify-between w-full'>
        <div className='flex flex-col text-[14px] md:text-[16px] leading-[10px] gap-6 '>
            <Link href={"/"} className='transition hover:text-red-400 '>
                ABOUT
              </Link>
            <Link href={"/"} className='transition hover:text-red-400 '>
                HELP
              </Link>
            <Link href={"/"} className='transition hover:text-red-400 '>
                BUSINESS INQUIRIES
              </Link>
            
            <Link href={"/"} className='transition hover:text-red-400 '>
                CREATOR APP
              </Link>
          </div>
          <div className="flex flex-col 
          gap-6 text-[14px] md:text-[20px] leading-[10px] md:py-5 py-2">
             
              <Link href={"/"} className='transition '>
                  Privacy Policy
                </Link>
              <Link href={"/"} className='transition '>
                  Terms of Service 
                </Link>
              <Link href={"/"} className='transition '>
                  Report a Vulnerability
                </Link>
              <Link href={"/"} className='transition  '>
                  Do not sell my info
              </Link>
              
          </div>
        </div>
        <div className=" flex items-center justify-center text-[14px] md:text-[18px]">
          <p className="text-center">&copy; {new Date().getFullYear()} Quru Real Estate - All Rights Reserved</p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer