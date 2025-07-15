function Network({image, title, price}){
      return(
            <>
                  <div className=" bg-cover bg-center items-center  overflow-hidden flex flex-col ">
                        <img src={image} alt={title} className="w-118 h-70 rounded-[50px]"/>
                        <div className="mt-2">
                              <h3 className="text-xl text-fuchsia-400 font-bold">{title}</h3>
                        </div>
                        <div className="mt-2">
                              <p className="font-bold">{price}</p>
                        </div>
                  </div>
            </>
      );
};
export default Network;