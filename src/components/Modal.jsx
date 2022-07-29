import '../styles/modal.css'
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';
const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div className='modal-container'>
            <div className="modal">
                <h2 className="msg">Are you sure to do this action?</h2>
                <div className="btns">
                    <button onClick={() => dispatch(closeModal())} className="btn cancel">Cancel</button>
                    <button onClick={() => {
                        dispatch(clearCart());
                        dispatch(closeModal())
                    }} className="btn delete">Confirm</button>
                </div>
            </div>

        </div>
    );
};

export default Modal;