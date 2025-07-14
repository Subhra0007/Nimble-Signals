import hero1 from '../assets/hero1.gif';
import hero2 from '../assets/hero2.gif';
import hero3 from '../assets/hero3.gif';
import hero5 from '../assets/hero5.gif';

function HeroSection() {
  return (
    <div id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center w-full  pl-10  pr-10 ">
      
      <div className="w-full">
        <h1 className="text-8xl  font-bold uppercase">
          Here to <br /> connect
        </h1>
        <h4 className="text-2xl md:text-4xl uppercase font-medium mt-10 text-fuchsia-400">
          Untangle the web with us
        </h4>
        <button className="mt-20 bg-gradient-to-r from-[#4949a6] to-[#c757be] py-4 px-10 rounded-4xl text-2xl  font-medium uppercase">
          Connect here
        </button>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-6 place-items-center w-full mt-10 ">
        <img src={hero1} alt="hero1" className="w-60 h-80" />
        <img src={hero2} alt="hero2" className="w-60 h-80" />
        <img src={hero3} alt="hero3" className="w-60 h-80" />
        <img src={hero5} alt="hero5" className="w-60 h-80" />
      </div>
    </div>
  );
}

export default HeroSection;