import React from 'react'
import { FaEnvelope,FaTwitter,FaYoutube,FaLinkedin,FaGithub } from 'react-icons/fa'
export const Footer = () => {
  return (
    <>
     <footer className='flex items-center justify-center bg-[#12141e] pt-12'>
      {/*============footer top */}
      <div className='container'>
        <div className='sm:flex items-center  md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[1.2rem]'>Do you want to make beautiful products?</h2>
            <a href='#'>
                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-xl'>
                      <FaEnvelope/>Hire Me
                    </button>
            </a>
          </div>
          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
            temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!
            </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>Follow Me</span>
              <span className='w-35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaGithub /></a>
              </span>
              <span className='w-35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaTwitter /></a>
              </span>
              <span className='w-35px] h-[35px] bg-[2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaLinkedin/></a>
              </span>
              <span className='w-35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaYoutube /></a>
              </span>             
            </div>
          </div>
          </div>
          <div>
            <ul className='flex items-center gap-[70px]'>
              <li><a className='text-white font-[600]' href='#'>About</a></li>
              <li><a className='text-white font-[600]' href='#'>Portfolio</a></li>
              <li><a className='text-white font-[600]' href='#'>Services</a></li>
              <li><a className='text-white font-[600]' href='#'>Contact</a></li>
            </ul>
          </div>
      </div>
      {/*============footer top end ========*/}
     </footer>
    </>
  )
}
export default Footer