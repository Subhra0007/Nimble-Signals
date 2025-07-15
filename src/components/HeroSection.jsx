import hero1 from '../assets/hero1.gif';
import hero2 from '../assets/hero2.gif';
import hero3 from '../assets/hero3.gif';
import hero5 from '../assets/hero5.gif';

function HeroSection() {
  return (
    <div id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center max-w-[78rem] mx-auto px-30">
      
      <div >
        <h1 className="text-8xl  font-bold uppercase  tracking-widest  neon-text">
          Here to <br /> connect
        </h1>
        <h4 className="text-1xl md:text-3xl uppercase font-medium mt-10 text-fuchsia-400 text-shadow-lg  tracking-widest ">
          Untangle the web with us
        </h4>
        <button className="mt-15 bg-gradient-to-r from-[#4949a6] to-[#c757be] py-4 px-6 rounded-4xl text-xl  uppercase">
          Connect here
        </button>
      </div>

      
      <div className="grid grid-cols-2 place-items-center">
        <img src={hero1} alt="hero1" className="w-55 h-55" />
        <img src={hero2} alt="hero2" className="w-55 h-55" />
        <img src={hero3} alt="hero3" className="w-60 h-60" />
        <img src={hero5} alt="hero5" className="w-60 h-60" />
      </div>
    </div>
  );
}

export default HeroSection;