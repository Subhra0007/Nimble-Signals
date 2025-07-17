import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
 import Products from './components/Products';
import Plans from './components/Plans';
import Bundles from './components/Bundles';
import Accessories from './components/Accessories';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
//bg-gradient-to-r from-[#3f0447] to-[#0e0e3b] 
function App() {
  

  return (
    <>
    <div className=" bg-gradient-to-r from-blue-950 to-purple-900  text-white  overflow-y-auto overflow-x-hidden">
       <Navbar/>
       <HeroSection/>
       <Products/>
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
