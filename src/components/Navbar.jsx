import logo from '../assets/logo.png';
//max-w-7xl mx-auto px-6
function Navbar (){
      return(
      //backdrop-blur-md bg-white/10 shadow-md border-b border-white/20  
            <>
            <nav className=' fixed top-0 left-0  z-50 w-full backdrop-blur-md bg-white/10 shadow-md border-b border-white/20 '>
                <div className=' flex flex-row items-center justify-around  '>
               <div className='flex items-center gap-1.5 '>
                   <img src={logo} alt='logo' className='w-14 h-20'/>
                   <p className='text-xl font-medium uppercase'>Nimble Signals</p>
               </div>
               <ul className='flex justify-evenly gap-20 text-xl font-medium '>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#product'>Product</a></li>
                  <li><a href='#about'>About Us</a></li>
                  <li><a href='#contact'>Contact Us</a></li>

               </ul>
            </div>
            </nav>
            </>
      )
}

export default Navbar;