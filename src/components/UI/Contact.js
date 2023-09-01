import React from 'react'

function Contact() {
  return (
    <>
    <section id='Contact' className='pb-16'>
        <div className='container'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>

                    {/* GOOGLE MAP HTML LINK SHARE */}
                </div>
                <div className='w-full mt-8 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                 <form className='w-full'>
                    <div className='mb-5'>
                        <input type='text' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[8px]'/>
                    </div>

                    <div className='mb-5'>
                        <input type='email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[8px]'/>
                    </div>

                    <div className='mb-5'>
                        <textarea type='text' rows={3} placeholder='Write your message here' className='w-full p-3 focus:outline-none rounded-[8px]'/>
                    </div>
                    <button className='w-full p-3 focus:outline-none rounded-[5px] bg:smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Send Message</button>
                 </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact