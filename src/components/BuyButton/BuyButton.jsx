import React, { useContext } from "react"
import './BuyButton.css'
import { AppContext } from "../../context/AppContext"

export const BuyButton = (props) => {
  const { getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity,} = useContext(AppContext)
  const quantity = getItemQuantity(props.id)
  return (
    <div className='buybutton'>
      {quantity === 0 ? (
            <button className='buybutton-true' onClick={() => increaseCartQuantity(props.id)}>
              + Купить
            </button>
          ) : (
            <div className="buybutton-false">
              <button onClick={() => decreaseCartQuantity(props.id)}>−</button>
                <div>
                  <span className="buybutton-false_quantity">{quantity}</span>
                </div>
                <button onClick={() => increaseCartQuantity(props.id)}>+</button>
            </div>
          )}
    </div>
  )
}
