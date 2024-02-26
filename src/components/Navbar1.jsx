import { BiMap } from "react-icons/bi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";

const Navbar1 = () => {
  return (

    <nav className="bg-[#1e1e1e] text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <BiMap className='text-base md:text-xl hover:text-[#807bd1]' />
          <span className="text-base">ABC</span>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineLocalPhone className='text-base md:text-xl hover:text-[#807bd1]' />
          <span className="text-base">+923091354207</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">
            <AiOutlineYoutube className='text-base md:text-xl hover:text-[#807bd1]' />
          </a>
          <a href="#" className="text-white">
            <LuInstagram className='text-base md:text-lg hover:text-[#807bd1]' />
          </a>
          <a href="#" className="text-white">
            <RiFacebookCircleLine className='text-base md:text-xl hover:text-[#807bd1]' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar1