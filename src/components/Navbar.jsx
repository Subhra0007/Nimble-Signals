import logo from '../assets/logo.png';

function Navbar (){
      return(
 
            <>
            <nav className=' fixed top-0 left-0  z-50 w-full backdrop-blur-md bg-white/10 shadow-md border-b border-white/20 '>
                <div className=' flex flex-col md:flex-row  items-center justify-around  '>
               <div className='flex items-center gap-1 '>
                   <img src={logo} alt='logo' className='w-14 h-20'/>
                   <p className='text-xl font-medium uppercase'>Nimble Signals</p>
               </div>
               <ul className='flex  md:flex-row   justify-evenly gap-29  font-medium '>
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