import React from 'react'
import './ProductDescriptionBox.css'

export const ProductDescriptionBox = (props) => {
    const { product } = props;
    if (!product) {
        return 'Нет описания.'
      }
    return (
        <div className='product-description-box'>
            <span className='product-description-box__title'>Описание</span>
            <span className='product-description-box__value'>{product.description}</span>
        </div>
    )
}
