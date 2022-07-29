import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Nav from './components/Nav';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal'

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const { isOpen } = useSelector(state => state.modal);
  console.log(isOpen)
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (<>
    <Nav />
    {
      isOpen && <Modal />
    }
    <div className='App'>
      <CartContainer />
    </div>
  </>
  )
}

export default App
