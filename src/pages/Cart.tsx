import "../css/Cart.css";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { cartItems, removeFromCart, addToCart, decrementQuantity } = useCart();

  if (cartItems.length === 0) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <div className="main">
      {cartItems.map((item) => (
        <div key={item.id} className="cartItem">
          <img src={item.image} alt={item.name} style={item.id === 2 ? {transform: 'scaleX(-1)'} : {}}/>
          <div className="name">{item.name}</div>
          <div className="pricePerProduct">${item.price.toFixed(2)}</div>
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value)
              if(newQuantity > item.quantity){
                addToCart(item)
              } 
              else if(newQuantity < item.quantity){
                decrementQuantity(item.id)
              }
            }}
            style={{ width: `${item.quantity.toString().length + 1}ch` }}
          />
          <div className="totalPrice">Price: ${(item.price * item.quantity).toFixed(2)}</div>
          <button onClick={() => removeFromCart(item.id)} className="removeFromCartBTN">Remove Product</button>
        </div>
      ))}
    </div>
  );
}
