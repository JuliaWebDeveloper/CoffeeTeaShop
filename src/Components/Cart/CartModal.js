import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from "../Cart/Cart";
import CartItem from "./CartItem";
import { getCartItems } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

function CartModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartItems = useSelector(getCartItems);

  return (
    <div>
      <Button className='btn-modal' onClick={handleShow}>
        <Cart />
      </Button>

      <Modal show={show} onHide={handleClose} closeVariant={'white'} scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>Ваш заказ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Cart/>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-modal' onClick={handleClose}>
            К оформлению
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;