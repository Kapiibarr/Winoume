import React from 'react'
import './Item.css'
import '../BuyButton/BuyButton.jsx'
import { Link } from 'react-router-dom'
import { BuyButton } from '../BuyButton/BuyButton.jsx'

export const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} >
        <img src={props.image} alt='' />
        <p className='name'>{String(props.name)}</p>
      </Link>
      <div className="item-price-buy">
        <p className='item-price-buy_price'>{props.price} ₽</p>
        <BuyButton className='item-buybutton' {...props}/>
      </div>
    </div>
  )
}

export default Item;
