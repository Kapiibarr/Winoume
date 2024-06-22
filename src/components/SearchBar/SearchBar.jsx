import React from 'react'
import './SearchBar.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import searchbarIcon from '../assets/searchbar.png'

export const SearchBar = () => {
  const navigate = useNavigate();
  
  return (
    <div className='searchbar'>
      <form className='searchbar-form' onSubmit={e => {
        e.preventDefault();
        navigate(`/search/?q=${e.target.input.value}`);
      }}>
        <img className='searchbar-icon' src={searchbarIcon} alt='' />
        <input className='searchbar-input' name="input" type="text" />
        <button type="submit">Найти</button>
      </form>
    </div>
  )
}

export default SearchBar;
