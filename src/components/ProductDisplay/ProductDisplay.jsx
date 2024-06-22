import React, { useContext } from 'react';
import './ProductDisplay.css';
import { BuyButton } from '../BuyButton/BuyButton';

export const ProductDisplay = (props) => {
    const {product} = props;
    return (
        <div className='product-display'>
            <div className="product-display__left">
                <div className="product-display__image">
                    <img src={product.image} alt=""/>
                </div>
            </div>
            <div className="product-display__right">
                <div className="product-display__name">
                    <h1>{product.name}</h1>
                </div>
                <div className="product-display__props-list">
                    <div className="product-display__prop">
                        <div className="product-display__prop-label">
                            <span>Крепкость:</span>
                        </div>
                        <div className="product-display__prop-line"></div>
                        <div className="product-display__prop-value">
                            {product.strength}%
                        </div>
                    </div>
                    <div className="product-display__prop">
                        <div className="product-display__prop-label">
                            <span>Страна:</span>
                        </div>
                        <div className="product-display__prop-line"></div>
                        <div className="product-display__prop-value">
                            {product.country}
                        </div>
                    </div>
                </div>
                <div className="product-display__price">
                    <span>{product.price} ₽</span>
                </div>
                <div className="product-display__add-to-cart">
                    <BuyButton {...product}/>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay
