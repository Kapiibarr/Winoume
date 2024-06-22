import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"
import {all_products, all_categories} from '../components/assets/data'
export const AppContext = createContext({});

export const useShoppingCart= () => {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const cartQuantity = cartItems.reduce((acc, item) => item.quantity + acc, 0);

  const popularItems = all_products.filter(item => item.id < 5) //placeh

  const getItemQuantity = (id) => {
    return (cartItems.find(item => item.id === id) || { quantity: 0 }).quantity;
  };

  const increaseCartQuantity = (id) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  };

  return (
    <AppContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        all_products,
        all_categories,
        popularItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppContextProvider