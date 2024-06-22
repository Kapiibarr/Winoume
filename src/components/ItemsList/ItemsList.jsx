import React, { useEffect, useState } from 'react'
import './ItemsList.css'
import Item from '../Item/Item'

export const ItemsList = (props) => {
  const { items } = props;
  const [listItems, setListItems] = useState(items);
  const [selectedOption, setSelectedOption] = useState('');
  
  useEffect(() => {
    setListItems(items);
  }, [items]);
  
  function handleChange(e){
    const value = e.target.value;
    setSelectedOption(value);
    let sortedItems = [...items];
    if(value === 'byname'){
      sortedItems.sort((a,b) => a.name.toLowerCase().localeCompare(b.name));
    }
    if(value === 'pricey'){
      sortedItems.sort((a, b) => a.price < b.price ? 1 : -1);
    }
    if(value === 'cheap'){
      sortedItems.sort((a, b) => a.price > b.price ? 1 : -1);
    }
    setListItems(sortedItems);
  }
  
  return (
    <div className='itemslist'>
      <div className="itemslist-header">
        <div className="itemslist-header_sort">
          &#9660; Сортировать:
          <select value={selectedOption} onChange={handleChange}>
            <option className='hidden' value="">По умолчанию</option>
            <option value='byname'>По названию</option>
            <option value='cheap'>Подешевле</option>
            <option value='pricey'>Подороже</option>
          </select>
        </div>
      </div>
      <div className="itemslist-items">
        {listItems.length > 0
        ? listItems.map(item => <Item 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price} 
                            />)
        : <div className='itemlist-empty'>Продуты не найдены!</div>}
      </div>
    </div>
  )
}
