import React, { useContext } from "react"
import "./CartItemsList.css"
import { CartItem } from "../CartItem/CartItem"

export const CartItemsList = (props) => {
  
  const itemsArray = Object.entries(props).map(([key, value]) => ({ id: key, ...value }))
  return (
    <div className="cart-items">
      <div className="cart-items__left">
        {itemsArray.map((item, i)=>{
                  return <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  category={item.category}
              />
        })}
      </div>
    </div>
  )
}