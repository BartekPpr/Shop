import '../css/Navbar.css'
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

export function Navbar(){
    const { cartItems } = useCart()
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

    return(
       <>
        <nav>
            <Link to="/" className='brandName'><h1>BALEGRO</h1></Link>
            <div className='Parent'>
                <div>Total Items: {totalItems}</div> 
                <div>Total Price: ${totalPrice}</div>
            </div>    
                <Link to="Cart" className='viewCart'>View Cart</Link>
            
        </nav>
        <hr />
        </>
    )    
}