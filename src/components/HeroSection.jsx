import hero1 from '../assets/hero1.gif';
import hero2 from '../assets/hero2.gif';
import hero3 from '../assets/hero3.gif';
import hero5 from '../assets/hero5.gif';
function HeroSection (){
      return(
            <>
            <div id='#home' className='w-full flex flex-row items-center justify-between '>
                  <div className='flex w-1/2 flex-col mt-30'>
                        <h1 className='text-9xl font-bold uppercase'>Here to connect</h1>
                        <h4 className='text-4xl uppercase font-medium mt-10 text-fuchsia-600'>Untangle the web with us</h4>
                        <div>
                              <button className='mt-40 bg-gradient-to-r from-[#4949a6] to-[#c757be] text-white py-4 px-10 rounded-4xl text-2xl font-medium uppercase'>Connect here</button>
                        </div>
                        
                  </div>
                  <div className='flex w-1/2 flex-wrap flex-row pl-40'>
                        <img src={hero1} alt='hero1' className='w-60 h-80'/>
                        <img src={hero2} alt='hero2' className='w-50 h-70'/>
                        <img src={hero3} alt='hero3' className='w-60 h-80  mt-0'/>
                        <img src={hero5} alt='hero5' className='w-50 h-80  mt-0'/>
                  </div>
             </div>
            </>
      )
}

export default HeroSection;