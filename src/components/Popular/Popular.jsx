import React, { useContext } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { AppContext } from '../../context/AppContext'

export const Popular = () => {
  const { popularItems } = useContext(AppContext);
  return (
    <div className='popular'>
        <h1>Популярно</h1>
        <div className='popular-items'>
            {popularItems.map((item,i)=>{
                return <Item
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
export default React.memo(Popular);