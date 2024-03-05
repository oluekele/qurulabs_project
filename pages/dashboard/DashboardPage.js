'use client'
import Header from '@/components/header'
import LeftNavbar from '@/components/leftNavbar'
import Footer from '@/components/Footer'
import Image from "next/image";
import BgImage from '@/assets/bg_1.jpg.webp'
import LandData from '@/data/LandData'
import Building from '@/data/BuildingData'
import Properties from '@/data/Properties'
import { IoLocation } from "react-icons/io5";
import Link from 'next/link'
import { FaHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useRef } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";

const DashboardPage = () => {
  const land = LandData;
  const build = Building;
  const property = Properties;

  const number = useRef() 
  // console.log(number)
  // let counter = 0;
  // setInterval(() =>{
  //   if (counter == 90){
  //     clearInterval();
  //   }else{
  //     counter += 1;
  //     number.backgroundColor = '#ffa200';
  //   }
  // }, 90);
  return (

    <div className='mt-[100px] relative'>
      <Header />
      <div className='flex mt-10 gap-8 w-[95%] mx-auto'>
        <LeftNavbar />
        <div className='w-full ml-[250px]'>
          
          <div className='w-full mt-10'>
            <h2 className='text-[25px] font-bold mb-5'>Dashboard Overview</h2>
            <div className='flex items-center justify-between w-full my-5'>
              <h3 className='text-[18px] font-bold'>Your Properties(6)</h3>
              <Link href='#' className='text-[orange] text-[12px]'>View All</Link>
            </div>
            <div className='flex overflow-hidden items-center gap-8'>
              {build.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.5px] rounded-[20px] w-[330px] relative p-4'>
                    <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                    <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                      <p className='bg-[white]  px-2 py-1 rounded-lg  text-[blue] flex items-center gap-1'><GoDotFill size={20}/>House</p>
                      <p className='bg-[white]  p-2  rounded-full  text-[#f73838]'><FaHeart size={20}/></p>
                    </div>
                    
                    <p className=' text-[20px] font-medium mt-2'>{item.type}</p>
                    <div className='flex items-center justify-between mt-3'>
                      
                      <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                      
                    </div>
                    
                  </div>
                </>
              ))}
              {land.map((item)=>(
                <>
                <div key={item.id} className='border-[0.5px] rounded-[20px] w-[330px] relative p-4'>
                  <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                  <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                    <p className='bg-[white]  px-2 py-1 rounded-lg  text-[orange] flex items-center gap-1'><GoDotFill size={20}/>Land</p>
                    <p className='bg-[white]  p-2  rounded-full  '><IoMdHeartEmpty size={20}/></p>
                  </div>
                  
                  <p className=' text-[20px] font-medium mt-2'>{item.type}</p>
                  <div className='flex items-center justify-between mt-3'>
                    
                    <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                    
                  </div>
                  
                </div>
              </>
              ))}
              {property.map((item)=>(
                <>
                <div key={item.id} className='border-[0.5px] rounded-[20px] w-[330px] relative p-4'>
                  <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                  <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                    <p className='bg-[white]  px-2 py-1 rounded-lg  text-[green] flex items-center gap-1'><GoDotFill size={20}/>Estate</p>
                    <p className='bg-[white]  p-2  rounded-full  '><IoMdHeartEmpty size={20}/></p>
                  </div>
                  
                  <p className=' text-[20px] font-medium mt-2'>{item.type}</p>
                  <div className='flex items-center justify-between mt-3'>
                    
                    <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                    
                  </div>
                  
                </div>
              </>
              ))}
            </div>
          </div>
          <div className='w-full mt-10'>
          <h2 className='text-[20px] font-bold mb-5'>Pending Payment</h2>
            <div className='flex overflow-hidden items-center gap-8'>
              <div className='border-[0.5px] rounded-[20px] w-[330px] py-5  '>
                <div className='flex items-center px-8  gap-4'>
                  <div className=' bg-white rounded-full  relative' >
                    <div class="outter"><div className="inner"><div id="number1"></div></div></div>
                    
                  </div>
                  <div>
                    <p className='bg-[white]  px-2 py-1 rounded-lg flex items-center gap-1 font-medium'><GoDotFill size={25} className='text-[green]'/>Paid</p>
                    <p className='bg-[white]  px-2 py-1 rounded-lg   flex items-center gap-1 font-medium'><GoDotFill size={25} className='text-gray-200 '/>Balance</p>
                  </div>
                </div>
                  {/* <div className="">
                    <div className="">
                        <div className="">
                            <div className="outter">
                                <div className="inner">
                                    <div id="number1" ref={number}>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                               <linearGradient id="GradientColor">
                                  <stop offset="0%" stopColor="#e91e63" />
                                  <stop offset="100%" stopColor="#673ab7" />
                               </linearGradient>
                            </defs>
                            <circle className="circle1" cx="80" cy="80" r="70" strokeLinecap="round" />
                        </svg>
                        
                    </div>
                  </div> */}
                
                {build.map((item)=>(
                  <>
                    <div key={item.id} className='mt-5 px-8 '>
                      <h3 className='text-[16px] font-bold mb-1'>{item.type}</h3>
                      <p className='flex gap-2 items-center text-gray-400 text-[12px] font-medium'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                    </div>
                    <div className='mt-3 text-[14px] border-b-[0.2px] pb-8'>
                      <p className='px-8  flex items-center gap-1'><GoDotFill size={25} className='text-[green]'/>{item.instalmentMade}</p>
                      <p className='flex items-center gap-1 mt-2 px-8  '><GoDotFill size={25} className='text-gray-200'/>{item.instalmentLeft}</p>
                    </div>
                    <div className='w-[85%] mx-auto'>
                      <button className='bg-[orange] p-2 text-white font-medium text-[18px] rounded-lg cursor-pointer mt-5 w-full mx-auto'>Complete Payment</button>
                    </div>
                  </>
                ))} 
                
              </div>
              <div className='border-[0.5px] rounded-[20px] w-[330px] py-5  '>
                <div className='flex items-center px-8  gap-4'>
                  <div className=' bg-white rounded-full  relative' >
                    <div class="outter"><div className="inner"><div id="number1"></div></div></div>
                    
                  </div>
                  <div>
                    <p className='bg-[white]  px-2 py-1 rounded-lg flex items-center gap-1 font-medium'><GoDotFill size={25} className='text-[green]'/>Paid</p>
                    <p className='bg-[white]  px-2 py-1 rounded-lg   flex items-center gap-1 font-medium'><GoDotFill size={25} className='text-gray-200 '/>Balance</p>
                  </div>
                </div>
                {land.map((item)=>(
                  <>
                    <div key={item.id} className='mt-5 px-8 '>
                      <h3 className='text-[16px] font-bold mb-1'>{item.type}</h3>
                      <p className='flex gap-2 items-center text-gray-400 text-[12px] font-medium'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                    </div>
                    <div className='mt-3 text-[14px] border-b-[0.2px] pb-8'>
                      <p className='px-8  flex items-center gap-1'><GoDotFill size={25} className='text-[green]'/>{item.instalmentMade}</p>
                      <p className='flex items-center gap-1 mt-2 px-8  '><GoDotFill size={25} className='text-gray-200'/>{item.instalmentLeft}</p>
                    </div>
                    <div className='w-[85%] mx-auto'>
                      <button className='bg-[orange] p-2 text-white font-medium text-[18px] rounded-lg cursor-pointer mt-5 w-full mx-auto'>Complete Payment</button>
                    </div>
                  </>
                ))} 
                
              </div>
              <div className='border-[0.5px] rounded-[20px] w-[330px] py-5  '>
                <div className='flex items-center px-8  gap-4'>
                  <div className=' bg-white rounded-full  relative' >
                    <div class="outter"><div className="inner"><div id="number1"></div></div></div>
                    
                  </div>
                  <div>
                    <p className='bg-[white]  px-2 py-1 rounded-lg flex items-center gap-1 font-medium'><GoDotFill size={25} className='text-[green]'/>Paid</p>
                    <p className='bg-[white]  px-2 py-1 rounded-lg   flex items-center gap-1 font-medium'><GoDotFill size={25} className='text-gray-200 '/>Balance</p>
                  </div>
                </div>
                {property.map((item)=>(
                  <>
                    <div key={item.id} className='mt-5 px-8 '>
                      <h3 className='text-[16px] font-bold mb-1'>{item.type}</h3>
                      <p className='flex gap-2 items-center text-gray-400 text-[12px] font-medium'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                    </div>
                    <div className='mt-3 text-[14px] border-b-[0.2px] pb-8'>
                      <p className='px-8  flex items-center gap-1'><GoDotFill size={25} className='text-[green]'/>{item.instalmentMade}</p>
                      <p className='flex items-center gap-1 mt-2 px-8  '><GoDotFill size={25} className='text-gray-200'/>{item.instalmentLeft}</p>
                    </div>
                    <div className='w-[85%] mx-auto'>
                      <button className='bg-[orange] p-2 text-white font-medium text-[18px] rounded-lg cursor-pointer mt-5 w-full mx-auto'>Complete Payment</button>
                    </div>
                  </>
                ))} 
                
              </div>

            </div>
          </div>
          <div className='w-full mt-10'>
          <h2 className='text-[20px] font-bold mb-5'>Explore Other Properties</h2>
            
            <div className='flex overflow-hidden items-center gap-8'>
              {build.map((item)=>(
                <>
                  <div key={item.id} className='border-[0.5px] rounded-[20px] w-[330px] relative p-4'>
                    <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                    <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                      <p className='bg-[white]  px-2 py-1 rounded-lg '>{item.product}</p>

                      {/* <p className='bg-[white]  p-2  rounded-full  text-[#f73838]'><FaHeart size={20}/></p> */}
                    </div>
                    
                    <p className=' text-[20px] font-medium mt-2'>{item.type}</p>
                    <div className='flex items-center justify-between mt-3'>
                      
                      <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                      
                    </div>
                    
                  </div>
                </>
              ))}
              {land.map((item)=>(
                <>
                <div key={item.id} className='border-[0.5px] rounded-[20px] w-[330px] relative p-4'>
                  <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                  <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                    <p className='bg-[white]  px-2 py-1 rounded-lg  text-[orange] flex items-center gap-1'><GoDotFill size={20}/>Land</p>
                    <p className='bg-[white]  p-2  rounded-full  '><IoMdHeartEmpty size={20}/></p>
                  </div>
                  
                  <p className=' text-[20px] font-medium mt-2'>{item.type}</p>
                  <div className='flex items-center justify-between mt-3'>
                    
                    <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                    
                  </div>
                  
                </div>
              </>
              ))}
              {property.map((item)=>(
                <>
                <div key={item.id} className='border-[0.5px] rounded-[20px] w-[330px] relative p-4'>
                  <img src={item.img}alt='background'  className='w-full h-[300px] rounded-[16px] '/>
                  <div className='flex items-center justify-between w-[80%] absolute top-[10%] left-10'>
                    <p className='bg-[white]  px-2 py-1 rounded-lg  text-[green] flex items-center gap-1'><GoDotFill size={20}/>Estate</p>
                    <p className='bg-[white]  p-2  rounded-full  '><IoMdHeartEmpty size={20}/></p>
                  </div>
                  
                  <p className=' text-[20px] font-medium mt-2'>{item.type}</p>
                  <div className='flex items-center justify-between mt-3'>
                    
                    <p className='flex items-center gap-2'><IoLocation size={20} /> {item.location}, <span className=''>Nigeria</span></p>
                    
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

export default DashboardPage