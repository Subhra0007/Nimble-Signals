import AccessoriesImage1 from '../assets/AccessoriesImage1.jpg';
import AccessoriesImage2 from '../assets/AccessoriesImage2.jpg';
import Network from './AccessoriesChild/Network';

function Accessories (){

      const accessories = [
            {id: 1, image: AccessoriesImage1, title: "Router Set", price: "₹699" },
            {id: 2, image: AccessoriesImage2, title: "Network Extender", price: "₹499" }
      ];
      return(
            <>
            <div className="grid grid-rows-1 md:mt-20 sm:mt-15 max-w-[80rem] px-30">
                  <h1 className="lg:text-6xl md:text-5xl sm:text-4xl font-bold  uppercase  tracking-wider neon-text">Accessories</h1>
                  <div className="grid md:grid-cols-2 sm:grid-cols-1 md:mt-15 sm:mt-10 justify-items-center  gap-5">
                        {
                              accessories.map(accessory =>(
                                    <Network
                                     key={accessory.id}
                                     image={accessory.image}
                                     title={accessory.title}
                                     price={accessory.price}
                                    />
                              ))
                        }
                  </div>
             </div>
            </>
      )
}

export default Accessories;