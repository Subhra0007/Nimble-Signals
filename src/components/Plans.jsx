import PlanImage from '../assets/PlanImage.png'
function Plans (){
      return(
            <>
            <div  className='flex lg:flex-row flex-col mt-15 max-w-[80rem] px-30 mx-auto '>
                  <div>
                        <h1 className='lg:text-6xl md:text-5xl sm:text-4xl font-bold  uppercase tracking-wider neon-text'>Internet Plans</h1>
                        <img src={PlanImage} alt='PlanImage' className='lg:w-220 lg:h-70 sm:w-100 sm:h-50 sm:mt-15 mt-20 rounded-[50px]'/>
                  </div>
                  <div className='md:pl-20 sm:pl-0 md:mt-0 sm:mt-5'>
                        <div>
                              <h5 className='md:text-xl sm:text-lg font-medium text-fuchsia-400 uppercase'>Basic Plan</h5>
                              <p className='mt-3'>We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it and we'll deliver it.</p>
                        </div>
                        <div className='mt-10'>
                              <h5 className='md:text-xl sm:text-lg font-medium text-fuchsia-400 uppercase'>Premium Plan</h5>
                              <p className='mt-3 flex flex-wrap '>We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it and we'll deliver it.</p>
                        </div>
                        <div className='mt-10'>
                              <h5 className='md:text-xl sm:text-lg font-medium text-fuchsia-400 uppercase'>Group Plan</h5>
                              <p className='mt-3'>We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it and we'll deliver it.</p>
                        </div>
                        <button className="mt-15 bg-gradient-to-r from-[#4949a6] to-[#c757be] md:py-4 md:px-6 sm:py-2 sm:px-3 rounded-4xl md:text-lg sm:text-sm uppercase">compare plans</button>
                  </div>
                  
             </div>
            </>
      )
}

export default Plans;