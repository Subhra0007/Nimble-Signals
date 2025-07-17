import AboutVideo from '../assets/AboutVideo.mp4'
function About (){
      return(
            <>
            <div id='about' className='grid md:grid-cols-2 sm:grid-cols-1  max-w-[78rem] px-30 gap-30 mt-60'>
                  <div>
                        <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase  tracking-wider neon-text">about us</h1>
                        <p className='mt-10'>Innovation and technology should make life simple. That's why, here at Nimble Signals, we make sure innovation works for you, your business and your people.</p>
                        <p className='mt-10'>Our reliable internet connection services enable you to enjoy your life more. Our technologies improve every day, so you can confidently focus on what really matters.</p>
                        <div className='flex flex-row gap-10 mt-10'>
                              <button className=" mt-5 bg-gradient-to-r from-[#4949a6] to-[#c757be] md:py-4 md:px-6 sm:py-2 sm:px-3 rounded-4xl md:text-lg sm:text-sm uppercase" >see our products</button>
                              <button className=" mt-5 bg-blue-950 md:py-4 md:px-6 sm:py-2 sm:px-3 rounded-4xl md:text-lg sm:text-sm uppercase inset-ring-2 inset-ring-purple-400">get in touch</button>
                        </div>
                        
                  </div>
                  <div className=''>
                        <video src={AboutVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className='rounded-[50px]'
                                    >
                        </video>
                  </div>
             </div>
            </>
      )
}

export default About;