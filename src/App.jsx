import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import CartContainer from './components/CartContainer'
import Nav from './components/Nav'
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  console.log(cartItems);
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (<>
    <Nav />
    <div className='App'>
      <CartContainer />
    </div>
  </>
  )
}

export default App
