
function Package({image, description, title, price}){
      return(
            <>
            <div className=" bg-cover bg-center items-center overflow-hidden flex flex-col  ">
                  <img src={image} alt={title} className="rounded-[50px] lg:w-80 md:w-75 md:h-75 sm:h-65 sm:w-65"/>
                  <div className="mt-4">
                        <p>{description}</p>
                  </div>
                  <div className="mt-2">
                        <h3 className="md:text-xl sm:text-lg text-fuchsia-400 font-bold">{title}</h3>
                  </div>
                  <div className="mt-2">
                        <p className="font-bold">{price}</p>
                  </div>
            </div>
            </>
      );
};
export default Package;