import React, { useContext } from 'react'
import { CartItemsList } from '../components/CartItemsList/CartItemsList'
import { AppContext } from "./../context/AppContext"
import { CartBuy } from '../components/CartBuy/CartBuy'
import './CSS/Cart.css'
import Popular from '../components/Popular/Popular'

export const Cart = () => {
  const { cartItems, all_products } = useContext(AppContext)
  const cartItemsIds = cartItems && cartItems.map(item => item.id)
  const items = all_products.filter(i => cartItemsIds.includes(i.id))
  return (
    <div>
      {items.length === 0 ? (
        <p>Нету товаров в корзине!</p>
      ) : (
        <div className='hasitems'>
          <CartItemsList {...items}/>
          <CartBuy/>
        </div>
      )}
      <Popular/>
    </div>
  )
}
export default Cart