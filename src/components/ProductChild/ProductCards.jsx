

function ProductCards ({title, image}){
      return(
            <>
           
                 <div className="lg:h-[400px] lg:w-[320px] md:h-[410px] md:w-[350px] sm:h-[350px] sm:w-[250px] rounded-[50px] bg-cover bg-center relative overflow-hidden flex flex-col justify-end items-center p-6 transition-shadow duration-300 hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] "
                 style={{ backgroundImage: `url(${image})` }}
                 >
                  <div className="">
                        <h3 className="md:text-2xl sm:text-xl font-medium  neon-text tracking-widest" >{title}</h3>
                  </div>
                  <div>
                        <button className=" mt-5 bg-gradient-to-r from-[#4949a6] to-[#c757be] md:py-4 md:px-6 sm:py-2 sm:px-3  rounded-4xl md:text-lg sm:text-sm">FIND OUT MORE</button>
                  </div> 
                    
             </div>
            </>
      )
}

export default ProductCards;