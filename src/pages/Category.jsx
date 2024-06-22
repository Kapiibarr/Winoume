import React, { useContext, useEffect, useState } from 'react'
import './CSS/Category.css'
import { AppContext } from '../context/AppContext'
import ChooseCategory from '../components/ChooseCategory/ChooseCategory'
import { ItemsList } from '../components/ItemsList/ItemsList'

export const Category = (props) => {
    const { all_products } = useContext(AppContext);
    const { category } = props;
    const [categoryItems, setCategoryItems] = useState([]);
    useEffect(() => {
        const filteredItems = all_products.filter(i => i.category === category);
        setCategoryItems(filteredItems);
    }, [all_products,category]);
    return (
        <div className='category'>
            <ChooseCategory />
            <ItemsList items = {categoryItems} />
        </div>
    )
}

export default Category;
