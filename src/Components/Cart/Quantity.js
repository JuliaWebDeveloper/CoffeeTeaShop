function Quantity({quantity,setQuantity}) {

    const increase = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const decrease = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return(
        <div className="quantity-block">
            <button className="btn-cart" onClick={increase}>+</button>
            <span>{quantity}</span>
            <button className="btn-cart" onClick={decrease}>-</button>
        </div>
    )
}
 
export default Quantity;