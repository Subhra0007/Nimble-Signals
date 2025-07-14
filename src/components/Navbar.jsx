import logo from '../assets/logo.png';

function Navbar (){
      return(
            <>
            <div className='flex items-center justify-start py-4'>
                  <img src={logo} alt='logo' className='w-19 h-24 mr-3'/>
                  <p className='text-3xl font-medium uppercase'>Nimble Signals</p>
             </div>
            </>
      )
}

export default Navbar;