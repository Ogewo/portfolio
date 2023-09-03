import React, {useEffect, useRef} from 'react'
import { FaPaperPlane, FaBars} from 'react-icons/fa'

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ) {        
          headerRef.current.classList.add('sticky__header');
      } else {
          headerRef.current.classList.remove('sticky__header');        
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop; // Corrected offSetTop to offsetTop

    window.scrollTo({
      top: location - 80, // Corrected the assignment here
      left: 0,
      behavior: 'smooth', // Optionally, add smooth scrolling behavior
    });
  };
  return (
    <>
     <header ref={headerRef} className='w-full h-[80px] flex
     items-center px-[20px] lg:px-[200px]'>
     <div className='container'>
        <div className='flex items-center justify-between'>
          {/* ===========Logo============ */}
          <div className='flex items-center md:gap-2'>
          <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>E</span>
          <div>
            <h2 className='text-xl font-[700]'>Eli</h2>
            <p>personal</p>
          </div>
          </div>
          {/* =========Logo End========= */}
          {/* =========menu start========= */}
          <div className='menu'>
            <ul className='hidden sm:flex items-center gap-[30px] md:gap-[70px]'>
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href='#about'>About</a></li>
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href='#services'>Services</a></li>
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href='#portfolio'>Portfolio</a></li>
              <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href='#contact'>Contact</a></li>
            </ul>
          </div>
          {/* =========Logo end========= */} 
          {/* =========menu right========= */}
          <div className='flex items-center gap-4'>
            <button className='hidden sm:flex items-center gap-2 text-smllTextColor font-[600] border border-solid border-smallTextColor py-2 px-2 rounded-xl hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700'>

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
