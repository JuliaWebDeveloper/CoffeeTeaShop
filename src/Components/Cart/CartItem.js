import dataProducts from "../../data/dataProducts";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cartSlice";
import trash from "../../assets/trash.svg"

function CartItem({cartItem}) {

    const products = dataProducts.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch();
   
    return (
        <div>
           <p>{products.name}</p>
           <p>{cartItem.quantity} шт.</p>
           <p>Итого: {products.price * cartItem.quantity} ₽</p>
           <span onClick={() => dispatch(deleteItemFromCart({cartItemId: cartItem.id}))}>
             <img className="icon" src={trash} width="30px" alt="trash"/> 
           </span>
        </div>
    )
}
export default CartItem;

