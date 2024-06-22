import React from 'react'
import './CartItem.css'
import '../BuyButton/BuyButton.jsx'
import { Link } from 'react-router-dom'
import { BuyButton } from '../BuyButton/BuyButton.jsx'

export const CartItem = (props) => {
  return (
    <div className='cart-item'>
      <Link to={`/product/${props.id}`}>
        <div className="cart-item-image">
          <img src={props.image} alt='' />
        </div>
      </Link>
      <div className="cart-item-name">
        <p>{String(props.name)}</p>
      </div>
      <div className='cart-item-price-buy'>
        <p className='cart-item-price-buy_price'>{props.price} ₽</p>
        <BuyButton className='cart-item-price-buy_buybutton' {...props}/>
      </div>
    </div>
  )
}

export default CartItem;