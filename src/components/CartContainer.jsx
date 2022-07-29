import { useDispatch, useSelector } from "react-redux";
import emptyCart from '../assets/empty_cart-512.webp';
import { clearCart } from "../features/cart/cartSlice";
import '../styles/cart-container.css';
import CartItem from "./CartItem";
const CartContainer = () => {
    const { cartItems, amount, total } = useSelector(state => state.cart);
    const dispatch = useDispatch()
    if (amount < 1) {
        return (
            <div>
                <div className="cart-container empty">
                    <h2 className="cart-title">Your Cart is Empty <br />
                        <img src={emptyCart} width="200px" alt="empty cart" />
                    </h2>
                </div>
            </div>
        )
    }
    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart Items ( {amount} ) </h2>
            <div className="cart-body">
                {
                    cartItems.map(item => <CartItem key={item.id} {...item} />)
                }
            </div>
            <div className="cart-footer">
                <h4>Total</h4>
                <h4>${total}</h4>

            </div>
            <div className="clr-cart">
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
        </div>
    );
};

export default CartContainer;