import React from 'react'
import heroImg from '../../assets/images/eli.JPG'
import Countup from 'react-countup'
import { FaEnvelope} from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='pt-0 ' id='about'>
     <div classNamee='container pt-14'>
        <div className='md:flex items-center justify-center sm:flex-col md:flex-row'>
            {/* ========= hero left content ========== */}
            <div className='w-full md:basis-1/2'>
                <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>Hello! Welcome</h5>
                <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Eli Ogewo <br/>Software Developer</h1> 
                <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='flex items-center gap-6 mt-7'>
                  <a href='#'>
                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-xl'>
                      <FaEnvelope/>Hire Me
                    </button>
                  </a>
                  <a href='#' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See portfolio</a>
                  <p data-aos='fade-left' 
                  data-aos-duration='1500' 
                  className='flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            {/* ========= hero left end ========== */}
        </div>
     </div>
    </section>
  )
}
export default Hero