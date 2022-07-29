import '../styles/cart-item.css'
import { chevronDown, chevronUp } from './Icons';
const CartItem = ({ id, title, price, img, amount }) => {

    return (
        <div>
            <div className="item-body">
                <div className="item">
                    <img width={140} src={img} alt={title} />
                    <div className="details">
                        <h4 className='title'>{title}</h4>
                        <h4 className='price'>${price}</h4>
                        <button className='remove-btn'>remove</button>
                    </div>
                </div>
                <div className="item-action">
                    <button>{chevronUp}</button>
                    <span>{amount}</span>
                    <button>{chevronDown}</button>
                </div>
            </div>

        </div>
    );
};

export default CartItem;