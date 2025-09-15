import { useState, useContext, createContext, type ReactNode } from "react";
import type { Product } from "../components/Products";

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  decrementQuantity: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const itemInCart = prev.find((item) => item.id === product.id);

      if (itemInCart) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  const decrementQuantity = (id: number) => {
    setCartItems((prev) => prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
    const removeFromCart = (id: number) => {
  setCartItems(prev => prev.filter(item => item.id !== id));
};
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
