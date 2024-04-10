import { useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "../../redux/cartSlice";
import shopBag from "../../assets/shopbag.svg";

function Cart() {
    
   const totalPrice = useSelector(getTotalPrice);
   const totalQuantity = useSelector(getTotalQuantity);

    return (
      <div>
        <p><img className="shopBag" src={shopBag} width='30px' alt="ShopBag"/> 
        <b>Итого: {totalQuantity} шт., {totalPrice} ₽</b></p>
      </div>
    )
}
export default Cart;