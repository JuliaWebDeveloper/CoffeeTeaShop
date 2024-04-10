import ProductItem from "./ProductItem";
import dataProducts from "../../data/dataProducts";
import { getSelectedCategory } from "../../redux/productsSlice";
import { useSelector } from "react-redux";

function Products() {

    const selectedCategory = useSelector(getSelectedCategory);
    
    return(
        <div>
            <h2>{selectedCategory}</h2>
            <div className="products-block">
                {dataProducts
                .filter(product => {
                  if(selectedCategory === 'Все') return true;
                  return selectedCategory === product.category;
                })
                .map(product => <ProductItem product={product}/>)}
            </div>
        </div>
    )
}
export default Products;