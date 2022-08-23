import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartContainer from './components/CartContainer';
import Nav from './components/Nav';
import { calculateTotals, loadProducts } from './features/cart/cartSlice';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Works from './pages/Works';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(loadProducts())
}, [])
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (<>
    <Nav />
    <div className='App'>
      <Routes>
        <Route path="/" element={<CartContainer />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
    <Toaster />
  </>
  )
}

export default App
