import PlanImage from '../assets/PlanImage.png'
function Plans (){
      return(
            <>
            <div  className='flex flex-row  mt-15 max-w-[78rem] px-30 mx-auto '>
                  <div>
                        <h1 className='text-6xl font-bold  uppercase tracking-wider neon-text'>Internet <br/>  Plans</h1>
                        <img src={PlanImage} alt='PlanImage' className='w-220 h-70 mt-20 rounded-[50px]'/>
                  </div>
                  <div className='pl-20'>
                        <div>
                              <h5 className='text-xl font-medium text-fuchsia-400 uppercase'>Basic Plan</h5>
                              <p className='mt-3'>We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it and we'll deliver it.</p>
                        </div>
                        <div className='mt-10'>
                              <h5 className='text-xl font-medium text-fuchsia-400 uppercase'>Premium Plan</h5>
                              <p className='mt-3 flex flex-wrap '>We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it and we'll deliver it.</p>
                        </div>
                        <div className='mt-10'>
                              <h5 className='text-xl font-medium text-fuchsia-400 uppercase'>Group Plan</h5>
                              <p className='mt-3'>We want what works for you. With Nimble Signals, you get to decide the inclusion and details of your internet plans. Just envision it and we'll deliver it.</p>
                        </div>
                        <button className="mt-15 bg-gradient-to-r from-[#4949a6] to-[#c757be] py-4 px-6 rounded-4xl text-xl  uppercase">compare plans</button>
                  </div>
                  
             </div>
            </>
      )
}

export default Plans;