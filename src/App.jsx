import { useState } from 'react'
import './App.css'
import CartContainer from './components/CartContainer'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  <Nav />
    <div className='App'>
      <CartContainer/>
    </div>
  </>
  )
}

export default App
