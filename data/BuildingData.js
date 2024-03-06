import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
const Building =[
  {
    id: 1,
    img: 'https://buildingplanng.com/wp-content/uploads/wp-realestate-uploads/_property_gallery/2021/06/modern-4bedrm-2.jpg',
    location: "Lagos",
    type: 'Three Bedroom Duplex',
    instalmentMade: '3 Instalment Made - N600,000',
    instalmentLeft: '1 Instalment Made - N200,000',
    product: <p className='bg-[white] rounded-lg  text-[blue] flex items-center gap-1'><GoDotFill size={20}/>House</p>,
    heart: <p className='bg-[white] rounded-full  text-[#f73838]'><FaHeart size={15}/></p>
    
  },
  // {
  //   id: 2,
  //   img: 'https://buildingplanng.com/wp-content/uploads/wp-realestate-uploads/_property_gallery/2021/06/modern-4bedrm-2.jpg',
  //   location: "Lagos",
  //   type: '2 Hectare Of Farm Land',
  //   instalmentMade: '3 Instalment Made - N600,000',
  //   instalmentLeft: '1 Instalment Made - N200,000',
  //   product: <p className='bg-[white] rounded-lg  text-[blue] flex items-center gap-1'><GoDotFill size={20}/>Land</p>,
  //   heart: <p className='bg-[white] rounded-full  text-[#f73838]'><IoMdHeartEmpty size={15}/></p>
  // },
  // {
  //   id: 3,
  //   img: 'https://buildingplanng.com/wp-content/uploads/wp-realestate-uploads/_property_gallery/2021/06/modern-4bedrm-2.jpg',
  //   location: "Lagos",
  //   type: '2 Hectare Of Farm Land',
  //   instalmentMade: '3 Instalment Made - N600,000',
  //   instalmentLeft: '1 Instalment Made - N200,000',
  //   product: <p className='bg-[white] rounded-lg  text-[blue] flex items-center gap-1'><GoDotFill size={20}/>Land</p>,
  //   heart: <p className='bg-[white] rounded-full  text-[#f73838]'><IoMdHeartEmpty size={15}/></p>
  // },
  // {
  //   id: 3,
  //   img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvz2HPxqDSFU6gJpOJYirbWRvoZqCrw-o7tg&usqp=CAU',
  //   price: "$5,350",
  //   location: "Lagos",
  //   location: "Agbor",
  //   condition: 'Sale',
  //   size: '5,234 sqft',
  //   period: '4weeks',
  //   profile: 'https://preview.colorlib.com/theme/oakberry/images/person_1.jpg.webp',
  //   owner: 'Quru Property',
  // },
]

export default Building