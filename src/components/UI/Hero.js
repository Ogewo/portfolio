import React from 'react'
import heroImg from '../../assets/images/eli.JPG'
import devImg from '../../assets/images/dev-img.png'
import Countup from 'react-countup'
import { FaEnvelope, FaThLarge, FaYoutube,FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='pt-10 px-[200px]' id='about'>
     <div classNamee='container pt-14'>
        <div className='md:flex items-center sm:flex-col md:flex-row'>
            {/* ========= hero left content ========== */}
            <div className='pt-20 w-full md:basis-1/2'>
                <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>Hello! Welcome</h5>
                <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Eli Ogewo <br/>Software Developer</h1> 
                <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='flex flex-col flex-column gap-6 mt-7'>
                  <div className='flex py-10 gap-10'>
                  <a href='#'>
                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-xl'>
                      <FaEnvelope/>Hire Me
                    </button>
                  </a>
                  <a href='#' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>See portfolio</a>
                  </div>
                  <p data-aos='fade-left' 
                  data-aos-duration='1500' 
                  className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex items-center gap-9 mt-14'>
                      <span className='text-smallTextColor text-[15px] font-[600]'>Follow Me:</span>
                    <span>
                      <a href='#' className='text-smallTextColor text-[18px] font-[600]'>
                        <FaTwitter/>
                      </a>
                    </span>
                    <span>
                      <a href='#' className='text-smallTextColor text-[18px] font-[600]'>
                        <FaYoutube/>
                      </a>
                    </span>
                    <span>
                      <a href='#' className='text-smallTextColor text-[18px] font-[600]'>
                        <FaLinkedin/>
                      </a>
                    </span>
                    <span>
                      <a href='#' className='text-smallTextColor text-[18px] font-[600]'>
                        <FaGithub/>
                      </a>
                     </span>
                    </div>
                </div>                
            </div>
            {/* ========= hero left end ========== */}
            {/* ========= hero left image ========== */}
            <div className='basis-1/2 mt-10 sm:mt-0 '>
              <figure className='flex items-center justify-center'>
                 <img src={devImg} alt='' className=' rounded-[50%]'/>
              </figure>
            </div>
            {/* ========= hero image end ========== */}
            {/* ========= hero content right ========== */}
            {/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
              <div className='mb-10'>
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <Countup start={0} end={6} duration={2} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>Years of Experience</h4>
              </div>
              <div className='mb-10'>
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <Countup start={0} end={100} duration={2} suffix='%' />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>Success Rate</h4>
              </div>
              <div className='mb-10'>
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <Countup start={0} end={150} duration={2} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>Happy Clients</h4>
              </div>
              <div className='mb-10'>
                <h2 className='text-headingColor font-[700] text-[32px]'>
                  <Countup start={0} end={249} duration={2} suffix='+' />
                </h2>
                <h4 className='text-headingColor font-[600] text-[18px]'>Projects Completed</h4>
              </div>
            </div> */}
            {/* ========= hero right end ========== */}
        </div>
     </div>
    </section>
  )
}
export default Hero