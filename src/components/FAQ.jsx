import BackgroundVideo from '../assets/BackgroundVideo.mp4';
import FaqImage1 from '../assets/FaqImage1.png';
import FaqImage2 from '../assets/FaqImage2.png';
import FaqImage3 from '../assets/FaqImage3.png';

function FAQ (){
      return(
            <>
            <div className='flex flex-col mt-20 '>
                  <video className="absolute object-cover z-0 w-full min-h-screen h-full"
                   src={BackgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                   ></video>
                   <div className='max-w-[80rem] px-30 relative z-10'>
                  <h1 className="text-6xl font-bold uppercase  tracking-wider neon-text py-10">faqs</h1>
                  <div className='flex flex-row mt-10 gap-6'>
                        <div>
                              <img src={FaqImage1} alt='FaqImage1'className='w-10 h-10'/>
                              <h3 className='md:text-xl sm:text-sm font-bold mt-5'>How will I know which internet plan is suitable for me?</h3>
                              <p className='mt-7 md:text-lg sm:text-sm'>Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users.</p>
                        </div>
                        <div>
                              <img src={FaqImage2} alt='FaqImage2' className='w-10 h-10'/>
                              <h3 className='md:text-xl sm:text-sm font-bold mt-5'>Does Nimble Signals cover installation fees & services?</h3>
                              <p className='mt-7 md:text-lg sm:text-sm'>Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users.</p>
                        </div>
                        <div>
                              <img src={FaqImage3} alt='FaqImage3' className='w-10 h-10'/>
                              <h3 className='md:text-xl sm:text-sm font-bold mt-5'>Is customer service available 24/7?</h3>
                              <p className='mt-7 md:text-lg sm:text-sm'>Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users.</p>
                        </div>
                        </div>
                  </div>
             </div>
            </>
      )
}

export default FAQ;