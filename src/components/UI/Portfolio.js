import React from 'react'
import {portfolios} from '../../assets/Data/PortfolioData'

function Portfolio() {
  return (
    <>
     <section id='portfolio'>
       <div className='container'>
           <div className='flex items-center justify-between flex-wrap'>
            <div className='mb-7 sm:mb-0'>
                <h3 className='text-headingColor text-[2rem] font-[700]'>My recent projects</h3>
            </div>
            <div className='fkex gap-3'>
                <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>All</button>
                <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Web Design</button>
                <button className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>UI/UX Design</button>
            </div>
           </div>
           <div className='flex items-center gap-4 flex-wrap mt-12'>
            
            {portfolios.map((portfolio, index) =>{
                <div className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                    <img className='rounded-[8px]' src={portfolio.imgUrl } key={index} alt=''/>                   
                </div>
            })}
           </div>
       </div>
     </section>
    </>
  )
}

export default Portfolio