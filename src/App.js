import  {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from './Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import './App.css'
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
function App() {
  useEffect(()=>{
    Aos.init()
  }, [])
  return (
    <>
     <Header/>
     <main className='flex flex-col items-center px-4'>
     <Hero/>
     <Services/>
     <Portfolio/>
     <Contact />
     </main>
     <Footer/>
    </>
  );
}

export default App; 