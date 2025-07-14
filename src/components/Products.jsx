import ProductCards from "./ProductChild/ProductCards";
import product1 from '../assets/product1';
import product2 from '../assets/product2';
import product3 from '../assets/product3';

function Products (){

const products = [
      {id:1, title:'INTERNET PLANS', image:product1 },
      {id:2, title:'ACCESSORIES', image:product2},
      {id:3, title:'BUNDLES', image:product3}
];


      return(
            <>
            <div>
                        <h1>Our Products</h1>
                        <div>

                        </div>                  
             </div>
            </>
      )
}

export default Products;