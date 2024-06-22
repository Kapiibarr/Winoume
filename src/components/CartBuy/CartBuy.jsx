import React, { useContext } from 'react'
import { AppContext } from "../../context/AppContext"
import "./CartBuy.css"

export const CartBuy = () => {
    const { cartItems, all_products } = useContext(AppContext)
    const productLookup = all_products.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  return (
    <div className='cartbuy'>
        <div className='cartbuy-price'>
            <p>Итого</p>
            <p>{cartItems.reduce((total, cartItem) => {
                const item = productLookup[cartItem.id]
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            }₽</p>
        </div>
        <button className='cartbuy-button'>Купить</button>
    </div>
  )
}
