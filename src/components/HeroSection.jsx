import hero1 from '../assets/hero1.gif';
import hero2 from '../assets/hero2.gif';
import hero3 from '../assets/hero3.gif';
import hero5 from '../assets/hero5.gif';

function HeroSection() {
  return (
    <div id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center max-w-[80rem] mx-auto px-30 sm:mt-30 md:mt-5 lg:mt-5 lg:gap-35 sm:gap-0">
      
      <div >
        <h1 className="sm:text-5xl md:text-6xl lg:text-8xl  font-bold uppercase  tracking-widest  neon-text">
          Here to <br /> connect
        </h1>
        <h4 className="text-1xl md:text-2xl uppercase font-medium lg:mt-10 sm:mt-5 text-fuchsia-400 text-shadow-lg  tracking-widest ">
          Untangle the web with us
        </h4>
        <button className="lg:mt-15 sm:mt-5 bg-gradient-to-r from-[#4949a6] to-[#c757be] md:py-4 md:px-6 sm:py-2 sm:px-3 rounded-4xl md:text-lg sm:text-sm uppercase">
          Connect here
        </button>
      </div>

      
      <div className="grid grid-cols-2  justify-center items-center">
        <img src={hero1} alt="hero1" className="sm:w-35 sm:h-35 md:h-45 md:w-45 lg:w-55 lg:h-55" />
        <img src={hero2} alt="hero2" className="sm:w-35 sm:h-35 md:h-45 md:w-45 lg:w-55 lg:h-55" />
        <img src={hero3} alt="hero3" className="sm:w-35 sm:h-35 md:h-45 md:w-45 lg:w-55 lg:h-55" />
        <img src={hero5} alt="hero5" className="sm:w-35 sm:h-35 md:h-45 md:w-45 lg:w-55 lg:h-55" />
      </div>
    </div>
  );
}

export default HeroSection;