import { useDispatch } from 'react-redux';
import '../styles/modal.css';
import toast from 'react-hot-toast'

const Modal = ({msg, action, setIsOpen, notify }) => {
    const dispatch = useDispatch();
    return (
        <div className='modal-container'>
            <div className="modal">
                <h2 className="msg">{msg}</h2>
                <div className="btns">
                    <button onClick={() => setIsOpen(false)} className="btn cancel">Cancel</button>
                    <button onClick={() => {
                        dispatch(action);
                        setIsOpen(false)
                        toast.success(notify)
                    }} className="btn delete">Confirm</button>
                </div>
            </div>

        </div>
    );
};

export default Modal;