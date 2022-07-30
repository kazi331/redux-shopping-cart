import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartContainer from './components/CartContainer';
import Nav from './components/Nav';
import { calculateTotals } from './features/cart/cartSlice';
import About from './pages/About';
import Products from './pages/Products';
import Works from './pages/Works';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);


  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (<>
    <Nav />
    <div className='App'>
      <Routes>
        <Route path="/" element={<CartContainer />} />
        <Route path="about" element={<About/>} />
        <Route path="products" element={<Products/>} />
        <Route path="works" element={<Works/>} />
      </Routes>
    </div>
    <Toaster />
  </>
  )
}

export default App
