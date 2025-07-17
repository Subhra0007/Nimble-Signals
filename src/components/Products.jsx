import ProductCards from "./ProductChild/ProductCards";
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';

function Products (){

const products = [
      {id:1, title:'INTERNET PLANS', image:product1 },
      {id:2, title:'ACCESSORIES', image:product2},
      {id:3, title:'BUNDLES', image:product3}
];


      return(
            <>
            <div id="product" className="flex flex-col mt-5 max-w-[80rem] px-30 ">
                  <h1 className="lg:text-6xl sm:text-4xl md:text-5xl font-bold uppercase  tracking-wider neon-text">Our Products</h1>
                  <div className="flex sm:flex-col lg:flex-row md:flex-wrap items-center mt-15 justify-around gap-5">
                        {products.map(product => (
                        <ProductCards 
                        key={product.id} 
                        title={product.title}
                        image={product.image}
                        /> 
                    ))}
                  </div>                  
             </div>
            </>
      )
}

export default Products;