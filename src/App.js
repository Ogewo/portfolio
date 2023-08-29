import  {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from './Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import './App.css'
function App() {
  useEffect(()=>{
    Aos.init()
  }, [])
  return (
    <>
     <Header/>
     <main>
     <Hero/>
     </main>
     <Footer/>
    </>
  );
}

export default App; 