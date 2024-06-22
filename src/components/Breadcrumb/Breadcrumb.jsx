import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../assets/breadcrumb_arrow.png'

export const Breadcrumb = (props) => {
    const {product} = props
    const categoryAliases = {
      wine: 'Вино',
      vodka: 'Водка',
      cognac: 'Коньяк',
      rum: 'Ром',
    }
    if (!product) {
        return null
      }
      const categoryAlias = product.category ? categoryAliases[product.category.toLowerCase()] || product.category : String(product.category);
  return (
    <div className='breadcrumb'>
        Главная <img src={arrow_icon} alt=''/> {categoryAlias} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}
export default Breadcrumb;