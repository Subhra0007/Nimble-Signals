import logo from '../assets/logo.png';
//max-w-7xl mx-auto px-6
function Navbar (){
      return(
            <>
            <div className='flex flex-row items-center justify-between fixed top-0 left-0  z-50 bg-fuchsia-950  w-full pl-10  pr-10'>
               <div className='flex items-center '>
                   <img src={logo} alt='logo' className='w-19 h-24'/>
                   <p className='text-3xl font-medium uppercase'>Nimble Signals</p>
               </div>
               <ul className='flex justify-evenly  gap-20 text-2xl font-medium '>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#product'>Product</a></li>
                  <li><a href='#about'>About Us</a></li>
                  <li><a href='#contact'>Contact Us</a></li>

               </ul>
            </div>

            </>
      )
}

export default Navbar;