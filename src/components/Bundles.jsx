import BundlesImage1 from '../assets/BundlesImage1.png';
import BundlesImage2 from '../assets/BundlesImage2.png';
import BundlesImage3 from '../assets/BundlesImage3.png';
import Package from './BundlesChild/Package';
function Bundles (){

      const BundlesPackages = [
            {id: 1, image: BundlesImage1, description: "FOR THOSE GETTING STARTED", title: "Starter Package", price:"₹299"},
            {id: 2, image: BundlesImage2, description: "FOR THOSE WITH KIDS", title: "Family Package", price: "₹599"},
            {id: 3, image: BundlesImage3, description: "FOR THOSE IN TEAMS", title: "Corporate Package", price: "₹799"}
      ];

      return(
            <>
            <div className="flex flex-col mt-20 max-w-[78rem] px-30">
                  <h1 className="text-6xl font-bold uppercase  tracking-wider neon-text">BUNDLES</h1>
                  <div className="flex flex-row  items-center mt-15 justify-around gap-5">
                        {BundlesPackages.map(BundlesPackage =>(
                              <Package
                                    key={BundlesPackage.id}
                                    image={BundlesPackage.image}
                                    description={BundlesPackage.description}
                                    title={BundlesPackage.title}
                                    price={BundlesPackage.price}
                              />
                        ))}
                  </div>
             </div>
            </>
      )
}

export default Bundles;