import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import FooterVideo from '../assets/FooterVideo.mp4';
import Logo from '../assets/logo.png'
function Contact (){
      return(
            <>
            <div id='contact'  className='min-h-screen grid grid-cols-1 md:grid-cols-2 mt-20 max-w-[78rem] gap-30'>
                  <div>
                        <div>
                              <video className="absolute z-0 h-full"
                              src={FooterVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              ></video>
                              <div className='px-30 relative z-10 '>
                                    <div className='flex items-center gap-1.5 '>
                                          <img src={Logo} alt='Logo' className=' w-14 h-20 mt-20'/>
                                          <h4 className='uppercase text-xl font-medium mt-20'>Nimble Signals</h4>
                                    </div>
                        
                        <h1 className="text-6xl font-bold uppercase  tracking-wider neon-text py-10">Connect to what counts</h1>
                        <h4 className='text-xl font-bold mt-2 uppercase'>Let's get started</h4>
                        </div>
                  </div>
                   </div>
                  <div className="mt-25">
                        <div>
                              <h4 className="text-xl font-bold text-fuchsia-500">PHONE</h4>
                              <p className="font-medium">+91-123-456-7890</p>
                        </div>
                        <div className="mt-5">
                              <h4 className="text-xl font-bold text-fuchsia-500">EMAIL</h4>
                              <p className="font-medium">hello@reallygreatsite.com</p>
                        </div>
                        <div className="mt-5">
                              <h4 className="text-xl font-bold text-fuchsia-500">SOCIAL</h4>
                              <div className="flex flex-row gap-3 mt-2">
                              <a href="https://facebook.com" target="_blank" >
                                    <FaFacebookF className="text-2xl text-white " />
                              </a>
                             
                              <a href="https://twitter.com" target="_blank" >
                                    <FaTwitter className="text-2xl text-white " />
                              </a>
                               <a href="https://instagram.com" target="_blank">
                                    <FaInstagram className="text-2xl text-white "/>
                              </a>
                              </div>
                        </div>
                  </div>
             </div>
            </>
      )
}

export default Contact;