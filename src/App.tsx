// import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home"
import { Cart } from './pages/Cart'
import { CartProvider } from './context/CartContext';
 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Cart' element={<Cart />} />
    </Routes>
    </CartProvider>
    </>
  )
}

export default App
