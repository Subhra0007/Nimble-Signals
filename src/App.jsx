import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import Products from './components/Products';
import Plans from './components/Plans';
import Bundles from './components/Bundles';
import Accessories from './components/Accessories';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  

  return (
    <>
    <div className="bg-gradient-to-r from-[#3f0447] to-[#0e0e3b]   text-white px-10 md:px-20 py-10">
       <Navbar/>
       <HeroSection/>
      
       <Plans/>
       <Bundles/>
       <Accessories/>
       <FAQ/>
       <About/>
       <Contact/>
    </div>
       
    </>
  )
}

export default App;
