import "../css/Home.css";
import { Products, type Product} from "../components/Products";
import { useCart } from '../context/CartContext'

export function Home() {
  const { addToCart } = useCart()

  return (
    <div className="cardLayout">
      {Products.map((product, index) => {
        const imageStyle = index === 1 ? { transform: "scaleX(-1)" } : {}; // Image styling for visuals
        
        return (

          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} style={imageStyle}/>
            <h2 className="productName">{product.name}</h2>
            <p>${product.price}</p>
            <button className="addToCartBtn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
      
    </div>
  );
}
