import React, { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ItemsList } from '../components/ItemsList/ItemsList';
import './CSS/Search.css'

export const Search = () => {
  const { all_products, all_categories } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams({ q: ''});
  const [selectedOption, setSelectedOption] = useState(null);
  const q = searchParams.get("q");

  if (!all_products) {
    return <div>База продуктов не найдена</div>
  }
  let products = all_products.filter(item => {
    return item.name.toString().toLowerCase().includes(String(q).toLowerCase());
  })
  if(searchParams.get("category") !== null){
    products = products.filter(item => item.category === searchParams.get("category"));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const categoryType = formData.get('categoryType');
  
    searchParams.delete('category');
  
    if (categoryType) {
      searchParams.append('category', categoryType);
    }
    setSearchParams(searchParams);
    products.filter(item => item.category === searchParams.get("category"));
    console.log(products.filter(item => item.category === searchParams.get("category")));
  }

  function handleRadioChange(e){
    setSelectedOption(e.target.value);
  }
  
  return (
    <div className='search'>
      <div className="search-left">
        <form className='search-left_form' onSubmit={handleSubmit}>
          <p>Категория</p>
          {all_categories.map(item => 
            <label>
              <input type="radio" name='categoryType' checked={selectedOption === item.category}
                value={item.category} onChange={handleRadioChange}
              />
              {item.name} 
            </label>
          )}
		      <button type='submit'> Отфильтровать</button>
        </form>
      </div>
      <div className="search-right">
        <ItemsList items = {products}/> 
      </div>
    </div>
  )
}
export default Search;