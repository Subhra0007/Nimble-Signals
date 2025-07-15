

function ProductCards ({title, image}){
      return(
            <>
           
                 <div className="h-[400px] w-[300px] rounded-[50px] bg-cover bg-center relative overflow-hidden flex flex-col justify-end items-center p-6 transition-shadow duration-300 hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)]  "
                 style={{ backgroundImage: `url(${image})` }}
                 >
                  <div className="">
                        <h3 className="text-2xl font-medium  neon-text tracking-widest" >{title}</h3>
                  </div>
                  <div>
                        <button className=" mt-5 bg-gradient-to-r from-[#4949a6] to-[#c757be] py-3 px-5 rounded-4xl text-xl">FIND OUT MORE</button>
                  </div> 
                    
             </div>
            </>
      )
}

export default ProductCards;