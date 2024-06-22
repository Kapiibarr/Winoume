import React from 'react'
import './ChooseCategory.css'
import { NavLink } from 'react-router-dom';

export const ChooseCategory = () => {
  return (
    <div className='choosecategory'>
      <ul className='choosecategory-navigation'>
        <li><NavLink exact to="/wine" activeClassName="active">Вино</NavLink></li>
        <li><NavLink exact to="/vodka" activeClassName="active">Водка</NavLink></li>
        <li><NavLink exact to="/cognac" activeClassName="active">Коньяк</NavLink></li>
        <li><NavLink exact to="/rum" activeClassName="active">Ром</NavLink></li>
      </ul>
    </div>
  )
}
export default ChooseCategory;