import { useDispatch } from "react-redux";
import { useState } from "react";
import Quantity from '../Cart/Quantity';
import { addItemToCart } from "../../redux/cartSlice";


function ProductItem({product}) {

    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);

    return(
        <div className="productItem-block">
            <img className="image" src={`${product.image}.jpg`}/>
            <h3>{product.name}</h3>
            <p><b>Вес товара</b> {product.productWeight}</p>
            <p>Описание: {product.description}</p>
            <p><b>{product.price} ₽</b></p>
            <div className="productItemQuantityPrice-block">
               <Quantity quantity={quantity} setQuantity={setQuantity}/>
               <button className="btn-cart" onClick={() => {dispatch(addItemToCart({product,quantity}))}}>Добавить в корзину</button>
            </div>
        </div>
    )
}
export default ProductItem;