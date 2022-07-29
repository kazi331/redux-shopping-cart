import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import '../styles/cart-item.css';
import { chevronDown, chevronUp } from './Icons';
const CartItem = ({ id, title, price, img, amount }) => {
const dispatch = useDispatch();
    return (
        <div>
            <div className="item-body">
                <div className="item">
                    <img width={140} src={img} alt={title} />
                    <div className="details">
                        <h4 className='title'>{title}</h4>
                        <h4 className='price'>${price}</h4>
                        <button onClick={() => dispatch(removeItem(id))} className='remove-btn'>remove</button>
                    </div>
                </div>
                <div className="item-action">
                    <button onClick={() => dispatch(increase(id))}>{chevronUp}</button>
                    <span>{amount}</span>
                    <button onClick={() => dispatch(decrease(id))}>{chevronDown}</button>
                </div>
            </div>

        </div>
    );
};

export default CartItem;