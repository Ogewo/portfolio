import React from 'react'
import { FaEnvelope,FaTwitter,FaYoutube,FaLinkedin,FaGithub } from 'react-icons/fa'

export const Footer = () => {
       const year = new Date().getFullYear()
  return (
    <>
     <footer className='bg-[#12141e] pt-12'>
      {/*============footer top */}
      <div className='container'>
        <div className='sm:flex items-center justify-center md:gap-8'>
          <div className='flex flex-col items-center justify-center w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[1.2rem]'>Do you want to make beautiful products?</h2>
            <a href='#'>
                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-xl'>
                      <FaEnvelope/>Hire Me
                    </button>
            </a>
          </div>
          <div className='w-full sm:w-1/2'>
            <p className='text-center text-gray-300 leading-7 mt-4 sm:mt-0'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
            temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!
            </p>
            <div className='flex items-center sm:justify-left justify-center  gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>Follow Me</span>
              <span>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaGithub /></a>
              </span>
              <span>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaTwitter /></a>
              </span>
              <span>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaLinkedin/></a>
              </span>
              <span>
                <a href='#' className='text-gray-300 font-[500] text-[18px]'><FaYoutube /></a>
              </span>             
            </div>
          </div>
          </div>
          <div>
            <ul className='flex items-center justify-center gap-[70px] pt-20'>
              <li><a className='text-white font-[600]' href='#'>About</a></li>
              <li><a className='text-white font-[600]' href='#'>Portfolio</a></li>
              <li><a className='text-white font-[600]' href='#'>Services</a></li>
              <li><a className='text-white font-[600]' href='#'>Contact</a></li>
            </ul>
          </div>
      </div>
      {/*============footer top end ========*/}
      {/*============footer bottom ========*/}
      <div className='bg-[#1b1e29] py-3 mt-14 px-40'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>E</span>
                <div className='leading-[20px]'>
                  <h2 className='text-gray-200 font-[500] text-[18px]'>Eli</h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>personal</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-center text-gray-400 text-[14px]'>Copyright {year} by Eli - All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
     </footer>
    </>
  )
}
export default Footer