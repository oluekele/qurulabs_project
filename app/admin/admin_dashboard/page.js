import React from 'react'
import Header from '@/components/header'
import AdminLeftNavbar from '@/components/AdminLeftNavbar'
import Footer from '@/components/Footer'
import Image from "next/image";
import BgImage from '@/assets/bg_1.jpg.webp'
import LandData from '@/data/LandData'
import Building from '@/data/BuildingData'
import Properties from '@/data/Properties'
import { IoLocation } from "react-icons/io5";

const AdminDashboard = () => {
  const land = LandData;
  const build = Building;
  const property = Properties;
  return (

    <div className='lg:mt-[75px] mt-[70px] relative w-full overflow-hidden'>
      <Header />
      <div className='flex  gap-8 w-[95%] '>
        <AdminLeftNavbar />
        <div className='w-[95%] mx-auto ml-[250px] pl-9 lg:border-l-[0.1px]'>
          <Image src={BgImage} alt='background' width={1200} height={200} className='w-full h-[400px] rounded-[30px] lg:mt-[20px] '/>
          <div className='w-full mt-10 overflow-hidden'>
            <h2 className=' text-[25px] font-bold mb-5'>Buildings Available</h2>
            <div className='flex flex-wrap items-center gap-6'>
              {build.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.5px] rounded-[30px] w-[350px] p-4 relative'>
                    <img src={item.img}alt='background'  className='w-[300px] h-[300px] rounded-[30px] ' onClick='#'/>
                    <p className='bg-[green] text-white p-2 rounded-lg absolute top-[50%] left-10'>{item.price}</p>
                    
                    <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center gap-4'>
                    <Image src={BgImage} alt='background' width={200} height={200} className='w-[50px] h-[50px] rounded-full'/>
                    <h3>Quru Lab</h3>
                    </div>
                      <p>{item.period}</p>
                    </div>
                    <p className='text-center text-[25px] font-medium'>{item.owner}</p>
                    <div className='flex items-center justify-between mt-5'>
                      
                      <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location} <span className='text-[#ff9b12]'>Sale</span></p>
                      <p>{item.size}</p>
                    </div>
                    
                  </div>
                </>
              ))}
              
            </div>
          </div>
          <div className='w-full mt-10'>
            <h2 className=' text-[25px] font-bold mb-5'>Lands Available</h2>
            <div className='flex items-center gap-6'>
            {land.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.5px] rounded-[30px] w-[350px] p-4 relative'>
                    <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[30px] ' onClick='#'/>
                    <p className='bg-[green] text-white p-2 rounded-lg absolute top-[50%] left-10'>{item.price}</p>
                    
                    <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center gap-4'>
                    <Image src={BgImage} alt='background' width={200} height={200} className='w-[50px] h-[50px] rounded-full'/>
                    <h3>Quru Lab</h3>
                    </div>
                      <p>{item.period}</p>
                    </div>
                    <p className='text-center text-[25px] font-medium'>{item.owner}</p>
                    <div className='flex items-center justify-between mt-5'>
                      
                      <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location} <span className='text-[#ff9b12]'>Sale</span></p>
                      <p>{item.size}</p>
                    </div>
                    
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className='w-full mt-10 pb-20'>
            <h2 className=' text-[25px] font-bold mb-5'>Properties Available</h2>
            <div className='flex items-center gap-6'>
            {property.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.5px] rounded-[30px] w-[350px] p-4 relative '>
                    <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[30px] ' onClick='#'/>
                    <p className='bg-[green] text-white p-2 rounded-lg absolute top-[50%] left-10'>{item.price}</p>
                    
                    <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center gap-4'>
                    <Image src={BgImage} alt='background' width={200} height={200} className='w-[50px] h-[50px] rounded-full'/>
                    <h3>Quru Lab</h3>
                    </div>
                      <p>{item.period}</p>
                    </div>
                    <p className='text-center text-[25px] font-medium'>{item.owner}</p>
                    <div className='flex items-center justify-between mt-5'>
                      
                      <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location} <span className='text-red-400'>Sale</span></p>
                      <p>{item.size}</p>
                    </div>
                    
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboard