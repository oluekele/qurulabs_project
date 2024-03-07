import React from 'react'

const AddAmenities = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[300px] p-4 rounded-lg bg-white text-[16px]'>
        <h3 className='text-center mb-10'>Add New Amenities</h3>
        <label className=' '>Name of Amenities</label>
        <input type='text' placeholder='Spa' className='border-[0.2px] px-6 py-3 rounded-full outline-none w-full mt-2'/>
        <button className='bg-[#ff9b12] text-white py-3 text-center w-full rounded-full mt-5'>Add Amenities</button>
      </div>
    </div>
  )
}

export default AddAmenities