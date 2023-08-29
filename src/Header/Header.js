import React from 'react'
import { FaPaperPlane, FaBars} from 'react-icons/fa'
const Header = () => {
  return (
    <>
     <header className='border w-full h-[80px] flex
     items-center justify-center'>
     <div className='container'>
        <div className='flex items-center justify-between'>
          {/* ===========Logo============ */}
          <div className='flex items-center gap-2'>
          <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>E</span>
          <div>
            <h2 className='text-xl font-[700]'>Eli</h2>
            <p>personal</p>
          </div>
          </div>
          {/* =========Logo End========= */}
          {/* =========menu start========= */}
          <div className='menu'>
            <ul className='flex items-center gap-[20px]'>
              <li><a className='text-smallTextColor font-[600]' href='#'>About</a></li>
              <li><a className='text-smallTextColor font-[600]' href='#'>Services</a></li>
              <li><a className='text-smallTextColor font-[600]' href='#'>Portfolio</a></li>
              <li><a className='text-smallTextColor font-[600]' href='#'>Contact</a></li>
            </ul>
          </div>
          {/* =========Logo end========= */}

          {/* =========menu right========= */}
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 text-smllTextColor font-[600] border border-solid border-smallTextColor py-2 px-2 rounded-xl hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700'>

              <FaPaperPlane/>Let's Talk
            </button>
            <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'><FaBars/></span>
          </div>
          {/* =========menu right end========= */}
        </div>
     </div>
     </header>
    </>
  )
}
export default Header
