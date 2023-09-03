import React from 'react'

function Contact() {
  return (
    <>
    <section id='contact' className='py-16'>
        <div className='container'>
            <h2 className='text-center text-headingColor font-[700] text-[2.5rem] mb-4'>Get in touch</h2>
            <div className='md:flex justify-between items-center'>
                
                <div className='sm:w-full mt-8 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                 <form className='sm:w-[35rem] w-[25rem]'>
                    <div className='mb-5'>
                        <input type='text' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[8px]'/>
                    </div>

                    <div className='mb-5'>
                        <input type='email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[8px]'/>
                    </div>

                    <div className='mb-5'>
                        <textarea type='text' rows={3} placeholder='Write your message here' className='w-full p-3 focus:outline-none rounded-[8px]'/>
                    </div>
                    <button className='w-full p-3 focus:outline-none rounded-[5px] border border-gray-400 text-black hover:bg-headingColor hover:text-white text-center ease-linear duration-150'>Send Message</button>
                 </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact